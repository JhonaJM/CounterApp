import { getHeroeById } from "./Bases/08-importaciones-exportanciones";
import { heroes } from "./Data/Heroes";

/* const promesa= new Promise((resolve,reject)=>{
    setTimeout(() => {
        //console.log("dos segundos");
        //resolve();
     const heroe= getHeroeById(1);
    // resolve(heroe);
    //reject("Error")

    }, 2000);
});

promesa.then((heroe)=>{
    console.log("heroe",heroe);
}).catch(ex=> console.warn(ex)) */

const GetHeroeByIdAsync = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
         const heroe= getHeroeById(id);  

         if(!heroe)
            reject("no se pudo encontrar el heroe")
         else
         resolve(heroe)  ;
        }, 2000);
    });
   // return promesa;
    
}

GetHeroeByIdAsync(1)
.then(heroe=>console.log(heroe))
.catch(err=>console.log(err));
//otra manera
/* .then(console.log)
.catch(console.warn); */
