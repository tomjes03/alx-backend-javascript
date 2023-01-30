const getStudentsByLocation = (students, city) => {
  const filterLoc = students.filter((funtion) => funtion.location === city);
  return filterLoc;
};

export default getStudentsByLocation;
