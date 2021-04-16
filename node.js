export default class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
		this.previous = null;
		this.some_text = "";
	}
}

// let node = new Node(1);
// let first_node = new Node(55);
// let second_node = new Node(56);

// node.add(first_node)
// first_node.add(second_node);

// while (node.next !== null) {
// 	console.log(node.value);
// 	node = node.next;
// }

// console.log(node.value);
