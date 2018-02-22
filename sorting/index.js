// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < (arr.length - i - 1); j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let minIdx = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j;
            }
        }
        if(minIdx !== i){
            var temp = arr[minIdx];
            arr[minIdx] = arr[i];
             arr[i] = temp;
             // or
            //  swap(arr, minIdx, i);
        }
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length === 1){
        return arr;
    }
    // divide arr to half
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));


}

function merge(left, right) {
    var results = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift())
        }else{
            results.push(right.shift())
        }
    }
    // concat to results array if one of the array is empty
    if(left.length>0){
        results.concat(left)
    }
    if(right.length>0){
        results.push(right)
    }
    return results
    // return [...results,...left,...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort };
