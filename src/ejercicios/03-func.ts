

function sumar(a:number,b:number){
    return a+b;
}

const sumarflecha=(a:number,b:number):number=>{return a+b;}//funcion de flecha

function multiplicar(numero:number,otronumero?:number,base:number=2):number{//siempre se debe de enviar los obligatorios y luego los opcionales
    return numero*base;
}

interface PersonajeLOR{
    nombre:string;
    pv:number;
    mostrarHp:()=>void;//aqui se puede declarar una funcion
    
}

function curar(personaje:PersonajeLOR,curarx:number):void{//void es para no regresar nada
    personaje.pv+=curarx;
    console.log(personaje);
}
const nuevoPersonaje:PersonajeLOR={//const se usa para que no cambie la variable y ocupe menos memoria
    nombre:'strider',
    pv:20,
    mostrarHp(){
        console.log('Puntos de vida: ',this.pv);
    }
}
curar(nuevoPersonaje,20 );
const resultado=sumar(2,3);
const resultadomult=multiplicar(10,20);
nuevoPersonaje.mostrarHp();

console.log(resultado);
console.log(resultadomult);