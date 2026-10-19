// Here you have an Attributes interface that contains a firstName,
// lastName, and age:

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

// Following that, you have AttributeGetters, which is currently 
// typed as unknown:

type AttributeGetters = unknown;

// As shown in the tests, you expect AttributeGetters to be an 
// object composed of functions. When invoked, each of these 
// functions should return a value matching the key from the 
// Attributes interface:

/*
As shown in the tests, you expect AttributeGetters to be an object
composed of functions. When invoked, each of these functions should
 return a value matching the key from the Attributes interface:
*/

type tests = [
  Expect< // red squiggly line under Equal<>
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >,
];

/*
Your task is to define the AttributeGetters type so that it matches 
the expected output. To do this, you’ll need to iterate over each 
key in Attributes and produce a function as a value that then 
returns the value of that key.

*/