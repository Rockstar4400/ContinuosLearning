
// Exercise 8.2: Implementing Class Methods

// In this exercise, you’ve simplified your CanvasNode class 
// so that it no longer has read-only properties:

class CanvasNodeImp {
  x = 0;
  y = 0;

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}

const canvasNode  = new CanvasNodeImp();
canvasNode .move(10, 20);
console.log(canvasNode.x)
console.log(canvasNode.y)

/*
Currently, there is an error under the move method call because 
the CanvasNode class does not have a move method.

Your task is to add a move method to the CanvasNode class that 
will update the x and y properties when it's inicialized.  
*/