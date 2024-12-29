import { ServerApp } from "./presentation/server-app";
import { yarg } from "./config/plugins/args.plugin";



// console.log(process.argv);

// console.log(yarg.b);


// * Funcion asincrona con autoinvocacion
(async()=>{
    await main();
    
})();

async function main(){

    const {b:baseMultiplication, l:limitMultiplication, s:showTable, n:fileName, d:fileDestination} = yarg; 

    // *Ejecuta las funciones necesarias para calcular y crear tabla
    ServerApp.run({baseMultiplication, limitMultiplication,showTable, fileName, fileDestination});

}
