//アロー関数
// function func1(str){
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));
//アロー関数
const func2 = (str) => {
  return str;
};

// const func2 = (str) => str;
//処理が一行で終わってそれを返却する時にには{}や
//リターンを省略することができる
//しかしブラケットを記述した場合はreturnがないとダメ
//逆も然り

//アロー関数は
console.log(func2("func2です"));

// const func3 = (num1, num2)=> {
//   return num1 + num2;
// };

const func3 = (num1, num2) => num1 + num2;

console.log(func3(10, 20));
