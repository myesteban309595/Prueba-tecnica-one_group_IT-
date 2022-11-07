import {createAll, cleanConsole} from './data.js';
const companies = createAll();

 //console.log('---- EXAMPLE 1 --- ', companies);

export const example1 =(companies)=> {
    let long = companies.length-1;

    const sortedCompanies = companies.sort((a,b)=> {
        if(a.usersLength > b.usersLength){
            return -1
        }else if(a.usersLength < b.usersLength){
            return 1
        }else{
            return 0
        }
    })

    const result = sortedCompanies.map(e=> {
        // modifico las propiedas segun requerimientos
        let {isOpen, usersLength, id} = e;
        let name = e.name.charAt(0).toUpperCase() + e.name.slice(1)
    
        let noSortedUser = (e.users).map(p => {
            let {age, car, id} = p;
            let firstName = !p.firstName ? "" : p.firstName.charAt(0).toUpperCase()+ p.firstName.slice(1);
            let lastName = !p.lastName ? "" :p.lastName.charAt(0).toUpperCase()+p.lastName.slice(1); 

            return {firstName, lastName, age, car, id}
        });
        // sorteo el array de usuarios en orden alfabetico
        let users = noSortedUser.sort((a,b)=> {
            if(a.firstName < b.firstName){
                return -1
            }else if(a.firstName > b.firstName){
                return 1
            }else{
                return 0
            }
        })
        //console.log(users);
        return {name, users, isOpen, usersLength, id}
    })
    //console.log(result);
    //cleanConsole(1, result);
    return result;
}

//example1(companies);
console.log(example1(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
//* todos los valores "undefined" en "usuarios" por un string vacío.
//* El nombre de cada "company" debe tener una letra mayúscula al principio, así como
//* el apellido y el nombre de cada "user".
//* Las "companies" deben ordenarse por su total de "user" (orden decreciente)
//* y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order
