"use strict";

Array.prototype.myReduce = function(callback, initial){

    let accumulator = ( initial === undefined) ? this[0] : initial;

    for(const element of this){
        accumulator = callback(accumulator, element);
    }
    return accumulator;
}

const message = ["JavaScript ", "is ", "fun."];

function joinStrings(accumulator, currentValue) {
    return accumulator + currentValue;
}

let joinedString = message.myReduce(joinStrings);
console.log('Reduce results: '+joinedString);
