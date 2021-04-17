import Node from "./Node.js";

export default class LinkedNodeList {
    constructor() {
        this.previous = null;
        this.next = null;
        this.heap = null;
        this.tail = null;
    }
    /**
     * Add a node to the linked list
     * @param {*} node
     * @memberof LinkedNodeList
     */
    add(node) {
        if (this.heap === null) {
            this.heap = node;
        } else {
            if (this.tail !== null) {
                node.previous = this.tail;
                this.tail.next = node;
            } else {
                this.heap.next = node;
                node.previous = this.heap;
            }
            this.tail = node;
        }
    }
    /**
     * Add a node to the begining of the list
     * @param {*} node
     * @memberof LinkedNodeList
     */
    prepend(node) {
        if (this.heap !== null) {
            node.next = this.heap;
            this.heap.previous = node;
            this.heap = node;
        }
    }
    /**
     * Print list from heap to tail
     *
     * @memberof LinkedNodeList
     */
    readForwardList() {
        if (this.heap !== null) {
            let currentNode = this.heap;
            while (currentNode !== null) {
                console.log(currentNode.value);
                currentNode = currentNode.next;
            }
        }
    }
    /**
     * Prirnt list from tail to heap
     * @memberof LinkedNodeList
     */
    readBackwardList() {
        if (this.tail !== null) {
            let currentNode = this.tail;
            while (currentNode !== null) {
                console.log(currentNode.value);
                currentNode = currentNode.previous;
            }
        }
    }
    /**
     * Find a node by looking for a value or for a custom function as parameter
     *
     * @param {Object} findParams.value
     * @param {function} [findParams.callback]
     * @return {Node}
     * @memberof LinkedNodeList
     */
    find({ value = undefined, fc = undefined }) {
        if (this.heap !== null) {
            let currentNode = this.heap;
            while (currentNode !== null) {
                if (value !== undefined && currentNode.value === value)
                    return currentNode;
                if (fc && fc(currentNode)) return currentNode;
                currentNode = currentNode.next;
            }
        }
        return null;
    }
    // TODO: delete a node from the list
    // TODO: convert list to array
}
