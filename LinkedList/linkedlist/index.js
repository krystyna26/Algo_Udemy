// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
        // or
        // this.insertAt(data, 0);
    }

    size(){
        let counter = 0;
        let node = this.head;
        while(node){
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst(){
        // return this.head;
        // or
        return this.getAt(0);
    }

    getLast(){
        // if(!this.head){
        //     return null;
        // }
        // var curr = this.head;
        // while(curr){
        //     if(!curr.next){
        //         return curr;
        //     }
        //     curr = curr.next;
        // }
        // or
        return this.getAt(this.size() - 1);

    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        //or
        // this.removeAt(0);
    }

    removeLast(){
        // // empty list
        if(!this.head){
            return;
        }
        // // one node
        if(!this.head.next){
            this.head = null;
            return;
        }
        // // 2 or more nodes
        var prev = this.head;
        var curr = this.head.next;
        while(curr.next){
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;

        // or

        // this.removeAt(this.size() - 1)
    }

    insertLast(val){
        //empty list
        if(!this.head){
            this.head = new Node(val);
        }
        var curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = new Node(val, null);
        curr.next.next = null
        // or 
        // this.insertAt(data, this.size())
    }

    getAt(index) {
        // if(!this.head){
        //     return null;
        // }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
            
        }
        return null;
    }

    removeAt(index){
        // empty list
        if(!this.head){
            return;
        }
        var curr = this.head;
        var count = 0;
        while(curr){
            if(count === index - 1){
                if(curr.next){
                    return (curr.next = curr.next.next);
                }else{
                    return (curr.next = null);
                }
            }
            curr = curr.next;
            count++;
        }
        //or 
        // if (index === 0) {
        //     this.head = this.head.next;
        //     return;
        // }

        // const previous = this.getAt(index - 1);
        // if (!previous || !previous.next) {
        //     return;
        // }
        // previous.next = previous.next.next;


    }

    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }
        var counter = 1;
        var prev = this.head;
        var curr = this.head.next;
        // const previous = this.getAt(index-1) || this.getLast();
        // var curr = new Node(data, prev.next);
        // prev.next = curr;
        while(curr){
            if(counter === index){
                prev.next = new Node(data, curr);
                return;
            }
            prev = curr;
            curr = curr.next;
            counter++;
        }
        prev.next = new Node(data, curr);
    }

    forEach(fn){
        if (!this.head) {
            return null;
        }
        let node = this.head;
        let counter = 0;
        while(node){
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    // generator func
    *[Symbol.iterator]() {
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }
    
}

module.exports = { Node, LinkedList };
