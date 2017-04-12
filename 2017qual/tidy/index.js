var gcj = require('google-code-jam-io');

let lc = 0;
let tc = 0;
let size = 0;
let input = [];

let tidychecker = (x) => {
  if (typeof(x)!=='string'){
    x = x+'';
  }
  for (let i = 0;i< x.length - 1;i++){
    if (parseInt(x[i])>parseInt(x[i+1])){
      return false;
    }
  }
  return true;
}

let testcase = (x) =>{
  console.log(x, tidychecker(x));
}

let neartidy = (x) => {
  if (typeof(x)!=='string'){
    x = x+'';
  }
  for (let i = x.length-1;i>=0;i--){
    if (tidychecker(x)){
      return x;
    }
    x = x.substring(0, i) + '9' + x.substring(i+1);
    let iMinus1Candidate = parseInt(x[i-1])-1;
    x = x.substring(0, i-1) + ((iMinus1Candidate<0)?0:iMinus1Candidate) + x.substring(i);
  }
}

console.log(neartidy("1234"));
console.log(neartidy(4321));
console.log(neartidy(000001));
console.log(neartidy(000000));
console.log(neartidy(100000));

gcj.readFileAsyncByLine(function(line) {
  if (lc == 0){
    size = parseInt(line);
  }else{
    tc++;
    gcj.appendToFile('Case #'+tc+': '+neartidy(line).replace(/^0+/,''));
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
