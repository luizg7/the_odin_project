let a = ['First Element', 'Second Element', 'Third Element']

let removeFromArray = (arr, index) => {
   delete arr[index];
}

removeFromArray(a, 1);

console.log(a)
