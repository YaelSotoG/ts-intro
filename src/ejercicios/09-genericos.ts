//genericos 

function queTipoSoy<T>(argumento:T){//se le agrega t para indicar que la variable va a ser generica y puede variar 
    return argumento;
}

let soyString=queTipoSoy('hola mundo');//aqui asigna a la variable argumento con string pero
let soyNumber=queTipoSoy(12)//aqui tiene un error
let soyArreglo=   queTipoSoy([1,2,3,4]);

let soyExplicito= queTipoSoy<number>(123);//tambien se puede regresar y especificar que generico ocupo 