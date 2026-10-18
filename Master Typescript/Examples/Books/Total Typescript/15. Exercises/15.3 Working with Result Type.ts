// Let’s say you have a Result type that can be either a 
// success or an error:

type Result<TResult, TError> =
  | {
      success: true;
      data: TResult;
    }
  | {
      success: false;
      error: TError;
    };
// You also have the createRandomNumber function that returns
// a Result type:

const createRandomNumber = (): Result<number> => {
  const num = Math.random();

  if (num > 0.5) {
    return {
      success: true,
      data: 123,
    };
  }

  return {
    success: false,
    error: new Error("Something went wrong"),
  };
};

/*
You’re specifying only the number because it can be a bit of
 a hassle to always specify both the success and error types 
 whenever you use the Result type.

It would be easier if you could designate the Error type 
as the default type for Result’s TError, since that’s what 
most errors will be typed as.

Your task is to adjust the Result type so that TError 
defaults to type Error.

*/

// Solution