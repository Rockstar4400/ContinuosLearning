/*
    Source help:
    https://mimo.org/glossary/typescript/partial-type
*/

// Example Nested Partial

type ProfilePartial = {
    name: string;
    preferences: {
        theme: string;
        notifications: boolean;
    };
};

type PartialProfile = Partial<ProfilePartial>;

// Deep Partial

type Config = {
    database: {
        host: string;
        port: number;
    };
    logging: {
        level: string
    }
}

// ???
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? 
    DeepPartial<T[P]> : T[P];
}

type PartialConfig = DeepPartial<Config>;

// Now, PartialConfig allows you to define partial versions of any 
// nested field, such as:

const configUpdate: PartialConfig = {
  database: {
    port: 5432
  }
};