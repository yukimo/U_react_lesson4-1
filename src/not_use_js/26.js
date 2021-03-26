//論理演算子

// const flag1=true;
// const flag2=false;

// if(flag1 || flag2){
//   console.log("1か２はtrueになります");
// }

// if(flag1 && flag2){
//   console.log("1も２はtrueになります");
// }

const num = null;
const fee = num || "金額未設定です";
console.log(fee);
//||の向かって左側がfalseの場合は右を返す
//jacascriptではnullはfalse判定される

const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
//&&の向かって左側がtrueなら左を返す
//と言う意味
