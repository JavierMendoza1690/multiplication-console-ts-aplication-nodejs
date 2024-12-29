//*DEPENDENCIAS
import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";



//*VARIABLES Y CONSTANTES

// Extrayendo datos de yars
const {b:baseMultiplication, l:limitMultiplication, s:showTable} = yarg;
// inicializando strings
let outputMessage = '';



// * Generando header message
const headerMessage =`
==============================
       Tabla del ${baseMultiplication}
==============================
`

// * Generando output message
for (let i = 1; i <= limitMultiplication; i++) {
    outputMessage += `${baseMultiplication} x ${i} = ${baseMultiplication * i}\n`
}

// console.log(headerMessage);
// console.log(outputMessage);

// * Generando final output message
outputMessage = headerMessage + outputMessage
if(showTable)
console.log(outputMessage);

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true }); //crea la carpeta si no existe
fs.writeFileSync(`${outputPath}/tabla del ${baseMultiplication}.txt`, outputMessage, 'utf-8');
console.log('File created successfully!');



