const { argv } = require('node:process');
const totalArgs = argv.length;
if (totalArgs === 2) {
  console.log("No argument");
} else if (totalArgs === 3) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}