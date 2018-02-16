// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // var vow = ["a", "e", "i", "o", "u"] // arr or string
    // var count = 0;
    // str = str.toLowerCase();
    // for(let char of str){
    //     if(vow.includes(char)){
    //         count++;
    //     }
    // }
    // return count;

    // or

    const match = str.match(/[aeiou]/gi) //g - multiple; i - case intensive
    if(match){
       return match.length;
    }else{
        return 0
    }
    return match;
}

module.exports = vowels;
