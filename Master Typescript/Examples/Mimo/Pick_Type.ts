/*
    Source help:
    https://mimo.org/glossary/typescript/pick-type
*/

// Example:
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type PublicUser = Pick<User, 'id' | 'name' | 'email'>;

// How to use a pick for UI Components
type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
};

type PostCardProps = Pick<Post, 'id' | 'title' | 'author'>;

// function PostCard(props: PostCardProps) {
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>By {props.author}</p>
//     </div>
//   );
// }

// Using Pick with Generics
function pluck<T, K extends keyof T>(obj: T, keys: K[]): 
Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}

const user = { id: 1, name: 'Alice', email: 'alice@example.com' };
const picked = pluck(user, ['id', 'email']); 
// { id: 1, email: 'alice@example.com' }

// Combining pick with other utilities
type Settings = {
  theme: string;
  notifications: boolean;
  location: string;
};

type OptionalSettings = 
Partial<Pick<Settings, 'notifications' | 'location'>>;

// Nested pick workaround
type User2 = {
  id: number;
  profile: {
    name: string;
    age: number;
    bio: string;
  };
};

type UserProfileName = {
  profile: Pick<User2['profile'], 'name'>;
};