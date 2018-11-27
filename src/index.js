import Test from "./classTest";
import promiseTest from "./promiseTest";
import {set} from "./setTest";
import arrowFn from "./arrowFnTest";

let test = new Test("class test");
test.showName();

let promise=promiseTest();
promise.then(result => console.log(result));

console.log(set);

arrowFn();

let b=Object.assign({},{name:"x",count:3},{id: 12});
console.log(b);