/* 

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing
distinct letters, each taken only once - coming from s1 or s2.

#Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```


*/


function longest(s1, s2) {
 var arr = [];
 for(var i = 0; i < s1.length; i++) {
 	if(arr.indexOf(s1[i]) === -1) {
 		arr.push(s1[i]);
 	}
 }

 for(var j = 0; j < s2.length; j++) {
 	if(arr.indexOf(s2[j]) === -1) {
 		arr.push(s2[j]);
 	}
 }
 arr.sort();
 var s3 = arr.join("");

 return (s3);
}
