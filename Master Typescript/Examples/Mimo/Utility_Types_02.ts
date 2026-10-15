/*
    Source help:
    https://mimo.org/glossary/typescript/utility-types
*/

// Examples of using Utility Types

// Building From State Types
type Product = {
    name: string;
    price: number;
    inStock: boolean;
}

type ProductFormState = Partial<Product>;

// Creating Immutable Config Objects
type Config = {
    apiUrl: string;
    timeout: number;
};

const appConfig: Readonly<Config> = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
}

// appConfig.timeout = 3000; // Error: Cannot assign

// Modeling API Response with Omit
type FullUser = {
    id: number;
    name: string;
    password: string;
}

type PublishUser = Omit<FullUser, "password">;

// Custom Utility Types
type Nullable<T> = { [P in keyof T]: T[P] | null };

type ProfileUtility = {
    name: string;
    age: number;
}

type NullableProfile = Nullable<ProfileUtility>;

// Deep Utility Types
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
}

// Utility types for Component Props

type ButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
};

type RequiredProps = Required<ButtonProps>;

// Combining Utility Types
type EditableUser = Partial<Omit<UserType, "id">>;