/*

Given a position of a knight on the standard chessboard, 
find the number of different moves the knight can perform.

The knight can move to a square that is two squares 
horizontally and one square vertically, or two squares 
vertically and one square horizontally away from it. 
The complete move therefore looks like the letter L. 
Check out the image below to see all valid moves for a 
knight piece that is placed on one of the central squares.

Example

For cell = "a1", the output should be
solution(cell) = 2.

For cell = "c2", the output should be
solution(cell) = 6.



Input/Output

[execution time limit] 4 seconds (js)

[input] string cell

String consisting of 2 letters - coordinates of the 
knight on an 8 × 8 chessboard in chess notation.

Guaranteed constraints:
cell.length = 2,
'a' ≤ cell[0] ≤ 'h',
1 ≤ cell[1] ≤ 8.

[output] integer

*/

function chessKnight(cell) {

    const arr = [[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]];
    const positions = [];
    const board = [];
    var counter = 0;

    for(let x = 0; x < arr.length; x++){
        positions.push(String.fromCharCode(cell[0].charCodeAt(0)+arr[x][0]) 
        + String.fromCharCode(cell[1].charCodeAt(0)+arr[x][1]))
    }

    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 8; j++){
            board.push(String.fromCharCode(96 + i) + j);
        }
    }

    for(let a = 0; a < positions.length; a++){
        for(let b = 0; b < board.length; b++){
            if(positions[a] == board[b]){
                counter++;
            }
        }
    }

    return counter;
}

console.log(chessKnight('a1'));
console.log(chessKnight('c2'));
console.log(chessKnight('d4'));
