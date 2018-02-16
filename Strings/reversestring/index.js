// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    
    var reversed = '';
    for(var i = str.length-1; i >= 0; i--){
       
        reversed += str[i];
        debugger;
    }
    return reversed;
}

reverse("asdf")
module.exports = reverse;
