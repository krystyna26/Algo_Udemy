// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // var myArr =[];
    // for(var i of str.split(' ')){
    //     myArr.push(i[0].toUpperCase() + i.slice(1));
    // }
    // return myArr.join(' ');

    // or

    var result = str[0].toUpperCase();
    for(var i = 1; i < str.length; i++){
        if(str[i-1] === ' '){
            result += str[i].toUpperCase();
        }else{
            result += str[i]
        }
    }
    return result;
}

module.exports = capitalize;
