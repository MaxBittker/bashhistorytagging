const fs = require('fs')
const tag = process.argv[2]
const lines = process.argv.slice(3)

const csv = `${tag}, ${lines.join(",")}\n`

fs.appendFile('./out.csv', csv, (err) => {
  if (err) throw err;
  console.log(`${tag} ~> ${process.argv[process.argv.length-1]}`);
});
