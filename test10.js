const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num = 0;

rl.on("line", function (x) {
  num = Number(x);
  rl.close();
}).on("close", function () {
  function makeArray(n) {
    if (n === 1) {
      return ["*"];
    }

    let arr = new Array(4 * n - 3);

    arr[0] = "*".repeat(4 * n - 3);
    arr[1] = "*" + " ".repeat(4 * n - 5) + "*";
    arr[arr.length - 1] = "*".repeat(4 * n - 3);
    arr[arr.length - 2] = "*" + " ".repeat(4 * n - 5) + "*";

    const prev = makeArray(n - 1);
    for (let i = 2; i < arr.length - 2; i++) {
      arr[i] = "* " + prev[i - 2] + " *";
    }

    return arr;
  }

  makeArray(num).forEach((i) => console.log(i));
  process.exit();
});
