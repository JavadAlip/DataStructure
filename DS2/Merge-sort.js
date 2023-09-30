function mergesort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let first = arr.slice(0, middle)
    let last = arr.slice(middle)
    return joinarr(mergesort(first), mergesort(last))
}

function joinarr(first, last) {
    let newarr = []
    let i = 0
    let j = 0
    let k = 0
    while (i < first.length && j < last.length) {
        if (first[i] < last[j]) {
            newarr[k++] = first[i++]
        } else {
            newarr[k++] = last[j++]
        }
    }
    while (i < first.length) {
        newarr[k++] = first[i++]
    }
    while (j < last.length) {
        newarr[k++] = last[j++]
    }
    return newarr
}

let arr = [3, 5, 2, 9, 1]
console.log(mergesort(arr))
