let leapYears = (year) => {
  year % 1;
  if (year === 0) {
    return year + " Is a Leap Year";
  } else {
    return year + " Is NOT a Leap Year";
  }
}

console.log(leapYears(1985))
