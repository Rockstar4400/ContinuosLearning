
/*
    Source help:
    https://aaronbos.dev/posts/typescript-literal-types

*/

// Function basic example
/*######################*/

function evaluateReaderHappiness(level: "Happy"){

}

// This provides a level that only allows the string "Happy"
evaluateReaderHappiness("Happy");

//evaluateReaderHappiness("So Happy");
// Argument of type '"So Happy"' is not assignable to 
// parameter of type '"Happy"'.ts(2345)


// Example with union type
/*#######################*/

type HappinessLevel = "Sad" | "OK" | "Happy" | "Ecstatic";

// function evaluateReaderHappiness(level: HappinessLevel) { }

const happyLevel = "Ecstatic";

// Will not compile unless `happyLevel` has a value within the union of values in HappinessLevel type
// evaluateReaderHappiness(happyLevel);

// Example with number type
/*#######################*/

type HappinessScore = -5 | 0 | 5 | 10;

function gradeReaderHappiness(score: HappinessScore) { }

const happyScore = 6;

// Will not compile unless `happyScore` has a value within the union of values 
// in HappinessScore type
//gradeReaderHappiness(happyScore);

/* Example Literal Type Inference */
/*######################################################*/

type HappinessLevel2 = "Sad" | "OK" | "Happy" | "Ecstatic";
type HappinessScore2 = -5 | 0 | 5 | 10;

function evaluateReaderRating(score: HappinessScore2, level: HappinessLevel2)
{
    // do evaluations
}

/* Alternative 1 */
//const readerInput = { score: 5, level: "Happy" } as const; // Keyword as const

/* Alternative 2 */
type ReaderInput = {
    score: HappinessScore,
    level: HappinessLevel
}

const readerInput : ReaderInput = { score: 5, level: "Happy" };

// Will not compile because readerInput.score or readerInput.level *could* change
// Therefore they do not meet requirements of the literal types
evaluateReaderRating(readerInput.score, readerInput.level);