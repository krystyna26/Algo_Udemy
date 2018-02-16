// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var dict = {};
    var max = 0;
    var maxLetter = '';

    for(let letter of str){
        if(!dict[letter]){
           dict[letter] = 1;
        }else{
            dict[letter]++;
        }
    }
    // iterate through object -> in
    for(let char in dict){
        if(dict[char] > max){
            max = dict[char]
            maxLetter = char;
        }
    }
    return maxLetter;
}

module.exports = maxChar;
