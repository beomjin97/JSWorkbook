const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];

rl.on("line", function (x) {
  data = x.split("-").map((i) => +i);
  rl.close();
}).on("close", function () {
  const [year, month, day] = data;
  const day31 = [1, 3, 5, 7, 8, 10, 12];
  const day30 = [4, 6, 9, 11];

  const leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const correctDate = () => {
    if (year > 2099 || year < 2000) return 0;
    if (day31.includes(month) && day <= 31 && day > 0) {
      return 1;
    }
    if (day30.includes(month) && day <= 30 && day > 0) {
      return 1;
    }

    if (month === 2 && leapYear && day <= 29 && day > 0) {
      return 1;
    }
    if (month === 2 && !leapYear && day <= 28 && day > 0) {
      return 1;
    }
    return 0;
  };
  console.log(correctDate());
  process.exit();
});
