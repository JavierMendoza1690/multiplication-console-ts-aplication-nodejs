import { CreateTable } from "../domain/use-cases/create-table.use-cases";
import { SaveFile } from "./save-file-use-cases";

interface RunOptions {
  baseMultiplication: number;
  limitMultiplication: number;
  showTable: boolean;
  fileName: string,
  fileDestination: string
}

export class ServerApp {


  static run({ baseMultiplication, limitMultiplication, showTable, fileName, fileDestination}: RunOptions) {
    console.log("Server Running");
    
    // *CREANDO TABLA POR MODULO
    const table = new CreateTable().execute({
      baseMultiplication,
      limitMultiplication,
    });

    //*GUARDANDO EL ARCHIVO
    const wasCreated = new SaveFile().execute({fileContent: table, fileName, fileDestination})


    // *MOSTRANDO TABLA SI SE ENVIA EL ARGUMENTO -S
    if (showTable){
        console.log();
        
        console.log(table);}

    //* VERIFICANDO SI LA TABLA FUE CREADA

    (wasCreated)
    ? console.log('File created')
    :console.log('File not created');
    
  }
}
