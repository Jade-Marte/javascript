let add;
let divid;
let multiply;
let subtract;
function calculator(word, int1, int2) {
  if (word == "add") {
    return int1 + int2;
  } else if (word == "divide") {
    return int1 / int2;
  } else if (word == "subtract") {
    return int1 - int2;
  } else if (word == "multiply") {
    return int1 * int2;
  }
}
let answer = calculator("add", 4, 2);
console.log(answer); // 6
answer = calculator("subtract", 4, 2);
console.log(answer); // 2
answer = calculator("divide", 4, 2);
console.log(answer); // 2
answer = calculator("multiply", 4, 2);
console.log(answer); // 8
