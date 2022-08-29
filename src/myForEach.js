"use strict";

Array.prototype.myForEach = function(callback){

    for (let i=0 ; i<this.length; i++){
        callback(this[i],i);
    }
}

const avengers = ['thor', 'captain america', 'hulk'];
console.log('forEach results :-');
avengers.myForEach((item, index)=>{
	console.log(index, item)
})