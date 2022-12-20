const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];

rl.on("line", function (x) {
  data = [...data, x];
  if (data.length === 2) {
    rl.close();
  }
}).on("close", function () {
  str = data[1];
  const upper = str.match(/[A-Z]/g) ? str.match(/[A-Z]/g).length : 0;
  const lower = str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0;
  const number = str.match(/[0-9]/g) ? str.match(/[0-9]/g).length : 0;
  console.log(upper, lower, number);
  process.exit();
});
