"use strict";

Array.prototype.myMap = function(callback){
    const res = [];

    for(let i=0; i<this.length; i++){
        res.push(callback(this[i], i, this));

    }
    return res;
}

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];

// console.log(Array.prototype.myMap);
console.log('Map results: '+[1,2,3].myMap((x) => x*2));
console.log(kvArray.myMap(({key, value}) => ({[key]: value})));
