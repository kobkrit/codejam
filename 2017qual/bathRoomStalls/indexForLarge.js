var gcj = require('google-code-jam-io');
var bi = require('bignumber.js');

let lc = 0;
let tc = 0;
let size = 0;
let input = [];

let compute = (n,k) =>{
  let nums = {};
  n = new bi(n);
  k = new bi(k);
  nums[n] = new bi(1);
  let p = new bi(0);
  console.log(nums);
  console.log("--");
  for (let i=0;i<k;i++){
    let key = Object.keys(nums);
    let max = new bi(-1);
    let maxKey = new bi(-1);
    console.log("key:", key);
    for (let l=0;l<key.length;l++){
	  let nkey = new bi(key[l]);
      if (nkey.gt(maxKey)){
        maxKey = nkey;
        max = new bi(nums[key[l]]);
      }
    }

	if (maxKey.lte(1)){
		return {max: 0, min: 0};
	}

    let x0 = maxKey.minus(1).dividedBy(2).ceil();
    let x1 = maxKey.minus(1).dividedBy(2).floor();

    console.log("maxKey", maxKey.toString());
    console.log("x0", x0.toString());
    console.log("x1", x1.toString());
    p = p.plus(max);

    if (p.gte(k)){
      return {max: x0.toString(), min: x1.toString()};
    }else{
      if (x0 > 0){
       if (!nums[x0]) nums[x0] = new bi(0);
       nums[x0] = nums[x0].plus(nums[maxKey]);
      }
      if (x1 > 0){
       if (!nums[x1]) nums[x1] = new bi(0);
       nums[x1] = nums[x1].plus(nums[maxKey]);
      }
      delete nums[maxKey];
    }
    console.log("p=",p," k=",k," nums=", nums);
  }
}

gcj.readFileAsyncByLine(function(line) {
  if (lc == 0){
    size = parseInt(line);
    gcj.writeToFile('');
  }else{
    tc++;
    let splitLine = line.split(" ");
    console.log("Case #"+tc, splitLine[0], splitLine[1]);
    let res = compute(splitLine[0],splitLine[1]);
    gcj.appendToFile('Case #'+tc+': '+res.max+' '+res.min);
    console.log("=======");
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
