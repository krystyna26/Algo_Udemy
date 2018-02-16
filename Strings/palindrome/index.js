// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str){
    // var start = 0;
    // var last = str.length-1
    // while(start < last){
    //     if(str[last] != str[start]){
    //         return false;
    //     }
    //     start++;
    //     last--;
    // }
    // return true;

    // or
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    });
}

module.exports = palindrome;
