export default class Queue {
    constructor() {
        this.heap = null;
        this.tail = null;
    }
    enqueue(node) {
        if (!this.heap) {
            this.heap = node;
        } else {
            if (!this.tail) {
                this.tail = this.heap;
            }
            node.next = this.heap;
            this.heap.previous = node;
            this.heap = node;
        }
    }
    dequeue() {
        if (this.heap) {
            if (this.tail) {
                let new_tail = this.tail.previous;
                new_tail.next = null;
                if (new_tail.previous) this.tail = new_tail;
                else this.tail = null;
            } else this.heap = null;
        }
    }
    /**
     * Print list from heap to tail
     *
     * @memberof Queue
     */
    printQueue() {
        if (this.heap !== null) {
            let currentNode = this.heap;
            while (currentNode !== null) {
                console.log(currentNode.value);
                currentNode = currentNode.next;
            }
        } else console.log("empty queue");
    }
    // TODO: Convert queue to array
}
