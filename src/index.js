import Test from "./classTest";
import promiseTest from "./promiseTest";
import set from "./setTest";
import arrowFn from "./arrowFnTest";

const test = new Test("class test");
test.showName();

const a = ["1", "2", "4"];
console.log(a);
const promise = promiseTest();
promise.then(result => console.log(result));

console.log(set);

arrowFn();

const b = Object.assign({}, { name: "x", count: 3 }, { id: 12 });
console.log(b);
