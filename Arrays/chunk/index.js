// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    var outerArr = [];
    for(let element of array){
        const innerArr = outerArr[outerArr.length - 1];
        if(!innerArr || innerArr.length === size){
            outerArr.push([element]);
        }else{
            innerArr.push(element);
        }
    }
    return outerArr;

    // or
    // var outerArr = [];
    // var idx = 0;
    // while(idx < array.length){
    //     outerArr.push(array.slice(index, index + size));
    //     idx = idx + size;
    // }

}

module.exports = chunk;
