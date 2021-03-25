// mapやfiltrを使った配列の処理
const nameArr = ["たなか", "ヤマダ", "ゆき"];
// for (let index=0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }
//mapは配列に大して使える関数
// const nameArr2=nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);
//mapの次の（）の中身には配列の中身が順番にはいる。
//新しい配列が生成される（１.mapの基本構文）
// nameArr.map((name)=>console.log(name));
// //ブラケットを省略されている。
// //このように配列を単純にループして処理するやりs方と
// //リターンに基づいて新しい配列を生成するという（１）の二つのやり方がある。

// //filterはある条件に一致したものだけ返却して新しい配列を生成する関数
// const numArr=[1, 2, 3, 4, 5];
// const newNumArr=numArr.filter((num)=>{
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// //昔のやり方
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// //mapを使ったやり方
// nameArr.map((name, index) => console.log(`${index}番目は${name}です`));
// //mapの１番目の引数には配列の要素が順番に入り、二つ目の引数には順番が０から入ってくる。

const newNameArr = nameArr.map((name) => {
  if (name === "ゆき") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
