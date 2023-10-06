/* 

Given a list of directions to spin a wheel, 
""left"" or "right", return an integer of how many full 360° 
rotations were made. 
Note that each word in the array counts 
as a 90° rotation in that direction.

*/

function calcSpin(params) {
  var n = 0;

  // Base Case
  if (params.length < 4) {
    console.log("Not enough data");
    return 0;
  }

  for (var i = 0; i <= params.length; i++) {
    // console.log("Step: ", i);
    // console.log("params[i]", params[i]);

    if (params[i] === "left") {
      n += 1;
    } else if (params[i] === "right" && params[i + 1] !== "left") {
      n -= 1;
    }

    // console.log("N: ", n);
  }

  return Math.floor(Math.abs(n / 4));
}

(() => {
  console.log("Test 1");
  console.log("Return 1", calcSpin(["left", "left", "left", "left"])); //1

  console.log("Test 2-------------");
  console.log("Return 2", calcSpin(["left", "right", "left", "left"])); // 0

  console.log("Return 3", calcSpin(["left", "right", "left", "left", "left"])); //1

  console.log(
    "Return 4",
    calcSpin(["left", "right", "left", "left", "right", "left", "left", "left"])
  ); //1
})();

/*
    Time Complexity:
    The function contains a loop that iterates over the elements in the params array. The loop runs from i = 0 to i <= params.length, so it has a time complexity of O(n), where n is the length of the params array.
    
    Space Complexity:
    The function uses a constant amount of additional space (var n = 0;). It does not create any additional data structures that scale with the input size. Therefore, the space complexity is O(1), which means it has constant space complexity.
    Overall, the function has a time complexity of O(n) and a space complexity of O(1).
*/
