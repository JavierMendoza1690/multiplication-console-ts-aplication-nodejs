"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_app_1 = require("./presentation/server-app");
const args_plugin_1 = require("./config/plugins/args.plugin");
// console.log(process.argv);
// console.log(yarg.b);
// * Funcion asincrona con autoinvocacion
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield main();
}))();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const { b: baseMultiplication, l: limitMultiplication, s: showTable, n: fileName, d: fileDestination } = args_plugin_1.yarg;
        // *Ejecuta las funciones necesarias para calcular y crear tabla
        server_app_1.ServerApp.run({ baseMultiplication, limitMultiplication, showTable, fileName, fileDestination });
    });
}
