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
  const [num, ...people] = data;
  people.forEach((person) => {
    for (let i = 1; i < person.length; i++) {
      if (person.charCodeAt(i) < 91) {
        console.log(person.slice(i));
      }
    }
  });
  process.exit();
});
