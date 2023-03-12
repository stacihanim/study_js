let arr = [ 7, 456, -5, 79, 23, 0, 12, 90, 65, 44, 2023];

function findMin(arr) {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++) {

        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
}
const minimum = findMin(arr);

function findMax(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {

        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
}
const maximum = findMax(arr);

// let sum = 0;
// let min = 0;
// let max = 0;
 
// for(let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         sum += arr[i];

//         if (min > arr[i]) {
//             min = arr[i];
//         }

//         if (max < arr[i]) {
//             max = arr[i];
//         }     
//     } 
    
// }
// console.log(sum);
// console.log(min);
// console.log(max);

// let hashtag = '';
// for (let i = 0; i < 5; i++) {
// console.log(hashtag+='#');
// }

