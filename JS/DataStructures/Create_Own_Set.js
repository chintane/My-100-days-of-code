 function mySet(){
	this.collection=[];
	
	this.has=function(element){
		if(this.collection.indexOf(element)!==-1){
			return true;
		}
		return false;
	};
	this.values=function(){
		return this.collection;
	};
	
	this.size=function(){
		return this.collection.length;
	};
	
	this.add=function(element){
		if(!this.has(element))
			this.collection.push(element);
	};
	
	this.remove=function(element){
		
		if(this.has(element)){
			this.collection.splice(element);
		}
	};
	
	this.union=function(otherSet){		
    	var unionSet=new mySet();
		var firstSet=this.values();
    firstSet.forEach(function(e){
      unionSet.add(e);
    });
    var secondSet=otherSet.values();
		secondSet.forEach(function(e){		
				unionSet.add(e);			
		});
		return unionSet;
	};
	
	this.intersection=function(otherSet){
		var firstSet=this.values();
		var intersection=new mySet();
		firstSet.forEach(function(e){
			if(otherSet.has(e)){
				intersection.add(e);
			}
		});
		return intersection;
	};
	
	this.difference=function(otherSet){
		var firstSet=this.values();
		var differenceSet=new mySet();
		firstSet.forEach(function(e){
			if(!otherSet.has(e)){
				differenceSet.add(e);
			}
		});
		return differenceSet;
	};
	
	//All the elements of set A are in Set B	
	this.subset=function(otherSet){
		var firstSet=this.values();
		
		firstSet.every(function(e){
			if(otherSet.has(e)){
				return firstSet;
			}
		});
		return new mySet();
	};
	
}

var setA=new mySet();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
console.log(setA.size());
console.log(setA.values());
var setB=new mySet();
setB.add(5);
setB.add(6);
setB.add(7);
setB.add(8);
console.log(setB.size());
console.log(setB.values());
console.log(setA.union(setB).values());
console.log(setA.intersection(setB).values());
setA.add(8);
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());
console.log(setA.subset(setB).values());