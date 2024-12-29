import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
.option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
})
.option('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
})
.option('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show the multiplication table in console'
})
.option('n',{
        alias: 'name',
        type: 'string',
        default: 'table',
        describe: 'File name'
})
.option('d',{
        alias:'destination',
        type: 'string',
        default: './outputs',
        describe: 'File destination'
})
.check((argv, options)=>{
        if(argv.b<1) throw ('Error: The base must be greater than 0');
        
        return true;
})
.parseSync();