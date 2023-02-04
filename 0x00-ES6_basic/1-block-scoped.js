export default function taskBlock(trueOrFalse) {
  let task;
  let task2;
  if (trueOrFalse) {
    task = true;
    task2 = false;
  }
  task = false;
  task2 = true;
  return [task, task2];
}
