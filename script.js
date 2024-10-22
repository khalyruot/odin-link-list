
class Node{

    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }

}


class LinkedList{

    constructor(){
        this.head = null;
        this.size = 0;
    }

    //prepend(value) adds a new node containing value to the start of the list
    prependFist(data){

    }

    //append(value) adds a new node containing value to the end of the list
    appendEnd(data){
        this.data = new Node(data);

    }
}

