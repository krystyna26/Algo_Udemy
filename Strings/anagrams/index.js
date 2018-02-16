// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // stringA = stringA.replace(/[^\w]/g,'').toLowerCase();
    // stringB = stringB.replace(/[^\w]/g,'').toLowerCase();
    // var dictA = {};
    // for(let charA of stringA){
    //     if(!dictA[charA]){
    //         dictA[charA] = 1;
    //     }else{
    //         dictA[charA]++;
    //     }
    // }
    // var dictB = {};
    // for(let charB of stringB){
    //     if(!dictB[charB]){
    //         dictB[charB] = 1;
    //     }else{
    //         dictB[charB]++;
    //     }
    // }

    // if(Object.keys(stringA).length != Object.keys(stringB).length){
    //     return false;
    // }

    // for(let char in dictA){
    //     if(dictA[char] != dictB[char]){
    //         return false;
    //     }
    // }
    // return true;

    // or

    stringA = stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
    stringB = stringB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
    return stringA === stringB;


}

module.exports = anagrams;
