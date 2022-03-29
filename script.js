class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  getbyIndex(text) {
    console.log(this.data[text]);
  }

  push(num) {
    this.data[this.length] = num;
    this.length++;
  }

  pop() {
    delete this.data[this.length - 1];
    console.log(this.length);
    this.length--;
  }
}

let array = new MyArray();
array.push(5);
console.log(array);
array.push(7);
console.log(array);
array.getbyIndex(1);
console.log(array);
array.pop();
console.log(array);
