const Person = (function() {

  const p = new WeakMap();
  
  // Store and invoke the set and get methods in variables for additional safety
  const set = WeakMap.prototype.set;
  const get = WeakMap.prototype.get;

  class Person {
    constructor({ first, last }) {
      const props = {
        first: first,
        last: last
      };

      set.call(p, this, props);
      //p.set(this, props);
    }

    showInfo() {
      return `Person: ${get.call(p, this).first} ${get.call(p, this).last}`;
      //return `Person: ${p.get(this).first} ${p.get(this).last}`;
    }
  }

  return Person;
})();

const Employee = (function() {

  const p = new WeakMap();

  class Employee extends Person {
    constructor({ first, last, title = 'Unknown' }) {
      super({ first, last });
      
      const props = {
        title: title
      };

      p.set(this, props);
    }

    showInfo() {
      return `${super.showInfo()} Title: ${p.get(this).title}`;
    }
  }

  return Employee;
})();

const userData = {
  first: 'Sven',
  last: 'Kohn',
  title: 'CTO',
  age: 38
};

const sven = new Employee(userData);
console.log(sven.showInfo());