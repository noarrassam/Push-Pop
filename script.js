class Array {
  constructor() {
    this.data = {};
  }

  getbyIndex() {
    //let arr = this.data.shift();
    //console.log(arr);
  }

  push(...num) {
    var arr = Object.values(this.data);
    arr.push(num);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      this.data[i] = arr[i];
    }
    console.log(this.data);
  }

  pop() {
    var pers = Object.entries(this.data);
    pers.pop();
  }
}

let array = new Array();
array.push(5, 6, 7);
console.log(array);
array.pop();
console.log(array);

//array.pop();
