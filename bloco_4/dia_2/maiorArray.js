let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numeroOrganizado = numbers.sort(function(a, b) {
  return a - b;
});
console.log(numeroOrganizado[numbers.length-1]);
 