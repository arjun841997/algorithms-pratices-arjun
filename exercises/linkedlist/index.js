// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }

}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(data){   
        //mistake     
        this.head = new Node (data, this.head)
    }

    size(){
        //mistake
        let totalSize = 0
        let current = this.head        
        while(current){
            totalSize++
            current = current.next
        }        
        return totalSize
    }

    getFirst(){
        return this.head
    }

    getLast(){
        let current = this.head
        while(current){
            if(!current.next){
                return current
            }
            current = current.next
        }
    
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        this.head = this.head.next
    }

    removeLast(){    
        //mistake
        if(!this.head){
            return
        }
        if(!this.head.next){
            this.head = null
            return
        }
        let prev = this.head
        let current = this.head.next

        while(current.next){
            prev = current            
            current = current.next            
        }        
        prev.next = null
    }

    insertLast(data){         
        if(!this.head){
            this.head = new Node(data)
            return
        }
        let current = this.head
        while(current){
            if(!current.next){
                const node = new Node(data)
                current.next = node
                return
            }
            current = current.next
        }
    }

    getAt(index){        
        let counter = 0
        let current = this.head
        while(current){
            if(counter === index){
                return current
            }
            counter++            
            current = current.next
        }
        return null
    }

    removeAt(index){    
        if(!this.head){ return null; }       
        if(index === 0){
            this.head = this.head.next;
            return
        } 
        let prev = this.getAt(index -1)        
        let next = this.getAt(index + 1)
        prev.next = next
    }    

    insertAt(data, index){        
        if(index === 0){ 
            if(this.head){
                this.head = new Node(data, this.head)
            }else{
                this.head = new Node(data)
            }            
            return
        }        
        if(index > this.size()){
            this.insertLast(data)
            return
        }
        let prev = this.getAt(index -1)
        let current = this.getAt(index)        
        prev.next = new Node(data, current)        
    }

    
    
}

module.exports = { Node, LinkedList };
