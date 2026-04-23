class MyHashSet {
    constructor() {
        this.hash = []
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.hash.push(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let newHash = this.hash.filter((val)=>val!=key)
        this.hash =newHash
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
       return this.hash.includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
