// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
   
    for(var i = 1; i <= n; i++){
        var result = '';
        var step = "#".repeat(i);
        var space = " ".repeat(n-i);
        result = step + space;
        console.log(result)
    }

    // or

    // for(let row = 0; row < n; row++){
    //     let stair = '';

    //     for(let col = 0; col < n; col++){
    //         if(col <= row){
    //             stair += '#';
    //         }else{
    //             stair += ' ';
    //         }
    //     }
    //     console.log(stair)
    // }

    // or

}

// function stepsRecursive(n, row = 0, stair = '') {
//     // if row === n the we have hit the end of our problem
//     if(n === row){
//         return;
//     }

//     //  if the stair string has a length === n then we are at the end of the row
//     if(n === stair.length){
//         console.log(stair);
//         stepsRecursive(n, row + 1);
//         return;
//     }

//     // if the length of the stair string is less than or equal 
//     //to the row number we're working on, we ass '#'. otherwise add a space
//     if(stair.length <= row){
//         stair += "#";
//     }else{
//         stair += " ";
//     }
//     stepsRecursive(n, row, stair)
// }

module.exports = steps;
