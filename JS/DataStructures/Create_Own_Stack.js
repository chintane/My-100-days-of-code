//create own stack

var stack=function(){

var this.count===0;
var this.storage={};

//to add item in Stack push
this.push=function(value){
this.storage[this.count]=value;
this.count++;
}

//to remove top item in Stack
this.pop=function(){
if(this.count===0){
return undefined;
}
this.count--;
var result=this.storage[this.count];
delete this.storage[this.count];
return result;
}

//to peek or get the top item in list

this.peek=function(){
return this.storage[this.count-1];
}
}

stack myStack=new stack();
myStack.push(1);
myStack.push(2);
Console.log(myStack.pop());
Console.log(myStack.peek());
myStack.push("Hello");
Console.log(myStack.peek());
Console.log(myStack.pop());
Console.log(myStack.peek());