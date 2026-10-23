
// 8.3 Implementing a Getter
/*
Let’s continue working with the CanvasNode class, 
which now has a constructor that accepts an optional argument, 
renamed position. This position is an object that replaces 
the individual x and y you had before:
*/
class CanvasNode {
  x: number;
  y: number;

  get(): object{
    return {x: this.x, y: this.y};
  }

  constructor(position?: {x: number; y: number}) {
    this.x = position?.x ?? 0;
    this.y = position?.y ?? 0;
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// In these test cases, there are errors accessing the position
// property since it is not currently a property of the 
// CanvasNode class:

const canvasNode = new CanvasNode({
x: 10,
y: 20,
});

console.log(canvasNode.get())
/*
Your task is to update the CanvasNode class to include a position
getter that will allow the test cases to pass. 
Hint: Use the get keyword to specify that a method is a getter.  
*/