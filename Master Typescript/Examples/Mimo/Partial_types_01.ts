/*
    Source help:
    https://mimo.org/glossary/typescript/partial-type
*/

// Example
// ???
type PartialExample<T> = {
  [P in keyof T]?: T[P];
};

type UserPartial = {
    id: number;
    name: string;
    email: string;
}

/*
{
  id?: number;
  name?: string;
  email?: string;
}
*/
type UpdatedUser = Partial<UserPartial>;

// Example: Updating User Info

type UserUpdated = {
    id: number;
    name: string;
    email: string;
    password: string;
}

function updateUser(id: number, updates: Partial<UserUpdated>){

}

// Example: Interface Partial Usage

interface ProductPartial {
    id: string;
    name: string;
    price: number;
    description?: string;
}

// Now DraftProduct allows all fields to be omitted, 
// including those that were originally required.
type DraftProductPartial = Partial<ProductPartial>;