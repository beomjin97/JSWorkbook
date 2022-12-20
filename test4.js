const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];

rl.on("line", function (x) {
  data = [...data, x];
  if (data.length === 3) {
    rl.close();
  }
}).on("close", function () {
  const [num, A, B] = data;
  console.log(B.includes(A) ? 1 : 0);
  process.exit();
});
