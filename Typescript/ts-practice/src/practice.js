"use strict";
class Queue {
    constructor() {
        this.list = [];
        this.length1 = this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
console.log(queue.length1);
queue.enqueue(0);
console.log(queue.length1);
