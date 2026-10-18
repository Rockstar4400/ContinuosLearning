// Here you have a route typed as AbsoluteRoute:
type AbsoluteRoute = string;

const goToRoute = (route: AbsoluteRoute) => {
     // . . .
};

/*
You’re expecting that the AbsoluteRoute will represent any 
string that has a forward slash at the start of it. 
For example, you’d expect the following strings to be 
valid routes:
*/

goToRoute("/home");
goToRoute("/about");
goToRoute("/contact");

/*
However, if you attempt to pass a string that doesn’t start 
with a forward slash, no error is currently generated:
*/

goToRoute(
  "somewhere",
);

/*
Because AbsoluteRoute is currently typed as string, 
TypeScript fails to flag this as an error. Your task is 
to refine the AbsoluteRoute type to accurately expect 
that strings begin with a forward slash.
*/