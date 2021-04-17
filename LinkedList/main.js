import LinkedNodeList from "./NodeList.js";
import Node from "./Node.js";

let linkedNodeList = new LinkedNodeList();

let node = new Node(55);
linkedNodeList.add(node);

node = new Node(56);
linkedNodeList.add(node);

node = new Node(57);
node.some_text = "hello world";
linkedNodeList.add(node);

node = new Node(58);
linkedNodeList.add(node);

node = new Node(70);
linkedNodeList.prepend(node);
linkedNodeList.readForwardList();

let vNode = linkedNodeList.find({ fc: (innerNode) => innerNode.value === 57 });

console.log(vNode);
