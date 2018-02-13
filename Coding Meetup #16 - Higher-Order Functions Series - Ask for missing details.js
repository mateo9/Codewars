/* 
You will be given an array of objects representing data about developers who have signed up to attend the next coding
meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

write a function that

1) adds the question property to each object in the input array where the developer has not provided the relevant
details (marked with a null value). The value of the question property should be the following string:

2) and returns only the developers with missing details:

Hi, could you please provide your <property name>.

*/
function askForMissingDetails(list) {
  
  for(var i = 0; i < list.length; i++) {
  	for(var x in list[i]) {
  		if(list[i][x] === null) {
  			list[i].question = `Hi, could you please provide your ${x}.`;
  		} 
  	}
  }

 var test = list.filter(function(current){
 	return current.hasOwnProperty('question');
 });

 return (test);
  

}
