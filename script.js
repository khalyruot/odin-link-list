
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
    prependFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    //append(value) adds a new node containing value to the end of the list
    appendLast(data){
        let node = new Node(data);
        let current;

        //If empty, make head
        if(!this.head  /*this.head == null*/){
            this.head = node
        }
        else{
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    //size returns the total number of nodes in the list
    countNode(){
        let sizeLinkList = 0;
        let current = this.head;
        while(current){
            sizeLinkList++;
            current =current.next;
        }
        console.log("sizeLinkList: "+sizeLinkList);
        return sizeLinkList;
    }

    //head returns the first node in the list
    returnFirst(){
        console.log(this.head);
        return this.head;
    }

    //tail returns the last node in the list
    returnLast(){
        if(!this.head){
            return null;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        console.log(current);
        return current; 
    }

    //at(index) returns the node at the given index

    returnNodeAtIndex(index){
        if(index<0){
            return null;
        }

        let current = this.head;
        let currentIndex = 0;
        while(current){
            if(currentIndex===index){
                return current;
            }
            current = current.next;
            currentIndex++;
            console.log(current);
        }
        return null;
    }


    //pop removes the last element from the list

    popRemoveLast(){
        if(!this.head){
            return null;
        }
        if(!this.head.next){
            const lastNode = this.head;
            this.head = null;
            return lastNode;
        }

        let current = this.head;
        let previous = null;

        while(current.next){
            previous = current;
            current = current.next
        }
        previous.next = null;
        console.log(current);
        return current;
    }


    containValue(value){
        let current = this.head;
    
        while(current){
            if(current.data === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    //find(value) returns the index of the node containing value, or null if not found.
    find(value){
        let current = this.head;
        let currentIndex = 0;

        while(current){
            if(current.data === value){
                return currentIndex;
            }
            current = current.next;
            currentIndex++;
        }
        return null;
    }

    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    printToString(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

//contains(value) returns true if the passed in value is in the list and otherwise returns false.



const newLinkList = new LinkedList();

newLinkList.prependFirst(100);
newLinkList.prependFirst(200);
newLinkList.prependFirst(300);
newLinkList.appendLast(400);
newLinkList.appendLast(500);
newLinkList.countNode();
newLinkList.returnFirst();
newLinkList.returnLast();
newLinkList.returnNodeAtIndex(2);
newLinkList.popRemoveLast();
console.log(newLinkList.containValue(800));
console.log(newLinkList.find(400));
newLinkList.printToString();


// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.appendLast("dog");
list.appendLast("cat");
list.appendLast("parrot");
list.appendLast("hamster");
list.appendLast("snake");
list.appendLast("turtle");
list.printToString();