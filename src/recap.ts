const myName = 'Diana';
const myAge = 25;
const suma = (a: number, b: number) =>{
  return a+b ;
}
suma(12,2);

class Persona{

  constructor (private age:number, private name: string ){  }

  getSummary(){
    return  `My name is ${this.name} and I am ${this.age} years old.`
  }

 
}
