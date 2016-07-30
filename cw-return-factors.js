//My Solution
function divisors(integer) {
  var num = 1;
  var result = [];
  var factor, remainder;
  function nextFactor(integer) {
    factor = num + 1;
    //console.log("This is num "+num);
    //console.log("This is next factor "+factor);
    if (factor < integer) {
      remainder = integer % factor;
      //console.log("This is remainder "+remainder);
      if (remainder === 0) {
      	//console.log("found factor "+ factor);
        result.push(factor);
        }
     }
     num = num + 1;
     if (num < integer - 1) {
     	nextFactor(integer);
     }  
    }
  nextFactor(integer); //stab at recursion
  if (result.length !== 0) {
    return result;
    } else {
    return ""+integer + " is prime";
    }
}

//best solution
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};
//
//Next best
function divisors(integer) {
  for(var div = [], i = 2; i < integer; i++) if(integer % i == 0) div.push(i);
  return div.length > 0 ? div : integer + " is prime";
}