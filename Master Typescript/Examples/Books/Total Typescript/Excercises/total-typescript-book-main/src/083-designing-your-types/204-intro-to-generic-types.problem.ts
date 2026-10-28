import { Equal, Expect } from "@total-typescript/helpers";

type ErrorShapeP = {
  error: {
    message: string;
  };
};

// Solution:





type UserDataShapeP =
  | {
      data: {
        id: string;
        name: string;
        email: string;
      };
    }
  | ErrorShapeP;

type PostDataShapeP =
  | {
      data: {
        id: string;
        title: string;
        body: string;
      };
    }
  | ErrorShapeP;

// TESTS

type tests = [
  Expect<
    Equal<
      UserDataShapeP,
      | {
          data: {
            id: string;
            name: string;
            email: string;
          };
        }
      | {
          error: {
            message: string;
          };
        }
    >
  >,
  Expect<
    Equal<
      PostDataShapeP,
      | {
          data: {
            id: string;
            title: string;
            body: string;
          };
        }
      | {
          error: {
            message: string;
          };
        }
    >
  >,
];
