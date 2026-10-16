
// Example
function makeTuple<First, Second>(first: First, second: Second){
    return [first, second] as const;
}

// Type of value: readonly [boolean, string]
let tuple = makeTuple(true, "abc");

// Another example
function makePair<Key, Value>(key: Key, value: Value){
    return { key, value };
}

// Ok: neither type argument provided
makePair("abc", 123); // Type: { key: string; value: number }

// Ok: both type arguments provided

// Type: { key: string; value: number }
makePair<string, number>("abc", 123); 
// Type: { key: "abc"; value: 123 }
makePair<"abc", 123>("abc", 123); 

// Error: Expected 2 type arguments, but got 1.
// makePair<string>("abc", 123);

