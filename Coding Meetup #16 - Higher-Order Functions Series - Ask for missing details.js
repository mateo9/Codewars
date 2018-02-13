/* 
You will be given an array of objects representing data about developers who have signed up to
attend the next web development meetup that you are organising. Three programming languages will
be represented: Python, Ruby and JavaScript.

Your task is to return either:

    true if the number of meetup participants representing any of the three programming languages is
    at most 2 times higher than the number of developers representing any of the remaining
    programming languages; 
    false otherwise.

Notes:

    The strings representing all three programming languages will always be formatted in
    the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
    The input array will always be valid and formatted as in the example above.
    Each of the 3 programming languages will always be represented. 


*/

function isLanguageDiverse(list) {
  
  var test = list.reduce(function(acc,current) {
     acc[current.language] = (acc[current.language] || 0) + 1;
     return acc;
  },{});
  
  var max;
  var min;
  var arr = new Array();
  for(x in test) {
     arr.push(test[x]);
  }

  max = Math.max.apply(null, arr);
  min = Math.min.apply(null, arr);
  
  if(max /min > 2) {
  	return false;
  } else {
  	return true;
  }
}