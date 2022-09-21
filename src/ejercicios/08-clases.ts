
//se pueden extender las clases

class PersonaNormal{//para extender una clase se hace el extend como en python
    constructor(
        public nombre:string,
        public direccion:string
    ){}
}

class Heroe extends PersonaNormal{//la diferencia entre clase e interfas es que puedes crear instancias con las clases
    // private alterEgo:string;
    // public edad:number;
    //  nombreReal:number;

    // imprimirNombre(){//en las clases si podemos agregar funciones mas elaboradas en las interfaces no
    //     return this.alterEgo + '  '+ this.nombreReal;
    // }
    constructor(public alterego: string,
        public edad:number,
        public nombreReal:string
        ){//asi se definen los constructores
        super(nombreReal,'New york');//se tiene que agregar el super para extender 
    }
}
// interface Personaje2{
//     alterEgo?:string,
//     edad?:number,
//     nombreReal?:number;
// }


const ironman= new Heroe('ironman',12,'tony');
// const spiderman:Personaje2={};
console.log(ironman);