// a function updateStudentGradeByCity that returns an array of students
// for a specific city with their new grade
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (typeof students !== 'object' || students instanceof Array === false) {
    return [];
  }
  const studentsByLocation = students.filter((student) => student.location === city);
  const studentsUpdatedGrades = studentsByLocation.map((student) => {
    const gradesObj = newGrades.find((item) => item.studentId === student.id);
    /* eslint-disable no-param-reassign */
    if (gradesObj) {
      student.grade = gradesObj.grade;
    } else {
      student.grade = 'N/A';
    }
    /* eslint-enable no-param-reassign */
    return student;
  });
  return studentsUpdatedGrades;
}
