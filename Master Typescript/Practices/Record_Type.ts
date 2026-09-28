

/*
    Source help:
    https://mimo.org/glossary/typescript/record-type

*/

// Basic Example

type FruitColors = Record<'apple' | 'banana' | 'cherry', string>;

// String Mapping

type ProductNames = Record<'sku123' | 'sku456' | 'sku789', string>;

const products: ProductNames = {
    sku123: 'Laptop',
    sku456: 'Tablet',
    sku789: 'Smartphone'
};

// Using Enums with Record

enum Status {
    Success = 'SUCCESS',
    Error = 'ERROR',
    Loading = 'LOADING'
}

type StatusMessages = Record<Status, string>;

const messages: StatusMessages = {
    [Status.Success]: 'Operation completed',
    [Status.Error]: 'Something went wrong',
    [Status.Loading]: 'Please wait...'
}

// Nesting Records

type Permissions_Record = 'read' | 'write' | 'delete';
type Roles = 'admin' | 'user' | 'guest';

type RoleAccessMatrix = Record<Roles, Record<Permissions_Record, boolean>>;

const accessMatrix: RoleAccessMatrix = {
    admin: { read: true, write: true, delete: true },
    user: { read: true, write: true, delete: false},
    guest: { read: true, write: false, delete: false }
}

// How to add to Record

type FeatureFlags = Record<'darkMode' | 'betaAccess', boolean>;

const flags: Partial<FeatureFlags> = {};
flags.darkMode = true;
flags.betaAccess = false;

const finalFlags = flags as FeatureFlags;

// Transforming Union Types with Record

type Events = 'click' | 'hover' | 'focus';

type EventHandler = Record<Events, () => void>;

const handlers: EventHandler = {
    click: () => console.log('Clicked'),
    hover: () => console.log('Hovered'),
    focus: () => console.log('Focused')
};

// Record and Generics

function createLogger<T extends string>(levels: T[]): Record<T, () => void> {
  const logger = {} as Record<T, () => void>;

  levels.forEach(level => {
    logger[level] = () => console.log(`Logging at level: ${level}`);
  });

  return logger;
}

const myLogger = createLogger(['info', 'warn', 'error']);
myLogger.warn(); // Logs: Logging at level: warn