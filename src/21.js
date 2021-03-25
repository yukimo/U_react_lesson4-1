//分割代入

// const myProfile = {
//   name: "ゆき",
//   age: 25
// };

// const message1 = `名前は${myProfile.name}ですす。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//分割代入はオブジェクトだけではなく配列にも使える
const myProfile = [`じゃけえ`, 28];
const message3 = `名前は${myProfile[0]}です。年齢はは${myProfile[1]}歳です。`;
console.log(message3);
const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢べ${age}歳です。`;
console.log(message4);
