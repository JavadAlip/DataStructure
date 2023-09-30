class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class Stack {
    constructor() {
        this.front = null
        this.rear = null
    }
    enqueue(data) {
        let newnode = new Node(data)
        if (this.rear == null) {
            this.rear = newnode
            this.front = newnode
            
        }else{
        this.rear.next = newnode
        this.rear = newnode
        }
    }
    dequeue() {
        if (this.front == null) {
            console.log("empty")
            return;
        }
        this.front = this.front.next
        if (this.front == null) {
            this.rear = null
        }
    }
    display() {
        let temp = this.front
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next
        }
    }
}
let queue=new Stack()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.display()

