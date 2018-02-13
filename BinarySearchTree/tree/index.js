// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        var node = new Node(data);
        this.children.push(node);
    }

    remove(data){
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    // breath first -> iterate through level
    traverseBF(fn){
        var arr = [this.root];
        while(arr.length){
            var node = arr.shift();
            // ... -> means take all of the element from arr and push to the new arr one by one
            // arr.push(...node.children);
            for(let child of node.children){
                arr.push(child);
            }
            fn(node);
        }
    }

    // depth first -> going to bottom as fast as possible
    traverseDF(fn){
        var arr = [this.root];
        while(arr.length){
            var node = arr.shift();
            // for(let child of node.children){
                // unshift adds to the front
                // arr.unshift(child);
                arr.unshift(...node.children);
                fn(node);
            // }
        }
    }
}

module.exports = { Tree, Node };
