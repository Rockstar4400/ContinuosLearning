/*
In this exercise, you want to build a Sandwich type.

This Sandwich is expected to encompass all possible combinations of 
three types of bread ("rye", "brown", "white") and three types of 
filling ("cheese", "ham", "salami"):  
*/

type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";
type Sandwich = unknown;

// As shown in the test, there are several possible combinations 
// of bread and filling:

type tests = [
  Expect<
    Equal<
      Sandwich,
      | "rye sandwich with cheese"
      | "rye sandwich with ham"
      | "rye sandwich with salami"
      | "brown sandwich with cheese"
      | "brown sandwich with ham"
      | "brown sandwich with salami"
      | "white sandwich with cheese"
      | "white sandwich with ham"
      | "white sandwich with salami"
    >
  >,
];

// Your task is to use a template literal type to define the Sandwich
// type. This can be done in just one line of code!