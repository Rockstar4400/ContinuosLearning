/*
Earlier in the book, you worked with the Omit type helper, 
which allows you to create a new type that omits specific 
properties from an existing type.

Interestingly, the Omit helper also lets you try to omit 
keys that don’t exist in the type you’re trying to omit from.

In this example, you’re trying to omit the property b 
from a type that has only the property a:

*/

type Example = Omit<{a: string}, "b">;

/*
Since b isn’t a part of the type, you might anticipate 
TypeScript would show an error, but it doesn’t.

Instead, you want to implement a StrictOmit type that 
accepts only keys that exist in the provided type. Otherwise, 
an error should be shown.

Here’s the start of StrictOmit, which currently has an 
error under K:

*/

type StrictOmit<T, K> = Omit<T, K>; 

/*
Currently the StrictOmit type behaves the same as a regular 
Omit, as evidenced by this failing @ts-expect-error directive:
*/

type ShouldFail = StrictOmit<
  {a: string},
  "b"
>;

/*
Your task is to update StrictOmit so that it accepts only 
keys that exist in the provided type T. If a nonvalid key 
K is passed, TypeScript should return an error.

Here are some tests to show how StrictOmit should behave:

*/

type tests = [
  Expect<Equal<StrictOmit<{a: string; b: number}, "b">, 
  {a: string}>>,
  Expect<Equal<StrictOmit<{a: string; b: number}, 
  "b" | "a">, {}>>,
  Expect<
    Equal<StrictOmit<{a: string; b: number}, never>, 
    {a: string; b: number}>
  >,
];

// You’ll need to remember keyof and how to constrain 
// type parameters to complete this exercise.