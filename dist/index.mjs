// src/functions.ts
function sayHello({ firstName, lastName, age }) {
  console.log(firstName, lastName, age);
}

// src/class.ts
var Pedro = class {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  greetings() {
    return `Hello ${this.name} ${this.lastname}`;
  }
};
export {
  Pedro,
  sayHello
};
