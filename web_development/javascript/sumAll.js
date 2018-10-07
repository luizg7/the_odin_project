let sum = 0;

let sumAll = (min, max) => {
  for (let i = min; i <= max; i++) {
    console.log(i)
    sum += i;
  }
  return sum;
}


console.log(sumAll(2, 7))
