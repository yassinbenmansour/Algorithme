// Objects describes something to a computer

// What does this object describe?
let person = {
  name: 'Elon',
  age: 50,
  alive: true,
}

// What would this print?
console.log(person.name)

// How would you print the persons age?




// object person => name , eyecolor

const intro = (name, eyecolor) => {
  const person = {
    name: name,
    eyecolor: eyecolor,
    money: 1000000,
    tchirt: "black",
  }

  const description = 'hi my name is ' + person.name + ' and color of my eyes is ' + person.eyecolor + ' and my bank money is $' + person.money + ' USD'

  return description
}

console.log(intro("yassine", 'brown'))
