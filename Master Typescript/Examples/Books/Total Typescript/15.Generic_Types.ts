/*
    Generic types
*/

// Example:
type ExampleGen = Pick<{a: string, b: number}, "a">;

// Creating a custom generic type
type ResourceStatus<T> =
  | {
      status: "available";
      content: T;
    }
  | {
      status: "unavailable";
      reason: string;
    };

type StreamingPlaylist = ResourceStatus<{
  id: number;
  name: string;
  tracks: string[];
}>;

type StreamingAlbum = ResourceStatus<{
  id: number;
  title: string;
  artist: string;
  tracks: string[];
}>;

// Multiple type parameters
type ResourceStatusExpand<T, IU> =
  | {
      status: "available";
      content: T;
      metadata: T;
    }
  | {
      status: "unavailable";
      reason: string;
    };

type StreamingPlaylistEx = ResourceStatusExpand<
  {
    id: number;
    name: string;
    tracks: string[];
  },
  {
    creator: string;
    artwork: string;
    dateUpdated: Date;
  }
>;

type StreamingAlbumEx = ResourceStatusExpand<
  {
    id: number;
    title: string;
    artist: string;
    tracks: string[];
  },
  {
    recordLabel: string;
    upc: string;
    yearOfRelease: number;
  }
>;

// Default type parameter
type ResourceStatusDefault<T, U = {}> =
  | {
      status: "available";
      content: T;
      metadata: U;
    }
  | {
      status: "unavailable";
      reason: string;
    };

// Now you can create a StreamingPlaylist type without 
// providing a TMetadata type argument:

// If you hover over it, you’ll see that it’s typed 
// as expected, with metadata being an empty object:
type StreamingPlaylistDef = ResourceStatusDefault<{
  id: number;
  name: string;
  tracks: string[];
}>;

// Type parameter constraints
// Example

type HasId = {
  id: number;
};

// With these changes in place, it is now required that the T type 
// parameter must include an id property
type ResourceStatusGen<T extends HasId, U extends object = {}> =
  | {
      status: "available";
      content: T;
      metadata: U;
    }
  | {
      status: "unavailable";
      reason: string;
    };

// Transforming string types
type CapitalizeMatt = Capitalize<"matt">; // Matt

type UncapitalizeMatt = Uncapitalize<"PHD">; // pHD

// Conditional types
// T extends any[] checks if T could be passed 
// to a function expecting any[]
type ToArray<T> = T extends any[] ? T : T[];

type Example = ToArray<string>; // string[]
type Example2 = ToArray<string[]>; // string[]

