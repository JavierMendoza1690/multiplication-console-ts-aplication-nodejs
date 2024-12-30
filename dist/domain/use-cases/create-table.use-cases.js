"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    constructor() { }
    execute({ baseMultiplication, limitMultiplication = 10 }) {
        let outputMessage = "";
        // * Generando output message
        for (let i = 1; i <= limitMultiplication; i++) {
            outputMessage += `${baseMultiplication} x ${i} = ${baseMultiplication * i}`;
            if (i < limitMultiplication)
                outputMessage += '\n';
        }
        return outputMessage;
    }
}
exports.CreateTable = CreateTable;
