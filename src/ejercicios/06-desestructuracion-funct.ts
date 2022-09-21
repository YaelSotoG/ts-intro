export interface Producto{
    desc:string;
    precio: number;
}
const telefono: Producto={
    desc:'nokia a1',
    precio:150
}

const tableta:Producto={
    desc:'ipad 1',
    precio:350,
}

export function calculaISV(productos:Producto[]):[number,number]{
    let total=0;
    // productos.forEach((producto:Producto)=>{
    //     total*producto.precio;
    // });
    productos.forEach(({precio})=>{//mismo codigo que arriba pero con la desestructuracion
        total*precio;
    });
    return [total, total*0.15];
}


const articulos= [telefono,tableta]; 
const [total,isv]=calculaISV(articulos);
console.log('total:' , total );
console.log('ISV:' , isv );