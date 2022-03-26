class Player {
  constructor(name) {
    this.name = name;
  }
  play() {
    console.log(this.name, "plays");
  }
}

class ArrayClass {
  constructor() {
    this.array = [];
  }

  getArr() {
    return this.array;
  }

  pushMethod() {
    let textField = document.getElementById("text");
    let push = document.getElementById("push");

    push.addEventListener("click", newMethod);

    function newMethod() {
      let array = new ArrayClass();
      if (textField.value.trim() != 0) {
        array.push(textField.value);
        console.log(array);
        let textNode = document.createTextNode(textField.value);
        console.log(textNode);
        let li = document.createElement("li");
        li.appendChild(textNode);
        document.getElementById("ul").appendChild(li);
      }
    }
  }

  pop() {
    this.array.pop();
  }
}

let array = new ArrayClass();

console.log(array);
console.log(array.pushMethod());
