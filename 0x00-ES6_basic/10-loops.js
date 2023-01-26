// function appendToEachArrayValue to use ES6’s for...of operator.
// And don’t forget that var is not ES6-friendly.
export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const value of array) {
    array2.push(appendString + value);
  };
  
  return array2;
}
