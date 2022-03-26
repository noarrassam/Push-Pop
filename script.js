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
  }

  pop() {
    console.log(this.data);
    var arr1 = Object.values(this.data);
    console.log(arr1);
    for (let i = 0; i < arr1.length; i++) {
      arr1[i].pop();
      for (let i = 0; i < arr1.length; i++) {
        this.data[i] = arr1[i];
      }
    }
    console.log(arr1);
  }
}

let array = new Array();
array.push(5, 6, 7);
console.log(array);
array.pop();
console.log(array);
