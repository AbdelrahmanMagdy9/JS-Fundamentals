const { argv } = require('node:process');
const input = argv[2];
if (input === undefined) {
  console.log("No argument");
} else {
  const firstArg = input.split(/\s/)[0];
  console.log(firstArg);
}
