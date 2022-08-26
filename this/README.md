When defined as a method of an object, in a regular function this refers to the object, so you can do:



const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  fullName: function() {
    return `${this.manufacturer} ${this.model}`
  }
}




calling car.fullName() will return "Ford Fiesta".
