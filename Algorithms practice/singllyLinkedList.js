// /the below block of code is the structure of the singly linked list.
class Node
{
    constructor()
        {
            this.data=0;

            //Pointer to tnext node
            this.next=null;
        }
    
}

function printLIst(n)
{

    while(n != null)


    document.write(n.data + " ");
    n = n.next;
}


// Driver Code
let head = null;
let second = null;
let third = null;


head = new Node();
second = new Node()
third = new Node();

head.data = 1;


head.next = second;

second.data = 2;
second.next = third;

third.data = 3;
third.next = null;


