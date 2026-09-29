
/*
    Source help:
    https://aaronbos.dev/posts/typescript-literal-types

*/

// Function example

function evaluateReaderHappiness(level: "Happy"){

}

// This provides a level that only allows the string "Happy"
evaluateReaderHappiness("Happy");

//evaluateReaderHappiness("So Happy");
// Argument of type '"So Happy"' is not assignable to 
// parameter of type '"Happy"'.ts(2345)
