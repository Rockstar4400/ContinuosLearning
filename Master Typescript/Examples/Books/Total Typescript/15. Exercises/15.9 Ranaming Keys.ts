/*
After creating the AttributeGetters type in the previous exercise,
 it would be nice to rename the keys to be more descriptive.

Here’s a test case for AttributeGetters that currently has an error:  
*/

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >,
];

/*
Your challenge is to adjust the AttributeGetters type to remap 
the keys as specified. You’ll need to use the as keyword, 
template literals, and TypeScript’s built-in Capitalize<string> 
type helper.  
*/