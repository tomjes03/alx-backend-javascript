// Task 5
interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome() {
    return ('Working from home');
    }

    getCoffeeBreak() {
    return ('Getting a coffee break');
    }

    workDirectorTasks() {
    return ('Getting to director tasks');
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
    return ('Cannot work from home');
    }
    
    getCoffeeBreak() {
    return ('Cannot have a break');
    }
    
    workTeacherTasks() {
    return ('Getting to work');
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    return(typeof salary === 'number' && salary < 500 ? new Teacher() : new Director());
}

// Task 6
function isDirector(employee: Director | Teacher): boolean {
    return (employee instanceof Director ? true : false);
}

function executeWork(employee: Director | Teacher): void {
    console.log(employee instanceof Director ? employee.workDirectorTasks() : employee.workTeacherTasks());
}

// Task 7
type Subjects = 'History' | 'Math';

function teachClass(todayClass: Subjects): string {
    return(todayClass === 'Math' ? 'Teaching Math' : 'Teaching History');
}
