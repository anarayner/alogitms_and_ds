const arr = [1, 2, 3, 23, 5, 53, 8, 4, 5, 6, 7, 8, 9, 10]

let count = 0

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let found = false;
    let position = -1;
    let middle;
    while (found === false && start <= end){
        count += 1

        middle = (start + end)/2
        if (array[middle] === item){
            found = true
            position = middle
            return position
        }
        if(item < array[middle]){
            end = middle -1
        } else start = middle +1

    }
    return position
}

// console.log(binarySearch(arr, 1))
// console.log(count)



function recursiveBinarySearch(array, item, start, eNd){
    let middle = Math.floor((start + eNd)/2)
    count +=1
    if (item === array[middle]){
        return middle
    }

    if (item < array[middle]){
        return recursiveBinarySearch(array, item, start, middle-1)
    }else{
        return recursiveBinarySearch (array, item, middle +1, eNd)
    }

}

console.log(recursiveBinarySearch(arr, 5, 0, arr.length))
console.log(count)

