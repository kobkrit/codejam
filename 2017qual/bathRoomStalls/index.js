var gcj = require('google-code-jam-io');

let lc = 0;
let tc = 0;
let size = 0;
let input = [];

let compute = (n,k) =>{
  let nums = [];
  // console.log('n =',n,' k =',k);
  nums.push(n);
  // console.log(nums)
  let r = -1;
  let oldR = r;
  for (let i=0;i<k;i++){
    //Find Max position
    let max = -1;
    let maxPos = -1;
    for (let l=0,length=nums.length;l<length;l++){
      if (max < nums[l]){
        max = nums[l];
        maxPos = l;
      }
    }

    r = nums[maxPos];
    if (oldR != r){
      console.log('n=',n,'k=',k,'i=',i+1, 'r=', r);
      oldR = r;
    }
    if (r%2==1){
      if (r>1){
        nums.splice(maxPos, 1, (r-1)/2, (r-1)/2);
      }
    }else{
      if (r>2){
        nums.splice(maxPos, 1, (r/2)-1, r/2);
      }else if (r==2){
        nums.splice(maxPos, 1, r/2);
      }
    }
    // console.log(nums);
  }
  if (r==1) return {max:0, min:0};
  if (r==2) return {max:1, min:0};
  if (r%2==1) return {max: (r-1)/2, min:(r-1)/2};
  if (r%2==0) return {max: r/2, min:(r/2)-1};
}

gcj.readFileAsyncByLine(function(line) {
  if (lc == 0){
    size = parseInt(line);
    gcj.writeToFile('');
  }else{
    tc++;
    let splitLine = line.split(" ");
    let n = parseInt(splitLine[0]);
    let k = parseInt(splitLine[1]);
    let res = compute(n,k);
    gcj.appendToFile('Case #'+tc+': '+res.max+' '+res.min);
    console.log("---");
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
