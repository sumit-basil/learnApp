/* 

Given a list of directions to spin a wheel, 
""left"" or "right", return an integer of how many full 360° 
rotations were made. 
Note that each word in the array counts 
as a 90° rotation in that direction.

*/

function calcSpin(params) {
  var n = 1;
  if (params.length < 4) {
    console.log("Not enough data");
    return 0;
  }

  for (var i = 0; i <= params.length - 1; i++) {
    console.log("Step: ", i);
    console.log("params[i -1 ]", params[i - 1]);
    console.log("params[i]", params[i]);
    console.log("params[i + 1]", params[i + 1]);

    if (params[i + 1] === undefined) {
      break;
    }
    if (params[i] === params[i + 1]) {
      console.log("++");
      n++;
    } else if (params[i] !== params[i + 1] && params[i] !== params[i - 1]) {
      console.log("--");
      n--;
    }

    console.log("n", n);
  }

  return Math.floor(n / 4);
}

(() => {
  console.log("Return 1", calcSpin(["left", "left", "left", "left"])); //1

  console.log("Return 2", calcSpin(["left", "right", "left", "left"])); // 0

  console.log("Return 3", calcSpin(["left", "right", "left", "left", "left"])); //1

  console.log(
    "Return 4",
    calcSpin(["left", "right", "left", "left", "right", "left", "left", "left"])
  ); //1
})();

/*

 Input: ["left", right, "left", "left"]
 Optput: 


*/
