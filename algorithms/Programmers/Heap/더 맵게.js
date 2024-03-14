function solution(scoville, K) {
  class MinBinaryHeap {
    constructor(val) {
      this.values = [...val];
    }

    insert(val) {
      this.values.push(val);
      this.bubbleUp();
    }

    bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (parent < element) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }

    remove() {
      if (!this.values.length) return undefined;
      const topNode = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.bubbleDown();
      }

      return topNode;
    }

    bubbleDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild < element) swap = leftChildIdx;
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if ((swap === null && rightChild < element) || (swap !== null && leftChild > rightChild)) swap = rightChildIdx;
        }

        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }

  let ans = 0;
  let s = [...scoville].sort((a, b) => a - b);
  if (s.every((item) => item >= K)) return 0;

  const heap = new MinBinaryHeap([...s]);

  while (heap.values.length > 1 && heap.values[0] < K) {
    heap.insert(heap.remove() + heap.remove() * 2);
    ans++;
  }

  return heap.values[0] >= K ? ans : -1;
}
