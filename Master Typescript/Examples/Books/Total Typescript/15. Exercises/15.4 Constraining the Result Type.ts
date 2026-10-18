/*
After updating the Result type to have a default type for 
TError, it would be a good idea to add a constraint on the 
shape of what’s being passed in.

Here are some examples of using the Result type:
*/
type BadExample = Result<
  {id: string},
  // @ts-expect-error Should be an object
  //  with a message property.
  string
>;

type GoodExample = Result<{id: string}, TypeError>;
type GoodExample2 = Result<{id: string}, {message: string; code: number}>;
type GoodExample3 = Result<{id: string}, {message: string}>;
type GoodExample4 = Result<{id: string}>;

/*
The GoodExamples should pass without errors, but the 
BadExample should raise an error because the TError type 
is not an object with a message property. Currently this 
isn’t the case, as you can see by the error under the 
@ts-expect-error directive.

Your task is to add a constraint to the Result type 
that ensures that the BadExample test raises an error, 
while the GoodExamples pass without errors.

*/