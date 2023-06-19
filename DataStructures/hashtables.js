/**
 * Time complexity
  * insert o(n)
 * travese o(n)
 
 */

/**
 * TODO: insert and reverse
 */

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  get(key) {
    let address = this._hash(key);
    for (let i = 0; i < this.data[address].length; i++) {
      if (this.data[address][i][0] == key) {
        return this.data[address][i][1];
      }
    }
  }

  set(key, value) {
    let address = this._hash(key);
    if (this.data[address] == undefined) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  keys() {
    return;
  }
}

export function init() {
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 200);
  console.log(myHashTable.get('grapes'), 'this is the value of grapes');
  console.log(myHashTable);
}
