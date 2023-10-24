let arr = [1,0,2,3,6,5,9,8];

// function search(arr,find) {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (find === element) {
//             return element;
//         }
//     }
//     return -1;
// }

// console.log(search(arr));

function doSort(array) {
    for (let i = 0 , j = 0; i < array.length; i++) {
       if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j+ 1] = array[j];
        array[j] = temp;
       }
       j++;
       if (j > array.length) {
        i++;
        j = 0;
       }
    }
    return array;
}

// doSort(arr)
// console.log(doSort(arr));

// function binary(array,find) {
//     let left = 0;
//     let right = array.length - 1;
//     for (let i = 0; left <= right; i++) {
//         let mid = Math.floor((left + right) / 2);
//         if (find === array[mid]) {
//             return array[mid];
//         }else if (find > arr[mid]) {
//             left = mid + 1;
//         }else {
//             right = mid - 1;
//         }
//     }
//  return -1;
// }

// console.log(binary(arr,5));

function number (a,b,c){
    return a + b + c;
}