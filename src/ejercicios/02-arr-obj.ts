let habilidades: string[] =['bash','counter','healing'];

// habilidades.push(true);//no deja por que ts le asigna variable de strings

interface Personaje{//para poder asignarle las variables que debe tener el objeto personaje
    nombre:string;
    hp:number;
    habilidades:string[];
    pueblonatal:string;
}

const personaje:Personaje={
    nombre:'strider',
    hp:100,
    habilidades:['bash','counter','healing'],
    pueblonatal:''
}

personaje.pueblonatal='Pueblo Paleta';
console.table(personaje);