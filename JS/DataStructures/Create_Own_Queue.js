function myQueue(){
  this.collection=[];
  this.print=function(){
    return console.log(this.collection);
  };
  this.size=function(){
    return this.collection.length;
  };
  this.isEmpty=function(){
    return this.size==0;
  };
  this.enqueue=function(element){
    return this.collection.push(element);
  };
  this.dequeue=function(){
    return this.collection.shift();
  };
  this.front=function(){
    return this.collection[0];
  };
}

var a =new myQueue();
a.enqueue('a');
a.enqueue('b');
a.enqueue('c');
a.print();
a.dequeue();
a.print();
a.front();