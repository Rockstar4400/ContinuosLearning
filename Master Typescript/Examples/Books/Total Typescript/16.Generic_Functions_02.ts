/*
  Generic Functions 02
*/

// Constraining type parameters
const removeId = <T>(obj: T) => {
  // red squiggly line under id
  //const { id, ...rest} = obj; 
  //return rest;
};
// Property 'id' does not exist on type 'unknown'.

// Fix it adding a constraint
const removeIdFunc = <T extends {id: unknown}>(obj: T) => {
  const { id, ...rest } = obj;
  return rest;
};

// red squiggly line under name
// const resultGen = removeId2({name: "Alice"}); 

// Object literal may only specify known properties, and 'name'
// does not exist in type '{id: unknown;}'.

// But if you pass in an object with an id property, 
// TypeScript will know that id has been removed:
const resultGen = removeIdFunc({id: 1, name: "Alice"});

// hovering over result shows:
// const resultGen: Omit<{id: number;name: string;}, "id">;
