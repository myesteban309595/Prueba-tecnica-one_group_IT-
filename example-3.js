import {cleanConsole, createAll} from './data.js';
import {example1} from './example-1.js'

const companie = createAll();
const companies = example1(companie);

//cleanConsole(3, companies);

//console.log('---- EXAMPLE 3 --- ', companies);

export const example3 =(companies)=> {
    const result = companies.map(e=> {

        const validatedUser = (e.users).map(p=> {
            if(e.users.firstName !== "" || e.users.lastName !== "" ){
                const validateFirstName = p.firstName.charAt(0).toUpperCase() === p.firstName.charAt(0) ? true : false ;
                const validateLastName = p.lastName.charAt(0).toUpperCase() === p.lastName.charAt(0) ? true : false ;
                
                return validateFirstName && validateLastName ? true : false ;
            }
        })
        if(e.name !== ""){
            const validateCompany=  e.name.charAt(0).toUpperCase() === e.name.charAt(0) ? true : false
            return validateCompany && validatedUser ? true : false
        }
    })
    
    return result
}

//example3(companies)

console.log(example3(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js"
