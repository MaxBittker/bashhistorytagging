const csv = require('csv')
const fs = require('fs')
const term = process.argv[2]
let snippets = new Object(null)

let stream = fs.createReadStream('out.csv');
let parser = csv.parse();

stream.on('readable', function(){
  while(data = stream.read()){
    parser.write(data);
  }
});

stream.on('end', () => {
  parser.end('');
});

parser.on('readable', function(){
  while(data = parser.read()){
    data.slice(1).forEach(snippet => {
      if (snippets[data[0]] === undefined)
        snippets[data[0]] = []
      snippets[data[0]].push(snippet)
    })
  }
});

parser.on('end', () => {
  for (var prop in snippets) {
  console.log(prop + ' :\n\t' + snippets[prop].join('\n\t') + '\n');
}
});
