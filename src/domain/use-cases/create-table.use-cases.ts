export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  baseMultiplication: number;
  limitMultiplication?: number;
}

export class CreateTable implements CreateTableUseCase {
 
 
    constructor
     /*
    *DI - Dependency
    */() {}

  execute({baseMultiplication, limitMultiplication = 10}: CreateTableOptions) {

    let outputMessage = "";
    
    // * Generando output message
    for (let i = 1; i <= limitMultiplication; i++) {
      outputMessage += `${baseMultiplication} x ${i} = ${
        baseMultiplication * i}`;

        if( i<limitMultiplication) outputMessage+='\n'
    }

    return outputMessage;
  }
}
