function myPriorityQueue(){
	this.collection=[];
	this.isEmpty=function(){
		return this.collection.length==0;
	};
	
	this.print=function(){
		return console.log(this.collection);
	};
	
	this.size=function(){
		return this.collection.length;
	};
	
	this.front=function(){
		return this.collection[0];
	};
	
	this.dequeue=function(){
		this.collection.shift();
	}
	
	this.enqueue=function(element){
		if(this.collection.length==0){
			this.collection.push(element);
		}else{
			var add=false;
			for(var i=0;i<this.collection.length;i++){
				if(element[1]<collection[i][1]){
					this.collection.splice(i,0,element);
					add=true;
					break;
				}
				if(!add){
					this.collection.push(element);
				}
			}
		}
	};
}


pq.enqueue(['ABC',3]);
pq.enqueue(['BCD',2]);
pq.enqueue(['EFG',4]);
pq.print();
console.log(pq.size());