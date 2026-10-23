
// 8.4 Implementing a setter
/*
    The CanvasNode class has been updated so that x and y
    are now private properties:
*/
class CanvasNode {
  #x: number;
  #y: number;

  constructor(position?: {x: number; y: number}) {
    this.#x = position?.x ?? 0;
    this.#y = position?.y ?? 0;
  }

  // Your `position` getter method here

  // Move method as before
   move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }
}

/*
The # in front of the x and y properties means they are private 
and can’t be modified directly outside the class.

Your task is to write a setter for the position property that 
will allow the test case to pass. Hint: Use the set keyword in 
your solution.  

*/