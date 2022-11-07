import {cleanConsole, createAll} from './data.js';

const companies = createAll();

//cleanConsole(7, companies);
// console.log('---- EXAMPLE 7 part 1 --- ', companies);
// console.log('---- EXAMPLE 7 part 2 --- ', companies);
// console.log('---- EXAMPLE 7 part 3 --- ', companies);
// console.log('---- EXAMPLE 7 part 4 --- ', companies);
// console.log('---- EXAMPLE 7 part 5 --- ', companies);
// console.log('---- EXAMPLE 7 part 6 --- ', companies);
// console.log('---- EXAMPLE 7 part 7 --- ', companies);
// console.log('---- EXAMPLE 7 part 8 --- ', companies);
// console.log('---- EXAMPLE 7 part 9 --- ', companies);
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

//^ Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".
//********************************************************************************************************* */

import {createRandomNumber} from './data.js'
// let company_id = createRandomNumber(0,7)

//  const parte1 = (companies, company_id)=> {
//     let result = companies.filter((e) => {
//          if(e.id === company_id) return e.name
//     });
//     return result[0].name
//  } 
//  console.log( parte1(companies, company_id));

//********************************************************************************************************* */

//^ Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.
//********************************************************************************************************* */

// let id2 = createRandomNumber(0,7)

//  const parte2 = (companies, company_id)=> {
//      companies.filter((e,index) => {
//          if(e.id === company_id){
//             companies.splice(index,1)
//         }
//     });
//     return companies
//  } 
//  console.log( parte2(companies, company_id));

//********************************************************************************************************* */
 
//! Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

//  const company_id = createRandomNumber(0,7);

// const parte3 =(companies, company_id)=> {
//     const company = companies[company_id];

//     company.name = "Panamericana";
//     company.isOpen = true;
//     company.usersLength= (company.users).length;

//     console.log(company.users); // verificar modificacion en usuario
//     return companies;
// }
// //parte3(companies, company_id);
// console.log(parte3(companies, company_id));

//^ Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".
//********************************************************************************************************* */

// const user = {
//     fisrtName: "Juan",
//     lastName: "Delgado",
//     age: 35,
//     car: "true",
//     id: null
// }

// let company_id = createRandomNumber(0,7)
// let company_id

// const parte4 =(companies, company_id=0, user)=> {
//     // agrego el usuario nuevo
//     (companies[company_id].users).push(user); 
//     // modificar el userLennth del company
//     companies[company_id].usersLength = (companies[company_id].users).length
//     // asignacion del id
//     const indice = (companies[company_id].usersLength)-1
//     console.log("indice:", indice);
//     (companies[company_id].users[indice]).id = indice; 
    
//     //console.log(companies[company_id].users); // visualizo que se agrega el usuario
//     return companies
// }

// //console.log(parte4(companies, company_id=0, user));
// //parte4(companies, company_id=0, user);
//********************************************************************************************************* */

//^ Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".
//********************************************************************************************************* */

//  const company_id = createRandomNumber(0,7);

// const parte5 =(companies, company_id)=> {
//     const company = companies[company_id];

//     company.name = "MERCA-TODO";
//     company.users = company.users
//     company.isOpen = false;
//     company.usersLength= (company.users).length;

//     console.log(company.users); // verificar modificacion en usuario
//     return companies;
// }
// console.log(parte5(companies, company_id));
//********************************************************************************************************* */

//^ Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".
//********************************************************************************************************* */

// let company_id = createRandomNumber(0,7)
// let user_id = 1

// const parte6 = (companies, company_id, user_id)=> {
//     const company = companies[company_id];
//     (company.users).map((e, index)=> {
//         if(e.id === user_id){
//             (companies[company_id].users).splice(index,1) // elimino el usuario
//         }
//     })
//     //console.log(company.users); // compruebo que se elimina el usuario
//     return companies;
// }
// //parte6(companies, company_id, user_id)
// console.log(parte6(companies, company_id, user_id));

//********************************************************************************************************* */

//^ Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".
//*********************************************************************************************************

// let company_id = 1;
// let user_id = 0; 

// const parte7 = (companies, company_id, user_id)=> {
//     const company = companies[company_id];

//     company.users.map((e,index) => {
//         if(e.id === user_id){
//             let patch = company.users[index];
//             patch.firstName = "nombre de prueba"
//             patch.lastName = "apellido de prueba"
//         }
//     })
//     //console.log(company.users);  // para verificar que se modifican las propiedades
//     return companies
// }
// console.log(parte7(companies, company_id, user_id));
// //parte7(companies, company_id, user_id)

//*********************************************************************************************************

//^ Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".
//********************************************************************************************************* */
// // let id8 = createRandomNumber(0,7)
// // let id_user = createRandomNumber(0,10)

// let id8
// let id_user

//  const parte8 = (companies, id8=2, id_user=2)=> {

//     let result = companies.map( e => {

//         const {name,isOpen, usersLength, id} = e;
//         var users = (e.users).map((p)=> {
//             if(e.id === id8){
//               return p.id === id_user 
//                 ? {...p, firstName:"marlon yoel", lastName:"esteban", age:26, car:false}
//                 : p ;
//              }else if(e.id !== id8){
//                 return p ;
//              }
//             });
//           return ({name, users, isOpen, usersLength, id})
//     });
//        //console.log(result[id8]);  // para verificar el usuario modificado en la company
//        return result
//  } 
//  //parte8(companies, id8=2, id_user=2)
//  console.log( parte8(companies, id8=0, id_user=2));
//********************************************************************************************************* */

//^ Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.
//********************************************************************************************************* */
// let company1_id
// let company2_id
// let user_id

// const parte9 = (companies, company1_id=2, company2_id=1, user_id=0)=> {

//     const result = companies.map(e=>{
//         (e.users).filter((p,index)=> {
//          if(e.id === company1_id){
//              if(p.id === user_id){  
//                 let removedUser = companies[company1_id].users[index] ; // capturo el usuario
//                 (companies[company1_id].users).splice(index,1); // elimino el usuario
//                 (companies[company2_id].users).push(removedUser); // muevo el usuario
//             }
//         } 
//     });
//      companies[company1_id].usersLength = (companies[company1_id].users).length // actualizo usersLengt eliminado 
//      companies[company2_id].usersLength = (companies[company2_id].users).length // actualizo usersLengt 
//      // actualizo el id del usuario agregado 
//      let indiceUser = companies[company2_id].usersLength ;
//      (companies[company2_id].users[indiceUser-1]).id=(companies[company2_id].users).length-1 

//     //   console.log("despues company1=>", companies[company1_id].users);
//     //   console.log("despues company2=>", companies[company2_id].users);

//     });
//     //console.log(companies);
//     return companies
// }
// //parte9(companies, company1_id=0, company2_id=1, user_id=0);
// console.log(parte9(companies, company1_id=0, company2_id=1, user_id=0));

//********************************************************************************************************* */
// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated
