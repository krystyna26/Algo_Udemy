// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

//  -------------   |23 |   | 5 |
//  23, 55, 5 ,77   |55 |   |77 |
//  -------------   |___|   |___|
//      queue        S1      S2

class Queue {
    constructor(){
        this.first  = new Stack();
        this.second = new Stack();
    }

    add(record){
        this.first.push(record);
    }

    remove(){
        while(this.first.peek()){
            this.second.push(this.first.pop())
        }
        var result = this.second.pop();

        while(this.second.peek()){
            this.first.push(this.second.pop());
        }
        return result;
    }

    peek(){
        while(this.first.peek()){
            this.second.push(this.first.pop());
        }

        var resultToReturn = this.second.peek();

        while(this.second.peek()){
            this.first.push(this.second.pop())
        }

        return resultToReturn;
    }
}

module.exports = Queue;
