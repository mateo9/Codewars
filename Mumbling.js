/* 

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.



*/


function accum(s) {
 
 var str = '';
 for(var i = 0; i < s.length; i++) {
 	if(s.charAt(i) === s.charAt(i).toLowerCase()) {
    str = str + s.charAt(i).toUpperCase() + s.charAt(i).repeat(i) + '-';
    } else if(s.charAt(i) === s.charAt(i).toUpperCase()) {
    	str = str + s.charAt(i) + s.charAt(i).repeat(i).toLowerCase() + '-';
    }
 }
  var test = str.split("").slice(0,-1).join("");
  return test;
}

