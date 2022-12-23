const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];

rl.on("line", function (x) {
  data = [...data, x];
  if (data.length === Number(data[0]) + 1) {
    rl.close();
  }
}).on("close", function () {
  const [_, ...rest] = data;
  rest.forEach((line) => {
    const reveseLine = line
      .split(" ")
      .map((num) => Number(num.split("").reverse().join("")));
    const sum = reveseLine[0] + reveseLine[1];
    console.log(String(sum).split("").reverse().join(""));
  });
  process.exit();
});
