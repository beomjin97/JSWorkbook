const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = "";

rl.on("line", function (x) {
  data = x;
  rl.close();
}).on("close", function () {
  const [num, notation] = data.split(" ");
  console.log(Number(num).toString(Number(notation)));
  process.exit();
});
