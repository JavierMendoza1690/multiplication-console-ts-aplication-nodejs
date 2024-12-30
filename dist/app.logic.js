"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//*DEPENDENCIAS
const fs_1 = __importDefault(require("fs"));
const args_plugin_1 = require("./config/plugins/args.plugin");
//*VARIABLES Y CONSTANTES
// Extrayendo datos de yars
const { b: baseMultiplication, l: limitMultiplication, s: showTable } = args_plugin_1.yarg;
// inicializando strings
let outputMessage = '';
// * Generando header message
const headerMessage = `
==============================
       Tabla del ${baseMultiplication}
==============================
`;
// * Generando output message
for (let i = 1; i <= limitMultiplication; i++) {
    outputMessage += `${baseMultiplication} x ${i} = ${baseMultiplication * i}\n`;
}
// console.log(headerMessage);
// console.log(outputMessage);
// * Generando final output message
outputMessage = headerMessage + outputMessage;
if (showTable)
    console.log(outputMessage);
const outputPath = `outputs`;
fs_1.default.mkdirSync(outputPath, { recursive: true }); //crea la carpeta si no existe
fs_1.default.writeFileSync(`${outputPath}/tabla del ${baseMultiplication}.txt`, outputMessage, 'utf-8');
console.log('File created successfully!');
