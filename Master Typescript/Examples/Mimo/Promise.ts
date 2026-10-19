export {};
/*
    Source help:
    https://mimo.org/glossary/typescript/promise
*/
// Example:
const fetchName = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Alice");
        }, 1000);
    })
}

fetchName()
  .then((name) => {
    console.log("Name:", name);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Async/await
const printName = async () => {
  try {
    const name = await fetchName();
    console.log("User name is:", name);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};

// Return a promise from a function
const getUser = (id: number): 
Promise<{ id: number; name: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Charlie" });
    }, 500);
  });
};

// Promises Return Type
function delayedGreeting(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello!");
    }, 1000);
  });
}

// Promise.all
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve("hello");

Promise.all([promise1, promise2]).then(([num, str]) => {
  console.log(num * 2); // 20
  console.log(str.toUpperCase()); // HELLO
});

// Promise.race
const firstToResolve = Promise.race([
  Promise.resolve("fast"),
  new Promise((resolve) => setTimeout(() => resolve("slow"), 1000)),
]);

firstToResolve.then((value) => console.log("First result:", value));

// Promisifying callbacks
// This helps you modernize legacy code while keeping types consistent.
function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Generic in promise
const getData = <T>(data: T): Promise<T> => {
  return new Promise((resolve) => resolve(data));
};

getData<number>(42).then((num) => console.log(num.toFixed(2)));
getData<string>("TypeScript").then((text) => console.log(text.length));

// Common uses
// Fetching data
async function fetchUser(id: number): 
Promise<{ id: number; name: string }> {
  const response = await fetch(`/api/users/${id}`);
  const data = await response.json();
  return data;
}

// Waiting for timeout
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const data =  await sleep(1000);
console.log("Waited 1 second");

// Handling sequential tasks
async function runTasks() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a + 1);
  const c = await Promise.resolve(b + 1);
  console.log(c); // 3
}