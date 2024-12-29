"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//*DEPENDENCIAS
const fs_1 = __importDefault(require("fs"));
//*VARIABLES Y CONSTANTES
const base = 1;
const multiplicationLimit = 10;
let outputMessage = '';
let finalOutputMessage = '';
// * Generando header message
const headerMessage = `
==============================
       Tabla del ${base}
==============================
`;
// * Generando output message
for (let i = 1; i <= multiplicationLimit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}
// console.log(headerMessage);
// console.log(outputMessage);
// * Generando final output message
finalOutputMessage = headerMessage + outputMessage;
console.log(finalOutputMessage);
const outputPath = `outputs/folder1/folder2`;
fs_1.default.mkdirSync(outputPath, { recursive: true }); //crea la carpeta si no existe
fs_1.default.writeFileSync(`${outputPath}/tabla del ${base}.txt`, finalOutputMessage, 'utf-8');
console.log('File created successfully!');
