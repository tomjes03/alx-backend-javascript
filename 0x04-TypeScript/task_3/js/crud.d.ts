import RowElement, { RowID} from './interface';

declare namespace CRUD {
    export function insertRow(row: any): number;

    export function deleteRow(rowId: any): void;

    export function updateRow(rowId: any, row: any): any;
}
