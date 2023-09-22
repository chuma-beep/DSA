LinkedList.protoype.search = function(searchValue){
    var currentNode = this.head;
    
    
    while(currentNode){
       if(currentNode.value === searchValue){
        return currentNode.value;
       }
      currentNode = currentNode.next;
    }
    return null;
}
var myLL = LinkedList();
myLL.addToHead(70);
myLL.addToHead("Hello");
myLL.addToHead(123);
myLL.addToTail("World");
myLL.addToTail(20);
myLL.addToTail(19);



myLL.search(70);

