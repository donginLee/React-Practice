class Queue<T> {
    list: T[] = [];

    length1= this.list.length;
    enqueue(item: T) {
      this.list.push(item);
    }
    dequeue() {
      return this.list.shift();
    }
  }
  
  const queue = new Queue<number>();
  console.log(queue.length1);
  queue.enqueue(0);
  console.log(queue.length1);