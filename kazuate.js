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
  let i=document.querySelector('input[name="seisu"]');  
  let kaito = i.value;       
  let yoso=Number(kaito);
  // 課題3-1: 正解判定する
  let a = document.querySelector('span#answer');       
  a.textContent = yoso;          
  let r = document.querySelector('p#result');                
  if(4<=kaisu){
    console.log('答えは'+kotae+'でした。すでにゲームは終わっています。');
    r.textContent ='正解です。おめでとう!';        
  }else{
    kaisu=kaisu+1;
      let k= document.querySelector('span#kaisu');         
      k.textContent = kaisu;                  
    if(kotae===yoso){
      //let r = document.querySelector('span#result');
      r.textContent ='正解です。おめでとう!';        
    }else{
      if(kaisu===3){
        //let r1 = document.querySelector('span#result');
        r.textContent ='まちがい．残念でした答えは'+kotae+'です。';   
      }else {
      if (kaisu<=2&&kotae>yoso){
       // let r2 = document.querySelector('span#result');
        r.textContent ='まちがい。答えはもっと大きいですよ';    
      }else if(kaisu<=2&&kotae<yoso){
        //let r3 = document.querySelector('span#result');
        r.textContent ='まちがい。答えはもっと小さいですよ。';   
      }
    }
    }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
}
