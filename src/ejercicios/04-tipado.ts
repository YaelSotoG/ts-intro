

interface superHeroe{
    nombre:string;
    edad:number;
    // direccion:{calle:string;pais:string;ciudad:string;};//este es una forma 
    direccion:Direccion;//tambien se pueden anidar asi
    mostrarDireccion:()=>string;
}

interface Direccion{
    calle:string;
    pais:string;
    ciudad:string;
}


const superHeroe={
    nombre:'spiderman',
    edad:30,
    direccion:{
        calle:'main st',
        pais:'usa',
        ciudad:'ny'
    },
    mostrarDireccion(){
        return this.nombre + ',' + this.direccion.ciudad + ','+this.direccion.pais
    }
}


const direccion=superHeroe.mostrarDireccion();

console.log(direccion);