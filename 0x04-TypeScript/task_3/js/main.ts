/// <reference path="./crud.d.ts" />

import { rowID }, { rowElement } from './interface'
import * from './crud' as CRUD

let row: RowElement = {
    firstName: Guillaume,
    lastName: Salva
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
    firstName: Guillaume,
    lastName: Salva,
    age: 23
};

CRUD.updateRow(newRowID, updatedRow)
CRUD.deleteRow(newRowID)
