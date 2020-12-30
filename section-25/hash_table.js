class HashTable {
  constructor(size=53){
    this.keyMap = Array.from(Array(size), () => []);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.get(key)) this.keyMap[index].push([...arguments])
  }

  get(key) {
    const index = this._hash(key);
    let keyValue = undefined;
    this.keyMap[index].forEach(element => {
      if (element[0] === key) keyValue = element;
    })
    return keyValue;
  }

  keys() {
    return this.keyMap.reduce((keys, keyValArr) => {
      keyValArr.forEach((keyVal) => {
        keys.push(keyVal[0]);
      })
      return keys;
    }, [])
  }

  values() {
    return this.keyMap.reduce((vals, keyValArr) => {
      keyValArr.forEach((keyVal) => {
        if (!vals.includes(keyVal[1])) vals.push(keyVal[1]);
      })
      return vals;
    }, [])
  }
}

const hash_table = new HashTable();

hash_table.set("pink", "123456");
console.log(hash_table.keyMap);
console.log(hash_table.get("pink"));
console.log(hash_table.get("red"));
hash_table.set("pink", "123456");
console.log(hash_table.keyMap);
hash_table.set("blue", "987654");
console.log(hash_table.keyMap);
hash_table.set("red", "987654");
console.log(hash_table.keys());
console.log(hash_table.values());
