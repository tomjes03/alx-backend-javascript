// function named createEmployeesObject that will receive two arguments
// function should return an object
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
