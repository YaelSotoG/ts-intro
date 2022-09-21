

interface Pasajero{
    nombre:string;
    hijos?:string[];
    
}

const pasajero1:Pasajero={
    nombre:'yael'
}

const pasajero2:Pasajero={
    nombre:'paty',
    hijos:['ana','georgete']
}

function imprimeHijos (pasajero:Pasajero):void{
    const cuantosHijos=pasajero2.hijos?.length || 0;//al poner ? aqui hace que intente evaluar si no hay nada solo manda un undifined
    //si no lo tiene rompe
    //tambien se le puede llamar secure operator

    console.log(cuantosHijos);
}