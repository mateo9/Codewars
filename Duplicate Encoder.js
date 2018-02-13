/* 
  The goal of this exercise is to convert a string to a new string where each
  character in the new string is '(' if that character appears only once in the original string, or ')' 
  if that character appears more than once in the original string. Ignore capitalization when determining if
  a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))((" 
*/


function duplicateEncode(word){
    var str = "";
     w = word.toLowerCase();
    for(let i = 0; i < w.length; i ++)
    {
      if(w.indexOf(w[i]) === w.lastIndexOf(w[i]))
      {
        str += '(';
      } else str += ')';
    
    }

    return str;
}


