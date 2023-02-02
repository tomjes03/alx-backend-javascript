interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Joe',
    lastName: 'Max',
    age: 27,
    location: 'Manchester'
};

const student2: Student = {
    firstName: 'Seun',
    lastName: 'Strong',
    age: 27,
    location: 'Malta'
};

const studentsList = [student1, student2];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(studentsList[0]);
generateTable(table, studentsList);
generateTableHead(table, data);
