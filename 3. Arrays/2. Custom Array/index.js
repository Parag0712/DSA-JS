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

console.log(myarray.get(0));
console.log(myarray.shift());
myarray.getAll()
myarray.unshift("Parag", "NewFirst2", "NewFirst3")
myarray.getAll()
console.log(myarray.delete(2))
console.log(myarray.delete(1))
myarray.getAll()
