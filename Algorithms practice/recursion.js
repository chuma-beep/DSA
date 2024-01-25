//merge two sorted list using recursion.....
//leet code challenge

var mergeTwoLists = function(list1, list2) {
    
    if(!list1 || !list2)
    return list1 || list2
    
     let head

      if (list1.val < list2.val){
          head = list1
          head.next = mergeTwoLists(list1.next, list2)
      }else{
          head = list2
          head.next = mergeTwoLists(list1, list2.next)
      }
      return head
    {
       
    }
};


mergeTwoLists([1,2,3,4,], [1,2,3,4]);
