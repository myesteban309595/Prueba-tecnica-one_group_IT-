import {cleanConsole, createAll} from './data.js';
const companies = createAll();

//cleanConsole(2, companies);
//console.log('---- EXAMPLE 2 --- ', companies);

const hasCar= true ;

export const example2 = (companies, hasCar)=> {
   const companiesResult = companies.map((e, index)=> {
     const user = e.users.filter(u => {
            return u.car === hasCar
        });
        return {
            name:e.name, 
            isOpen:e.isOpen, 
            users:user, 
            usersLength:user.length
          }
    })
    console.log(companiesResult[3].users);
    return companiesResult ;
}
  
example2(companies, hasCar);
//console.log(example2(companies, hasCar));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y el
// booleano "hasCar". Para cada "company" debe conservar solo
// "users" cuyo valor de atributo "car" es igual al parámetro del
// función "hasCar" y el atributo "usersLength" deben indicar el total de
// "users" correspondientes al parámetro "hasCar".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the variable "companies" and the
// boolean "hasCar". For each "company" you must keep only the
// "users" whose attribute value "car" is equal to the parameter of the
// "hasCar" function and the "usersLength" attribute must indicate the number of
// "users" corresponding to the "hasCar" parameter
