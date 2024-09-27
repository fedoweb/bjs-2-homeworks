"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let descriminant = b ** 2 - 4 * a * c;

  if (descriminant === 0) {
    arr = [(-b / (2 * a))];
  } else if (descriminant > 0) {
    arr = [(-b + Math.sqrt(descriminant)) / (2*a), (-b - Math.sqrt(descriminant)) / (2*a)];
  }
  return arr;
}




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentMonths = (percent / 100) / 12;
  const creditBody = amount - contribution;
  const payMonths = creditBody * (percentMonths + (percentMonths / (((1 + percentMonths) ** countMonths) - 1)));
  return Number((payMonths * countMonths).toFixed(2));
}

