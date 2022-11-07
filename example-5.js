import {cleanConsole, createAll} from './data.js';
import { example4 } from './example-4.js';
//const companies = createAll();
const companies = example4()

//cleanConsole(5, companies);

//console.log('---- EXAMPLE 5 --- ', companies);

export const example5 = (companies)=> {
    return console.log(companies)
    // const edadSum = example4.reduce((accum, current)=> {
    //     return accum + current.age
    // },0)
    // console.log(edadSum);
}
example5(companies)
//example5(companies)

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"

//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car.
