class Array {
  constructor() {
    this.data = {};
  }

  getbyIndex() {}

  push(...num) {
    var arr = Object.entries(this.data);
    arr.push(num);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      this.data[i] = arr[i];
    }
  }

  pop() {
    console.log(this.data);
    var array = Object.values(this.data);
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      array[i].pop();
    }
    for (let j = 0; j < array.length; j++) {
      this.data[j] = array[j];
    }
    console.log(array);
  }
}

let array = new Array();
array.push(5, 6, 7);
console.log(array);
array.pop();
console.log(array);
