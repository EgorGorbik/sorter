class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort(function(a,b) {return a-b});
    var sortel = [];
    for (var i = 0; i < indices.length; i++) {
      sortel[i] = this.arr[indices[i]];
    }
    sortel.sort(this.compareFunction);

    for (var i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = sortel[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;