import Queue from "./Queue.js";
import Node from "./Node.js";

let queue = new Queue();

let node = new Node(55);
queue.enqueue(node);

node = new Node(56);
queue.enqueue(node);

node = new Node(57);
queue.enqueue(node);

node = new Node(58);
queue.enqueue(node);

queue.printQueue();

console.log("----------");

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.printQueue();

node = new Node(58);
queue.enqueue(node);

console.log("----------");

queue.printQueue();
