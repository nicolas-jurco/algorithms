import Node from "./node.js";

class LinkedNodeList {
    constructor() {
        this.previous = null;
        this.next = null;
        this.heap = null;
        this.tail = null;
    }
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
	prepend(node) {
		if (this.heap !== null) {
			node.next = this.heap;
			this.heap.previous = node;
			this.heap = node;
		} 		
	}
    readForwardList() {
        if (this.heap !== null) {
            let currentNode = this.heap;
            while (currentNode !== null) {
                console.log(currentNode.value);
                currentNode = currentNode.next;
            }
        }
    }
	readBackwardList() {
        if (this.tail !== null) {
            let currentNode = this.tail;
            while (currentNode !== null) {
                console.log(currentNode.value);
                currentNode = currentNode.previous;
            }
        }
	}
	find({ value = undefined, fc = undefined }) {
        if (this.heap !== null) {
            let currentNode = this.heap;
            while (currentNode !== null) {
                if(value !== undefined && currentNode.value === value)
					return currentNode;
				if (fc && fc(currentNode))
					return currentNode;
                currentNode = currentNode.next;
			}
        }
		return null;
	}
	sort({ comparer = undefined }) {
		
	}

}

let linkedNodeList = new LinkedNodeList();
let node = new Node(55)
linkedNodeList.add(node);
node = new Node(56);
linkedNodeList.add(node);
node = new Node(57);
node.some_text = "hello world"
linkedNodeList.add(node);
node = new Node(58);
linkedNodeList.add(node);
node = new Node(70);
linkedNodeList.prepend(node);
linkedNodeList.readForwardList();

let vNode = linkedNodeList.find({ fc: (innerNode) => innerNode.value === 56 });

console.log(vNode);