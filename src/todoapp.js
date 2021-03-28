import "./styles.css";

const onClickAdd = () => {
  //クリックされた時のテキストフォームの動き
  const inputText = document.getElementById("add-text").value;
  //テキストフォームのIDを探しその中の値をinputという変数にする。
  document.getElementById("add-text").value = "";
  //テキストフォームのIDを探しその中の値を空にする。
  const li = document.createElement("li");
  //JavaScriptでDOMを生成する場合はcreateElementという関数を使う
  //これでliタグを生成する
  li.className = "list-row";
  //liにクラスをつける
  const p = document.createElement("p");
  //pタグを生成する
  p.innerText = inputText;
  //pタグの中にテキストフォーム内のもじを設定する
  p.className = "midasi";
  //pにクラスをつける
  const con_btn = document.createElement("button");
  //ボタンタグを生成する
  con_btn.innerText = "完了";
  //完了という文字をボタンにいれる
  con_btn.addEventListener("click", () => {
    alert("完了");
    deleteFromIncompleteList(con_btn.parentNode);
    //完了ボタンをクリックした時のイベント
    const addTarget = con_btn.parentNode;
    //完了ボタンの親要素を定義
    const text = addTarget.firstElementChild.innerText;
    //親要素の一つ目の子要素の中のテキストを定義（pタグの中身）

    addTarget.textContent = null;
    //完了の親要素の中身を空にする
    const p = document.createElement("p");
    //liタグを生成する
    p.innerText = text;
    //pタグの中にpタグの要素を入れる
    const bk_btn = document.createElement("button");
    //戻るボタンを生成して定義
    bk_btn.innerText = "戻す";
    //戻るボタンにテキストを入れる
    bk_btn.addEventListener("click", () => {
      const delete_target = bk_btn.parentNode;
      document.getElementById("conmplite-list").removeChild(delete_target);
    });
    addTarget.appendChild(p);
    addTarget.appendChild(bk_btn);
    //pタグとボタンをaddTargetの配下に入れる
    //console.log(p);
    document.getElementById("conmplite-list").appendChild(addTarget);
  });
  //ULの下に生成したliを入れる（ここではulタグを変数にしない）

  //ボタンクリックに対してイベントを付与する

  const del_btn = document.createElement("button");
  //ボタンタグを生成する
  del_btn.innerText = "削除";
  //完了という文字をボタンにいれる
  del_btn.addEventListener("click", () => {
    alert("本当に削除していいですか");
    //削除ボタンにクリックイベントを付与
    //const del_obj = del_btn.parentNode;
    //削除する範囲を変数で定義
    deleteFromIncompleteList(con_btn.parentNode);
    //document.getElementById("inconmlite-list").removeChild(del_obj);
  });
  //押された削除ボタンの親タグ（ul）から（li）要素を削除

  //console.log(con_btn, del_btn);
  //完了buttonを生成する

  li.appendChild(p);
  //pタグをliタグの子要素に設定する
  li.appendChild(con_btn);
  //完了ボタンをliタグの子要素に設定する
  li.appendChild(del_btn);
  //削除ボタンをliタグの子要素に設定する

  document.getElementById("inconmlite-list").appendChild(li);
  //ULの下に生成したliを入れる（ここではulタグを変数にしない）
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("inconmlite-list").removeChild(target);
};

//追加ボタンを探し出しそこにクリックイベントを付与するというだけ
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
