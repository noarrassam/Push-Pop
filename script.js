class Array {
  constructor() {
    this.data = {};
  }

  getbyIndex() {
    //let arr = this.data.shift();
    //console.log(arr);
  }

  push(...num) {
    var arr = Object.entries(this.data);
    arr.push(num);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      this.data[i] = arr[i];
    }
    console.log(this.data);
  }

  pop() {
    console.log(this.data);
    var arr = Object.entries(this.data);
    arr.pop();
    console.log(arr);
  }
}

let array = new Array();
array.push(5, 6, 7);
console.log(array);
array.pop();
console.log(array);
