"use strict";

Array.prototype.myFilter = function(callback){
    const res = [];
    
    for(const element of this){
        if (callback(element)){
            res.push(element);
        }
    }
    return res;
}

const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.myFilter(el => el === 2 || el === 4);
console.log('Filter results: '+filtered); //[2,4]