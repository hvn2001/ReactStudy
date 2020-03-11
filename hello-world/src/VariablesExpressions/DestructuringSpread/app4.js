a = [1, 2, 3];
b = [4, 5, 6];
// c = a.concat(b);
c = [...a, ...b]; //spread operator
console.log("c: " + c);