"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFile = void 0;
const fs_1 = __importDefault(require("fs"));
class SaveFile {
    constructor(
    /* repository: StorageRepository */
    ) { }
    execute({ fileContent, fileDestination = 'outputs', fileName = 'table' }) {
        try {
            fs_1.default.mkdirSync(fileDestination, { recursive: true }); //crea la carpeta si no existe
            fs_1.default.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent, 'utf-8');
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
}
exports.SaveFile = SaveFile;
