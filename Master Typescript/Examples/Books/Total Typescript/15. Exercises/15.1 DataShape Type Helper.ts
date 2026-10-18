
// Consider the types UserDataShape and PostDataShape:

type ErrorShape = {
  error: {
    message: string;
  };
};

type UserDataShape =
  | {
      data: {
        id: string;
        name: string;
        email: string;
      };
    }
  | ErrorShape;

type PostDataShape =
  | {
      data: {
        id: string;
        title: string;
        body: string;
      };
    }
  | ErrorShape;

/*
Looking at these types, they share a consistent pattern. 
Both UserDataShape and PostDataShape possess a data object 
and an error shape, with the error shape being identical in 
both. The only difference between the two is the data object,
which holds different properties for each type.

Your task is to create a generic DataShape type to reduce 
duplication in the UserDataShape and PostDataShape types.
*/

// Solution
