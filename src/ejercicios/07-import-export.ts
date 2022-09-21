import { calculaISV, Producto } from "./06-desestructuracion-funct";//para las importaciones




const carritoCompras: Producto[]=[
    {
        desc:'telefono 1',
        precio:100,
    },
    {
        desc:'telefono 2',
        precio:150,
    }
];

const [total, isv]=calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV: ', isv);