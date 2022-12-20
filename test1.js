const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let Count = 0;

rl.on("line", function (x) {
  arr = [...arr, x];
  if (arr.length === 3) {
    rl.close();
  }
}).on("close", function () {
  arr[1].split(" ").forEach((num) => {
    if (num == arr[2]) {
      Count++;
    }
  });
  console.log(Count);
  process.exit();
});
