// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b1 = document.querySelector('button#print');
b1.addEventListener('click', hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i=document.querySelector('input[]');  
  let kaito = i.value;       
  let yoso=Number(kaito);
  // 課題3-1: 正解判定する
  kaisu=+1;
  let k= document.querySelector('span#kaisu');         
  k.textContent = kaisu;                  
  let a = document.querySelector('span#answer');       
  a.textContent = yoso;                          
  
  if(4<=kaisu){
    console.log('答えは'+kotae+'でした。すでにゲームは終わっています。')
  }else{
    if(kotae===yoso){
      console.log('正解です。おめでとう!');
    }else{
      if(kaisuu===3){
        console.log('まちがい．残念でした答えは'+kotae+'です。');
      }else if(kaisu<=2&&kotae>4){
        console.log('まちがい。答えはもっと大きいですよ。');
      }else if(kaisu<=2&&kotae<4){
        console.log('まちがい。答えはもっと小さいですよ。');
      }
    }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
}
