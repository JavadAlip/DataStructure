function selectionSort(a) {
    let smallest
    for (i = 0; i < a.length; i++) {
        for (j = i; j < a.length; j++) {
            if (a[j] < a[i]) {
                smallest = a[j]
                a[j] = a[i]
                a[i] = smallest
            }
        }
    }
    return a
}
a = [9, 1, 10, -1, 6, 8, 9]
console.log(selectionSort(a));