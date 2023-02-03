declare namespace Subjects {
    interface Teacher {
        experienceTeachingC?: number;
    }

    class Cpp extends Subject {
        getRequirements() {
        return ('Here is the list of requirements for Cpp');
    }

        getAvailableTeacher() {
        return ('Available Teacher: {}'.format(firstName));
    }
}
}
