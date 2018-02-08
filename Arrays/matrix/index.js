// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    var results = [];
    
    for(var i = 0; i < n; i++){
        results.push([]);
    }
    var counter = 1;
    var startCol = 0;
    var endCol = n - 1;
    var startRow = 0;
    var endRow = n - 1;
    
    while(startCol <= endCol && startRow <= endRow){
        // top row
        for(var c = startCol; c <= endCol; c++){
            results[startRow][c] = counter;
            counter++;
        }
        startRow++;

        // right column
        for(var r = startRow; r <= endRow; r++){
            results[r][endCol] = counter;
            counter++;
        }
        endCol--;

        // bottom row
        for(let i = endCol; i >= startCol; i--){
            results[endRow][i] = counter;
            counter++
        }
        endRow--;

        // start column
        for(var j = endRow; j >= startRow; j--){
            results[j][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    return results;
}

module.exports = matrix;
