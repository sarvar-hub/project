'use strict';


var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;

null;
undefined;
var obj = {};


let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[0]);

// let answer = confirm("are you here");

// console.log(answer);

// let answer = +prompt("lorem ipsum que jumbatron?","Ha");

// console.log(typeof(answer));

// console.log("arr" + " - object");

// console.log(4 + +" - object");

let incr = 10,
    decr = 10;

incr++;
decr--; 

console.log(incr);
console.log(decr);

let isChecked = false,
    isClose = false;

console.log(isChecked || isClose);