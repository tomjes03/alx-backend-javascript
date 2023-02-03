interface Teacher extends Record<string, any> {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    printTeacher(firstName: string, lastName: string): string;
}

function printTeacher: printTeacherFunction(firstName, lastName) {
    const fullName = firstName[0] + '. ' + lastName;
    return fullName;
}

interface studentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements studentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return ('Currently working');
    }

    displayName() {
        return (this.firstName);
    }
}
