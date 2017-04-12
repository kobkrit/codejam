var gcj = require('google-code-jam-io');

gcj.readFileAsyncByLine(function(line) {
  console.log(line);
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
