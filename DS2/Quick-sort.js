function quciksort(arr) {
    quicksortnew(arr, 0, arr.length - 1)
    return arr;
}

function quicksortnew(arr, start, end) {
    if (start >= end) {
        return
    }
    let pivot = start
    let left = start + 1
    let right = end
    while (left <= right) {
        while (arr[left] < arr[pivot]) {
            left++
        }
        while (arr[right] > arr[pivot]) {
            right--
        }
        if (left <= right) {
            sample(arr, left, right)
            left++
            right--
        }
    }
    sample(arr, right, pivot)
    quicksortnew(arr, right - 1, start)
    quicksortnew(arr, right + 1, end)
}

function sample(arr, left, right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

let arr = [5, 4, 7, 1, 3]
console.log(quciksort(arr))