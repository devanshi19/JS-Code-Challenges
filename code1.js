//Write a program to find a duplicate numbers from array

const a = [1, 2, 2, 3, 6, 6, 7,7,8,1,4,5]
const findDuplicateFromArray = (arr) => {
    let obj = {};
    let duplicate = [];
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
        }
        else {
            obj[[arr[i]]]++;
        }
    }
    for (data in obj) {
        if (obj[data] > 1) {
            duplicate.push(parseInt(data))
        }
    }
    return duplicate;

}
const duplicateNum = findDuplicateFromArray(a);
console.log("duplicate number in array are : ", duplicateNum)