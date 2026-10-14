/*
    Source help:
    https://mimo.org/glossary/typescript/partial-type
*/

// Combining Partial with Other Utility Types

type Product = {
    id: string;
    name: string;
    price: number;
}

type OptionalFields = 
Partial<Pick<Product, 'name' | 'price'>>;

// Partial and Omit

type SecureUser = Omit<UserActivation, 'password'>;
type EditableSecureUser = Partial<SecureUser>;

// How to use Partial for Form Values

type UserPartialForm = {
    name: string;
    email: string;
    age: number;
};

type FormState = Partial<UserPartialForm>;

const form: FormState = {
    email: 'user@example.com'
}

// Partial with Class Instances

class UserClass {
    id: number;
    name: string;

    constructor(data: Partial<UserClass>){
        this.id = data.id ?? 0;
        this.name = data.name ?? 'Unknown';
    }
}