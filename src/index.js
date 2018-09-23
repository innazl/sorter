class Sorter {
  constructor() {
    this.Array = [];
    this.comparator = function (x, y) {
      return x - y;
    };
  }

  add(element) {
    this.Array.push(element);
  }

  at(index) {
    return this.Array[index];
  }

  get length() {
    return this.Array.length;
  }

  toArray() {
    return this.Array;
  }

  sort(indices) {
    indices.sort();
    let lv_Array=[];
    let length = indices.length;
    for (var i = 0; i < length; i++){
      lv_Array.push(this.Array[indices[i]]);
    }
    lv_Array.sort(this.comparator);
    for (var i = 0; i < length; i++) {
      this.Array[indices[i]] = lv_Array.shift();
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;