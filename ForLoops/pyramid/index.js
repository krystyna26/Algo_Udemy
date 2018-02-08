// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // var mid = Math.floor((2 * n - 1) / 2);
    // for(var row = 0; row < n; row++){
    //     var level = '';
    //     for(var col = 0; col < n * 2 - 1; col++){
            
    //         if(mid - row <= col && mid + row >= col){
    //             level += "#";
    //         }else{
    //             level += ' ';
    //         }
    //     }
    //     console.log(level)
    // }

    // or   
}

function pyramid(n, row=0, level=0) {
    if(row === n){
        return
    }
    if(level.length == 2 * n - 1){
        console.log(level);
        return pyramid(n, row + 1);
    }
    var midPoint = Math.floor((2 * n - 1) / 2);
    var add;
    if(midPoint - row <= level.length && midPoint + row <= level.length){
        add = "#";
    }else{
        add = " ";
    }
    pyramid(n, row, level + add);
}


module.exports = pyramid;
