let num = 15;
let count = 1;
let result = 0;

while (count <= num) {
  result += count % 10;
  count++;
}

console.log(result);
