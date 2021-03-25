//デフォルト値

// const sayHello=(name)=>console.log(`こんには！${name}さん！`);
// sayHello();

//上記のように引数がないとundifinedとなり、バグの原因になるのでnemeの後に初期値を入れる。
const sayHello = (name = "のんのん") => console.log(`こんには！${name}さん！`);
sayHello();
//その後変数を入れると書き換えられる。
sayHello("ゆき");
