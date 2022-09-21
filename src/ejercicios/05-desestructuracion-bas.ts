interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}


interface Detalles{
    autor:string;
    anio:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:'mes',
    detalles:{
        autor:"ray bradbury",
        anio:2015,
    },
}

const{ volumen , segundo, cancion, detalles } = reproductor;//toma el objeto reproductor y me interesan las propiedades que voy a tomar aqui adentro
const { autor } = detalles;

// console.log( 'el volumen actual de:' , volumen );
// console.log( 'el segundo actual de:' , segundo );
// console.log( 'La cancion actuall de:' , cancion);
// console.log( 'el autor es:' , autor);

const dbz:string[]=['goku', 'vegueta','trunks'];

// const [p1,p2,p3]=dbz;//asigna a los nombres en la lista se llama desestructuracion
const [ , ,p3]=dbz;//asi da solo el nombre de trunks
// console.log('personaje 1', p1);

// console.log('personaje 2',p2);
console.log('personaje 3', p3);