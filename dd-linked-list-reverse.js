

function reverse (linkedList){
  var list  = linkedList;
  var previous  = null;

  while(list) {
    var save = list.next;
    list.next = previous;
    previous = list;
    list  = save;
  }
  return previous;
}

module.exports = reverse;
