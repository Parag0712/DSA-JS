class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    // Custom Push Method
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }

    // Custom Get Method
    get(index) {
        if (this.length <= index) {
            return -1
        } else {
            return this.data[index]
        }
    }
    getAll() {
        console.log(this.data);
    }

    // Custom Pop
    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[lastItem]
        this.length--;
        return lastItem
    }

    // Shift Method
    shift() {
        const firstItem = this.data[0];
        for (let index = 0; index < this.length; index++) {
            this.data[index] = this.data[index + 1]
        }

        // last element is undefiend so we remvoe
        delete this.data[this.length - 1]
        this.length--;
        return firstItem
    }

    //Unshift Method 
    unshift(...items) {
        const numItems = items.length;

        // first step shift 3 element right
        for (let index = 0; index < this.length; index++) {
            this.data[index + numItems] = this.data[index];
        }

        // now fill blanck space
        for (let index = 0; index < numItems; index++) {
            this.data[index] = items[index]
        }
        this.length = numItems;
        return this.length
    }

    slice(start, end) {
        const result = new MyArray();

        // Handle negative start
        if (start < 0) {
            start = Math.max(this.length + start, 0);
        }

        // Handle end not provided
        if (end === undefined) {
            end = this.length;
        }

        // Handle negative end
        if (end < 0) {
            end = Math.max(this.length + end, 0);
        }

        // Ensure start and end are within bounds
        start = Math.min(start, this.length);
        end = Math.min(end, this.length);

        // Return empty array if start is greater than or equal to end
        if (start >= end) {
            return result;
        }

        // Copy elements
        for (let i = start; i < end; i++) {
            result.push(this.data[i]);
        }

        return result;
    }

    // splice
    splice(start, deleteCount, ...items) {
        // Handle negative start index
        if (start < 0) {
            start = Math.max(this.length + start, 0);
        }

        // Ensure start is within bounds
        start = Math.min(start, this.length);

        // If deleteCount is undefined, remove all elements from start to the end
        if (deleteCount === undefined) {
            deleteCount = this.length - start;
        }

        // Ensure deleteCount is non-negative
        deleteCount = Math.max(0, deleteCount);

        // Limit deleteCount to the number of elements from start to the end
        deleteCount = Math.min(deleteCount, this.length - start);

        // Create an array to store removed elements
        const removed = new MyArray();

        // Remove elements
        for (let i = 0; i < deleteCount; i++) {
            removed.push(this.data[start + i]);
        }

        // Shift remaining elements if necessary
        const newLength = this.length - deleteCount + items.length;
        if (items.length !== deleteCount) {
            for (let i = start + deleteCount; i < this.length; i++) {
                this.data[i - deleteCount + items.length] = this.data[i];
            }
        }

        // Insert new items
        for (let i = 0; i < items.length; i++) {
            this.data[start + i] = items[i];
        }

        // Update length
        this.length = newLength;

        // Clean up any excess elements
        for (let i = this.length; i < Object.keys(this.data).length; i++) {
            delete this.data[i];
        }

        // Return the array of removed elements
        return removed;
    }
    
    // delete method
    delete(index) {
        // Store the item to be removed
        const item = this.data[index];

        // Shift elements after the target element (excluding the last one)
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        // Delete the last element (which now holds the element to be removed)
        delete this.data[this.length - 1];

        // Decrement length
        this.length--;

        // Return the removed item
        return item;
    }
}

const myarray = new MyArray();
myarray.push("Parag")
myarray.push("Jeel")
myarray.push("Samarth")
myarray.push("Nihar")
myarray.getAll()

// console.log(myarray.get(0));
// console.log(myarray.shift());
// myarray.getAll()
// myarray.unshift("Parag", "NewFirst2", "NewFirst3")
// myarray.getAll()
// console.log(myarray.delete(2))
// console.log(myarray.delete(1))
// myarray.getAll()
// const newArray = myarray.slice(2, 4)
const newArray = myarray.splice(0, 1,["nahar"])
console.log(newArray)
myarray.getAll()