let array1 = [300, 20, 60, 100, 400, 130, 270, 290, 30, 450, 50];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array3 = [];

console.log(array1);

array1.sort(function(a, b) {
  return a - b
});

console.log(array1);

array1.splice(0, 1);

console.log(array1);

array1.splice(-1, 1);

console.log(`array1 is nu: ${array1}`);

array3 = array2.map((val, index, arr) => {
  return val * 4;
});



console.log(`array1 is nu: ${array3}`);