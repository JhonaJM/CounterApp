import { heroes } from "../Data/Heroes";

//mio 
export const getHeroeById=(id)=>{
    return heroes.find((x)=> x.id===id)
}

//como lo hizo el profe
const getHeroeByIdByProfe=(id)=>{
   return  heroes.find((heroe)=>{
        if(heroe.id===id){
           return true;
        }else{
            return  false;
        }
    })
}


//console.log(getHeroeById(3));
//console.log(getHeroeByIdByProfe(5));
//al final lo jizo como yo xd
//el find sirve para 1
//cuando busquemos mas de 1 usemos el filter

const getHeroeByOwner=(owner)=>{
    return heroes.filter((x)=> x.owner===owner)
}
//console.log(getHeroeByOwner('asd'));

