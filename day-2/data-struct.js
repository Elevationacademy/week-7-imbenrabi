/**ex 01 */
class UniqueArray {

    constructor() {
        this.dataTracker = {},
            this.data = []

    }

    add(item) {
        if (!this.dataTracker[item]) {
            this.dataTracker[item] = true;
            this.data.push(item);
        }
    }

    showAll() {
        console.log(Object.keys(this.dataTracker));
    }

    exists(item) {
        if (this.dataTracker[item]) {
            return true;

        }

        return false;
    }

    get(index) {
        if (this.data[index]) {
            return this.data[index];

        }

        return -1;
    }

}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
