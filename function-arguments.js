function math(arg1, arg2, arg3){
  if(typeof arg1 === 'number' &&
     typeof arg2 === 'number' &&
     typeof arg3 === 'number'){
       return arg1 + (arg2 * arg3);
     }
}

console.log(math(53, 61, 67))
