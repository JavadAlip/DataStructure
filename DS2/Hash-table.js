class Hashtable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        let index = this.hash(key)
        this.table[index] = value

    }

    get(key) {
        let index = this.hash(key)
        return this.table[index]

    }

    remove(key) {
        let index = this.hash(key)
        return this.table[index] = undefined
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }

        }
    }
}
let table = new Hashtable(50)
table.set("namejajae", "javad")
table.set("age", "21")
table.display()


////////////////////// Another Method ////////////////////////


class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push({ key, value });
    }

    get(key) {
        let index = this.hash(key);
        if (!this.table[index]) {
            return undefined; // Key not found
        }
        for (let item of this.table[index]) {
            if (item.key === key) {
                return item.value; // Return the value if the key is found
            }
        }
        return undefined; // Key not found in the array
    }

    remove(key) {
        let index = this.hash(key);
        this.table[index] = undefined;
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}
let javad = new HashTable(70);
javad.set("name", "javad");
javad.set("age", "20");
javad.set("name", "javadali");
javad.display();
console.log(javad.get("name"));
