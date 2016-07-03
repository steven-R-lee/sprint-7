// Exercise 3.1 : minimum

function min(x,y) {
  if (x < y) {
    return x;
    }
  else
  {
    return y;
    }
  };

console.log (min(0,10));
console.log (min(0,-10));


// Exercise 3.2 : recursion

function isEven(eveness) {
  if (eveness == 0)
    return true;
  else if (eveness == 1)
  return false;

  else if (eveness < 0)  // i.e. a negative number
    return isEven(-1* eveness)
  else
    return isEven (eveness-2)
};

/*
Note: when a number is less than zero N is undefined by the built-in function 'isEven'.
Multiplying N by -1 resolves the issue for all cases of N.
*/

console.log (isEven(50));
console.log (isEven(75));
console.log (isEven(-1));


// Exercise 3.3 : bean counting

function countCharater (string, chTarget) {
  var tally = 0;
    for (var n = 0; n < string.length; n++)
      if(string,charAt(n) == chTarget)
        tally = tally + 1;
    return tally;
}

/* Honesty Box: I got muddled with regards the next two lines,
 and found the answers elsewhere. */

function countBs(string) {
  return countCharacter(string, "B");
}

console.log(countBs("BBC"));
console.log(countCharacter("kakkerlak", "K"));