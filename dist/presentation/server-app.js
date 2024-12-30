"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const create_table_use_cases_1 = require("../domain/use-cases/create-table.use-cases");
const save_file_use_cases_1 = require("./save-file-use-cases");
class ServerApp {
    static run({ baseMultiplication, limitMultiplication, showTable, fileName, fileDestination }) {
        console.log("Server Running");
        // *CREANDO TABLA POR MODULO
        const table = new create_table_use_cases_1.CreateTable().execute({
            baseMultiplication,
            limitMultiplication,
        });
        //*GUARDANDO EL ARCHIVO
        const wasCreated = new save_file_use_cases_1.SaveFile().execute({ fileContent: table, fileName, fileDestination });
        // *MOSTRANDO TABLA SI SE ENVIA EL ARGUMENTO -S
        if (showTable) {
            console.log();
            console.log(table);
        }
        //* VERIFICANDO SI LA TABLA FUE CREADA
        (wasCreated)
            ? console.log('File created')
            : console.log('File not created');
    }
}
exports.ServerApp = ServerApp;
