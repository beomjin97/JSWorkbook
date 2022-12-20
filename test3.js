const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];

rl.on("line", function (x) {
  data = [...data, x];
  if (data.length === data[0]) {
    rl.close();
  }
}).on("close", function () {
  const [num, ...fileNames] = data;
  fileNames.forEach((fileName) => {
    let AllLowerArr = fileName.split("").map((char) => char.toLowerCase());
    AllLowerArr[0] = AllLowerArr[0].toUpperCase();
    console.log(AllLowerArr.join(""));
  });

  process.exit();
});
