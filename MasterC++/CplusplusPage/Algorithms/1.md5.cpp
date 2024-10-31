/**
 * @file
 * @author [tGautot](https://github.com/tGautot)
 * @brief Simple C++ implementation of the [MD5 Hashing
 * Algorithm](https://en.wikipedia.org/wiki/MD5)
 * @details
 * The [MD5 Algorithm](https://en.wikipedia.org/wiki/MD5) is a
 * hashing algorithm which was designed in 1991 by [Ronal
 * Rivest](https://en.wikipedia.org/wiki/Ron_Rivest).
 *
 * MD5 is one of the most used hashing algorithm there is. Some of its
 * use cases are:
 *  1. Providing checksum for downloaded software
 *  2. Store salted password
 *
 * However MD5 has been known to be cryptographically weak for quite some
 * time, yet it is still widely used. This weakness was exploited by the
 * [Flame Malware](https://en.wikipedia.org/wiki/Flame_(malware)) in 2012
 *
 * ### Algorithm
 * First of all, all values are expected to be in [little endian]
 * (https://en.wikipedia.org/wiki/Endianness). This is especially important
 * when using part of the bytestring as an integer.
 *
 * The first step of the algorithm is to pad the message for its length to
 * be a multiple of 64 (bytes). This is done by first adding 0x80 (10000000)
 * and then only zeroes until the last 8 bytes must be filled, where then the
 * 64 bit size of the input will be added
 *
 * Once this is done, the algo breaks down this padded message
 * into 64 bytes chunks. Each chunk is used for one *round*, a round
 * breaks the chunk into 16 blocks of 4 bytes. During these rounds
 * the algorithm will update its 128 bit state (represented by 4 ints: A,B,C,D)
 * For more precisions on these operations please see the [Wikipedia
 * article](https://en.wikipedia.org/wiki/MD5#Algorithm).
 * The signature given by MD5 is its 128 bit state once all rounds are done.
 * @note This is a simple implementation for a byte string but
 * some implementations can work on bytestream, messages of unknown length.
 */
using namespace std;

#include <algorithm>  /// Used for copy
#include <array>      /// Used for array
#include <cassert>    /// Used for assert
#include <cstdint>    /// Used for memory copy
#include <iostream>   /// Used for IO operations
#include <string>     /// Used for strings
#include <vector>     /// Used for vector

/* Source Helper:   https://clang.llvm.org/extra/clang-tidy/checks/readability/string-compare.html
 *                  https://clang.llvm.org/extra/clang-tidy/checks/modernize/concat-nested-namespaces.html
*/

/**
 * @namespace hashing
 * @brief Hashing algorithms
 */
/**
 * @namespace MD5
 * @brief Functions for the [MD5](https://en.wikipedia.org/wiki/MD5) algorithm
 * implementation
 */
namespace hashing::md5 {
/**
 * @brief Rotates the bits of a 32-bit unsigned integer
 * @param n Integer to rotate
 * @param rotate How many bits for the rotation
 * @return uint32_t The rotated integer
 */
uint32_t leftRotate32bits(const uint32_t n, const size_t rotate) {
    return (n << rotate) | (n >> (32 - rotate));
}
/**
 * @brief Checks whether integers are stored as big endian or not
 * @note Taken from [this](https://stackoverflow.com/a/1001373) StackOverflow
 * post
 * @return true IF integers are detected to work as big-endian
 * @return false IF integers are detected to work as little-endian
 */
bool isBigEndian() {
    constexpr union {
        uint32_t i;
        array<char, 4> c;
    } bigendian = {0x01020304};

    return bigendian.c[0] == 1;
}
/**
 * @brief Sets 32-bit integer to little-endian if needed
 * @param n Number to set to little-endian (uint32_t)
 * @return uint32_t param n with binary representation as little-endian
 */
uint32_t toLittleEndian32(uint32_t n) {
    if (!isBigEndian()) {
        return ((n << 24) & 0xFF000000) | ((n << 8) & 0x00FF0000) | ((n >> 8) & 0x0000FF00) | ((n >> 24) & 0x000000FF);
    }
    // Machine works on little endian, no need to change anything
    return n;
}
/**
 * @brief Sets 64-bit integer to little-endian if needed
 * @param n Number to set to little-endian (uint64_t)
 * @return uint64_t param n with binary representation as little-endian
 */
uint64_t toLittleEndian64(const uint64_t n) {
    if (!isBigEndian()) {
        return ((n << 56) & 0xFF00000000000000) | ((n << 40) & 0x00FF000000000000) | ((n << 24) & 0x0000FF0000000000) |
               ((n << 8)  & 0x000000FF00000000) | ((n >> 8)  & 0x00000000FF000000) | ((n >> 24) & 0x0000000000FF0000) |
               ((n >> 40) & 0x000000000000FF00) | ((n >> 56) & 0x00000000000000FF);
        ;
    }
    // Machine works on little endian, no need to change anything
    return n;
}
/**
 * @brief Transforms the 128-bit MD5 signature into a 32 char hex string
 * @param sig The MD5 signature (Expected 16 bytes)
 * @return string The hex signature
 */
string sig2hex(void* sig) {
    const auto* signature = static_cast<uint8_t*>(sig);
    string hex;
    for (uint8_t i = 0; i < 16; i++) {
        const auto hexChars = "0123456789abcdef";
        hex.push_back(hexChars[(signature[i] >> 4) & 0xF]);
        hex.push_back(hexChars[(signature[i]) & 0xF]);
    }
    return hex;
}
/**
 * @brief The MD5 algorithm itself, taking in a byte string
 * @param input_bs The byte string to hash
 * @param input_size The size (in BYTES) of the input
 * @return void* Pointer to the 128-bit signature
 */
void* hash_bs(const void* input_bs, uint64_t input_size) {
    auto* input = static_cast<const uint8_t*>(input_bs);

    // Step 0: Initial Data (Those are decided in the MD5 protocol)
    // s is the shift used in the left rotate each round
    const array<uint32_t, 64> step = {
        7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
        5, 9,  14, 20, 5, 9,  14, 20, 5, 9,  14, 20, 5, 9,  14, 20,
        4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
        6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
    };
    // K is pseudo-random values used each round
    // The values can be obtained by the following python code:

    /**
     * @brief Values of K are pseudo-random and used to "salt" each round
     * The values can be obtained by the following python code
     * @code{.py}
     * from math import floor, sin
     *
     * for i in range(64):
     *     print(floor(2**32 * abs(sin(i+1))))
     * @endcode
     */
    constexpr array<uint32_t, 64> randomK = {
        3614090360, 3905402710, 606105819,  3250441966, 4118548399, 1200080426,
        2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134,
        1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664,
        643717713,  3921069994, 3593408605, 38016083,   3634488961, 3889429448,
        568446438,  3275163606, 4107603335, 1163531501, 2850285829, 4243563512,
        1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740,
        2763975236, 1272893353, 4139469664, 3200236656, 681279174,  3936430074,
        3572445317, 76029189,   3654602809, 3873151461, 530742520,  3299628645,
        4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690,
        4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649,
        4149444226, 3174756917, 718787259,  3951481745};

    // The initial 128-bit state
    uint32_t a0 = 0x67452301, A = 0;
    uint32_t b0 = 0xefcdab89, B = 0;
    uint32_t c0 = 0x98badcfe, C = 0;
    uint32_t d0 = 0x10325476, D = 0;

    // Step 1: Processing the byte string

    // First compute the size the padded message will have
    // so it is possible to allocate the right amount of memory
    uint64_t padded_message_size = 0;
    if (input_size % 64 < 56) {
        padded_message_size = input_size + 64 - (input_size % 64);
    } else {
        padded_message_size = input_size + 128 - (input_size % 64);
    }

    vector<uint8_t> padded_message(padded_message_size);

    // Beginning of the padded message is the original message
    copy_n(input, input_size, padded_message.begin());

    // After wards comes a single 1 bit and then only zeroes
    padded_message[input_size] = 1 << 7;  // 10000000
    for (uint64_t i = input_size; i % 64 != 56; i++) {
        if (i == input_size) {
            continue;  // pass first iteration
        }
        padded_message[i] = 0;
    }

    // We then have to add the 64-bit size of the message at the end
    // When there is a conversion from int to byte string or vice versa
    // We always need to make sure it is little endian
    const uint64_t input_bt_le = toLittleEndian64(input_size * 8);
    for (uint8_t i = 0; i < 8; i++) {
        padded_message[padded_message_size - 8 + i] =
            (input_bt_le >> (56 - 8 * i)) & 0xFF;
    }

    // Already allocate memory for blocks
    array<uint32_t, 16> blocks{};

    // Rounds
    for (uint64_t chunk = 0; chunk * 64 < padded_message_size; chunk++) {
        // First, build the 16 32-bits blocks from the chunk
        for (uint8_t bid = 0; bid < 16; bid++) {
            blocks[bid] = 0;

            // Having to build a 32-bit word from 4-bit words
            // Add each and shift them to the left
            for (uint8_t cid = 0; cid < 4; cid++) {
                blocks[bid] = (blocks[bid] << 8) +
                              padded_message[chunk * 64 + bid * 4 + cid];
            }
        }

        A = a0;
        B = b0;
        C = c0;
        D = d0;

        // Main "hashing" loop
        for (uint8_t i = 0; i < 64; i++) {
            uint32_t F = 0, g = 0;
            if (i < 16) {
                F = (B & C) | ((~B) & D);
                g = i;
            } else if (i < 32) {
                F = (D & B) | ((~D) & C);
                g = (5 * i + 1) % 16;
            } else if (i < 48) {
                F = B ^ C ^ D;
                g = (3 * i + 5) % 16;
            } else {
                F = C ^ (B | (~D));
                g = (7 * i) % 16;
            }

            // Update the accumulators
            F += A + randomK[i] + toLittleEndian32(blocks[g]);

            A = D;
            D = C;
            C = B;
            B += leftRotate32bits(F, step[i]);
        }
        // Update the state with this chunk's hash
        a0 += A;
        b0 += B;
        c0 += C;
        d0 += D;
    }

    // Build signature from state
    // Note, any type could be used for the signature
    // uint8_t was used to make the 16 bytes obvious
    // The sig needs to be little endian
    auto* sig = new uint8_t[16];
    for (uint8_t i = 0; i < 4; i++) {
        sig[i] = (a0 >> (8 * i)) & 0xFF;
        sig[i + 4] = (b0 >> (8 * i)) & 0xFF;
        sig[i + 8] = (c0 >> (8 * i)) & 0xFF;
        sig[i + 12] = (d0 >> (8 * i)) & 0xFF;
    }

    return sig;
}
/**
 * @brief Converts the string to byte string and calls the main algorithm
 * @param message Plain character message to hash
 * @return void* Pointer to the MD5 signature
 */
void* hash(const string& message) {
    return hash_bs(&message[0], message.size());
} // namespace md5
} // namespace hashing

/**
 * @brief Self-test implementations of well-known MD5 hashes
 * @returns void~~
 */
static void test() {
    // Hashes empty string and stores signature
    void* sig = hashing::md5::hash("");
    cout << "Hashing empty string" << endl;
    // Prints signature hex representation
    cout << hashing::md5::sig2hex(sig) << endl << endl;
    // Test with assert whether sig is correct from the expected value
    assert(hashing::md5::sig2hex(sig) == "d41d8cd98f00b204e9800998ecf8427e");

    // Hashes "The quick brown fox jumps over the lazy dog" and stores signature
    void* sig2 =
        hashing::md5::hash("The quick brown fox jumps over the lazy dog");
    cout << "Hashing The quick brown fox jumps over the lazy dog"
              << endl;
    // Prints signature hex representation
    cout << hashing::md5::sig2hex(sig2) << endl << endl;
    // Test with assert whether sig is correct from the expected value
    assert(hashing::md5::sig2hex(sig2) == "9e107d9d372bb6826bd81d3542a419d6");

    // Hashes "The quick brown fox jumps over the lazy dog." (notice the
    // additional period) and stores signature
    void* sig3 =
        hashing::md5::hash("The quick brown fox jumps over the lazy dog.");
    cout << "Hashing "
                 "The quick brown fox jumps over the lazy dog."
              << endl;
    // Prints signature hex representation
    cout << hashing::md5::sig2hex(sig3) << endl << endl;
    // Test with assert whether sig is correct from the expected value
    assert(hashing::md5::sig2hex(sig3) == "e4d909c290d0fb1ca068ffaddf22cbd0");

    // Hashes "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    // and stores signature
    void* sig4 = hashing::md5::hash("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
    cout
        << "Hashing "
           "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        << endl;
    // Prints signature hex representation
    cout << hashing::md5::sig2hex(sig4) << endl << endl;
    // Test with assert whether sig is correct from the expected value
    assert(hashing::md5::sig2hex(sig4) == "d174ab98d277d9f5a5611c2c9f419d9f");
}

/**
 * @brief Puts user in a loop where inputs can be given and MD5 hash will be
 * computed and printed
 * @returns void
 */
static void interactive() {
    while (true) {
        string input;
        cout << "Enter a message to be hashed (Ctrl-C to exit): "
                  << endl;
        getline(cin, input);
        void* sig = hashing::md5::hash(input);
        cout << "Hash is: " << hashing::md5::sig2hex(sig) << endl;

        while (true) {
            cout << "Want to enter another message? (y/n) ";
            getline(cin, input);
            if (input == "y") {
                break;
            } else if (input == "n") {
                return;
            }
        }
    }
}

/**
 * @brief Main function
 * @returns 0 on exit
 */
int main() {
    test();  // run self-test implementations

    // Launch interactive mode where user can input messages and see their hash
    interactive();
    return 0;
}
