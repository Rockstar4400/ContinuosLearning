
// Generic Functions
function identityFunction<T>(input: T){
    return input;
}

// In an arrow function way
const identityArrow = <T>(input: T) => input;

/* TypeScript will default to assuming the unknown 
type for any type argument it cannot infer. */
function logWrapper<Input>(callback: (input: Input) => void){
    return (input: Input) => {
        console.log("Input:", input);
        callback(input);
    }
}

// Type: (input: string) => void
logWrapper((input: string) => {
    console.log(input.length);
})

// Type: (input: unknown) => void
logWrapper((input) => {
    // 'input' is of type 'unknown'.
    //console.log(input.length)
})

// In a generic transformed way

// Type: (input: string) => void
logWrapper<string>((input) => {
    console.log(input.length);
});

// Type 'string' is not assignable to type 'boolean'.
//logWrapper<string>((input: boolean) => {})

