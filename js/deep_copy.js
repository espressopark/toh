// shallow copy
// var obj = { a: 1 };
// var copy = obj;
// obj.a = 2;
// console.log(obj);
// console.log(copy);  // 1이 아니라 2 이다.

// deep copy
var obj = { a: 1 };
// var copy = Object.assign({}, obj);
// -> {} 새로운 메모리 주소에 속성을 새로 만드는 공간

var copy = {...obj}; //스프레드 연산자
obj.a = 2;
console.log(obj);
console.log(copy);
