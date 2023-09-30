class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}
class doublelinkedlist {
    constructor() {
        this.head = null
        this.tail = null
    }
    
    addnode(data) {
        let newnode = new Node(data)
        if (this.head == null) {
            this.head = newnode
        }
        else {
            this.tail.next = newnode
            newnode.prev = this.tail
        }
        this.tail = newnode
    }

    display() {
        let temp = this.head
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    displayReverse() {
        let temp = this.tail
        while (temp != null) {
            console.log(temp.data);
            temp = temp.prev;
        }
    }

    ///////////////////////////////////// Insert After/////////////////////////////////////

    insertAfter(nextToo, data) {
        let newnode = new Node(data)
        let current = this.head

        while (current != null && current.data != nextToo) {
            current = current.next
        }
        if (current == null) {
            return;
        }
        newnode.next = current.next
        current.next = newnode
    }

    ///////////////////////////////////// Insert Before ///////////////////////////////////

    insertBefore(preTo, data) {
        let newnode = new Node(data)
        let current = this.tail
        while (current != null && current.data != preTo) {
            current = current.prev
        }
        if (current == null) {
            return;
        }
        newnode.prev = current.prev
        newnode.next = current
        current.prev.next = newnode
        current.prev = newnode
    }
}
let list = new doublelinkedlist()
list.addnode(10)
list.addnode(20)
list.addnode(30)
list.addnode(40)
list.insertAfter(40, 78)
list.insertBefore(40, 500)
list.displayReverse()
list.display()