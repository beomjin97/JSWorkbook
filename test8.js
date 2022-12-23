const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num = "";

rl.on("line", function (x) {
  num = Number(x);
  rl.close();
}).on("close", function () {
  let arr = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  console.log(arr.length);
  arr.forEach((i) => {
    console.log(i);
  });
  process.exit();
});
