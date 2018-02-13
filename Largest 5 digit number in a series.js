/* 
In the following 10 digit number:

1234567890

67890 is the greatest sequence of 5 digits.

Complete the solution so that it returns the largest five digit number found within the number given.
The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may
be as large as 1000 digits. 

*/


function solution(digits){
  var arr = digits.split('');
  var tem = 0;
  var test = [];
  arr.forEach((current,index,array) => {
     if(current >= tem)
     {
     	tem = current;
     	var a = array.slice(index,index + 5).join('');
        test.push(parseInt(a));
     } 
  });

  function sortNumber(a,b)
  {
    return b - a;
  }

  test.sort(sortNumber);
  var results = test[0];
  return results;

}

