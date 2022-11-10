import {cleanConsole, createAll} from './data.js';
const companies = createAll();

//console.log('---- EXAMPLE 4 --- ', companies);

export const example4 =(companies)=> {
    
     let newCompanies = [];

     const value = companies.map((e)=> { 
        const company = e.name;
        //extraemos usuario y añadimos nuevo atributo company
        let noSortedUsers = (e.users).map(p=> {
            newCompanies.push({...p, company})
        })
      });
     // nuevo array de objetos ordenado por edad descendiente
     const sortedUserCompanies = newCompanies.sort((a,b)=> {
        if(a.age > b.age){
            return -1
        }else if(a.age < b.age){
            return 1
        }else{
            return 0
        }
    })  
    console.table(sortedUserCompanies);
    //cleanConsole(4, sortedUserCompanies);
    return sortedUserCompanies
} 
example4(companies);
//console.log(example4(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest)
