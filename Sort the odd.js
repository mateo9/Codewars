/* 
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need
to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]



*/

function sortArray(array) {
  var odd = new Array();

  odd = array.filter((current) => {
  	return current % 2 !== 0;
  });

  function sortNum(a,b){
  return a - b;
  }
   
   odd.sort(sortNum);
   
   var test = new Array();

  for(var i = 0; i < array.length; i++) {
  	if(array[i] % 2 === 0)
  	{
  		test[i] = array[i];
  	} else if(array[i] % 2 !== 0)
  	{
  		test.splice(i, 0, odd[0]);
  		odd.shift();
  	}

  }

  return test;

}