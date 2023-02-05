export default function appendToEachArrayValue(array, appendString) {
  // for (var idx in array) {
  //   var value = array[idx];
  //   array[idx] = appendString + value;
  // }
  const newArray = [];
  for (const idx of array) {
    newArray.push(`${appendString}${idx}`);
  }

  return newArray;
}
