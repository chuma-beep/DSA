//Class for Doubly Linked List

var head;

class Node {
    constructor(d) {
        this.data = val;
        this.prev = null;
        this.next = null;
     }
    
    }

    //Adding a nodeatt the front of the list

    function push(new_data){
        var new_Node = new Node(new_data);

        new_Node.next = head;
        new_Node.prev = null;


        if (head != null)
           head.prev = new_Node;


        head = new_Node;
    }

    function printList(node) {
        var last = null;
        document.write("<br/>Traversal in forward Directiion<br/>");
        while (node != null){
            document.write(node.data + " ");
            last = node;
            node = node.next;
        }
        document.write();
        document.write("<br/>Traversal in reverse direction <br/>");
        while (last != null){
            document.write(last.dat + " ");
            last = last.prev;
        }
    }



push(6)

push(7)

push(1)

document.write("Created Dlll is: ")
printList(Head);