var gcj = require('google-code-jam-io');

let lc = 0;
let tc = 0;
let size = 0;
let input = [];

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

let flip = (str, index, size) => {
  for (let i=0;i<size;i++){
    if (str[index+i]=='-'){
      str = str.replaceAt(index+i, '+');
    }else{
      str = str.replaceAt(index+i, '-');
    }
  }
  return str;
}

let countFlip = (cake, size) => {
  let flipCount = 0;
  console.log(cake);
  while (cake.indexOf('-')>-1 && cake.indexOf('-') <= cake.length - size){
    flipCount++;
    cake = flip(cake, cake.indexOf('-'), size);
    console.log(cake);
  }
  console.log("Final", cake, cake.indexOf('-'));
  if (cake.indexOf('-')>=0){
    return "IMPOSSIBLE";
  }else{
    return flipCount;
  }
}

gcj.readFileAsyncByLine(function(line) {
  if (lc == 0){
    size = parseInt(line);
    gcj.writeToFile('');
  }else{
    tc++;
    let splitLine = line.split(" ");
    let pancake = splitLine[0];
    let fliperSize = parseInt(splitLine[1]);
    gcj.appendToFile('Case #'+tc+': '+countFlip(pancake, fliperSize));
  }
  lc++;
});

// Get the entire file contents as a string
// var entire_file_as_string = gcj.readFileSync();
//
// // Write a string to the output file
// gcj.writeToFile('This will go in the output file!');
//
// // Delete the output file if it exists (useful if you want to clear
// // the file before appending)
// gcj.deleteOutputFile();
//
// // Append a string to the output file
// gcj.appendToFile('This will be appended to the output file!');
