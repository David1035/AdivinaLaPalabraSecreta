

/*const person = {
    name: 'David',
    lastName: 'Hernandez',
    age: 30,
}*/

// función constructora, se inicia con mayúscula
function Person(name,  lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

//Instancias que vengan de un objeto 
const person1 = new Person('David', 'Hernandez', 30)
const person2 = new Person('David', 'Hernandez', 30)


