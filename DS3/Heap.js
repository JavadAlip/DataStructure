

class Heap {
    constructor(arr) {
      this.heap = arr;
      this.buildheap();
    }
  
    buildheap() {
      const n = this.heap.length;
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.shiftdown(i, n);
      }
    }
  
    shiftdown(currentidx, end) {
      let leftidx = 2 * currentidx + 1;
      while (leftidx < end) {
        let rightidx = 2 * currentidx + 2;
        let indextoshift;
        if (rightidx < end && this.heap[rightidx] > this.heap[leftidx]) {
          indextoshift = rightidx;
        } else {
          indextoshift = leftidx;
        }
        if (this.heap[indextoshift] > this.heap[currentidx]) {
          this.swap(indextoshift, currentidx);
          currentidx = indextoshift;
          leftidx = 2 * currentidx + 1;
        } else {
          return;
        }
      }
    }
  
    swap(a, b) {
      let temp = this.heap[a];
      this.heap[a] = this.heap[b];
      this.heap[b] = temp;
    }
  
    heapSort() {
      const n = this.heap.length;
      for (let i = n; i > 0; i--) {
        this.swap(0, i - 1);
        this.shiftdown(0, i - 1);
      }
      return this.heap;
    }
  }
  
  let arr = [6, 2, 8, 1, 5];
  let h = new Heap(arr);
  const sortedArray = h.heapSort();
  console.log("Sorted Array:", sortedArray);
  