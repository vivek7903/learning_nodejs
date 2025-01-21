function fun1(){
  setTimeout(()=> console.log(" i am set timeout"),0);
  process.nextTick(()=> console.log(" i am process 1")); // y phle chlegaa asynchoronous function se
  setImmediate(()=> console.log(" i am set immediate"));
}
function fun2(){
    console.log(" i am function 2");
}
function fun3(){
    console.log(" i am function 3");
}
fun1();
fun2();
fun3();