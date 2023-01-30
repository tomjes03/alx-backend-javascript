// Track within the weakMap the number of times queryAPI is called for each endpoint
// When the number of queries is >= 5 throw an error with the message Endpoint load is high
export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!weakMap.get(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const total = weakMap.get(endpoint);
    weakMap.set(endpoint, total + 1);
    if (weakMap.get(endpoint) >= 5) {
      throw Error('Endpoint load is high');
    }
  }
}
