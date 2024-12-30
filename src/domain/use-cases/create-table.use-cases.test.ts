import { CreateTable } from "./create-table.use-cases";

describe('./create-table.use-cases', () => { 

    test('should create table with default values',()=>{
        const createTable = new CreateTable();

        const table = createTable.execute({baseMultiplication:2})
        const numberRows = table.split('\n').length;     
        

        expect( createTable ).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 x 1 = 2')
        expect(table).toContain('2 x 10 = 20')
        expect(numberRows).toBe(10);
    });

    test('should create table with custom values', ()=>{
        const options = {
            baseMultiplication:3,
            limitMultiplication: 20
        }

        const createTable = new CreateTable();
        const table = createTable.execute(options);
        const numberRows = table.split('\n').length;

        expect(table).toContain('3 x 1 = 3');
        expect(table).toContain('3 x 10 = 30');
        expect(table).toContain('3 x 20 = 60');
        expect(numberRows).toBe(options.limitMultiplication);

        
        

    })

 })