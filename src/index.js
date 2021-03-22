/** */
// var vall="var変数";
// console.log(vall);
// //var変数は上書き可能
// var vall="var変数上書きの"
// console.log(vall);
// //var変数は宣言可能

// let val2="let変数";
// console.log(val2);
//  //let is not possible to over write
//  //letは変数を上書き可能
//  val2="let variables over writed"
//  console.log(val2);
//  //let variables can't re-Declaration
//  //letは再宣言不可能
//  let val2 = "let_re-Declaration"

const val3 = "const変数";
console.log(val3);

//const変数は上書き不可
//val3 ="const変数";

//const val3="const再宣言"
//constのオブジェクトはプロパティの変更可能
const val4 = {
  name: "jakee",
  age: 50
};
val4.name = "jak";
val4.adress = "ひろしま";
console.log(val4);

//constの配列はプロパティの変更可能

const val5 = ["dog", "cat"];
val5[0] = "buird";
val5.push("monkey");
console.log(val5);
