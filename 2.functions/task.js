function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }

  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return result =  arr.reduce((sum, current) => sum + current, 0);
}


function differenceMaxMinWorker(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return (arr.length === 0) ? 0 : max - min;
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; //четные
  let sumOddElement = 0; //нечетные

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    (arr[i] % 2 === 0) ? sumEvenElement += arr[i] : sumOddElement += arr[i];
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    } 
  }

  return sumEvenElement / countEvenElement;
}


function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let result = [];
  let arr = [];

  for (let i = 0; i < arrOfArr.length; i++) {
    arr = arrOfArr[i];
    result[i] = func(...arr);
  }
  return maxWorkerResult = Math.max(...result);
}
