const bars = 200
function bubbleSort(arr: number[]){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j<=i; j++){
            if(arr[i] < arr[j]){
                swap(arr, i, j)
            }
        }
    }
    return arr
}

function swap(arr: number[], index1: number, index2: number){
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}


export {bubbleSort}