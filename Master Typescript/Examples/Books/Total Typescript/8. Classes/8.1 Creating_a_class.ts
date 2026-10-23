// Here is a class called CanvasNode that currently 
// functions identically to an empty object:

// Solution:
class CanvasNode {
    readonly x: number;
    readonly y: number;

    constructor(){
        this.x = 0;
        this.y = 0;
    }
}

/*
As shown with the @ts-expect-error directives, you also expect 
these properties to be readonly.

Your challenge is to implement the CanvasNode class to satisfy 
these requirements. For extra practice, solve the challenge with 
and without the use of a constructor.  
*/
