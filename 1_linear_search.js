const arr = [2, 4, 9, 1, 3, 7, 6, 5, 8,45]
let count = 0
function linerSearch (array, item){
    for (let i =0; i < array.length; i++){
        count ++

        if (array[i] == item){
            return i
        }
    }
    return null

}

console.log(linerSearch(arr, 45))
console.log(count)


