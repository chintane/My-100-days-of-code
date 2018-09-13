//To check word is palindrome or not using stack.

var word="racecar";
var rword="";//reverse word
var letters=[];//new stack

for(var i=0;i<word.length;i++){
	letters.push(word[i]);
}

for(var j=0;j<word.length){
	rword+=letters[j];
}

if(rword===word){
	console.log(word+" is a palindrome");
}else{
	console.log(word+" is not a palindrome");
}
