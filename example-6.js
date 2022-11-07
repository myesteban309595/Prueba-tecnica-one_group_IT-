import {cleanConsole, createAll} from './data.js';

const companies = createAll();

//cleanConsole(6, companies);
console.log('---- EXAMPLE 6 --- ', companies);

const example6=(companies)=> {

  const result = companies.map(e=> {
    
    // let user= (e.users).map((p,index)=> {
    //   let {car, firstName, lastName} = p
    //   let age= (p.age).toString();
    //   const newName = firstName+lastName+age;
    // })
    let newName= (e.users).reduce((acumulador, iterador) => {
      Object.assign(acumulador, `${iterador.firstName+iterador.lastName+iterador.age}`)
    },{});

    //console.log(newName);

  })
}

example6(companies);
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
// edad de cada "user". Cada atributo debe tener el valor de boolean "car".
// Ver ejemplo a continuación.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below

const example = {
  johnDoe32: true,
  BernardoMinet45: false,
  alinaChef23: true,
};

console.log(example);
