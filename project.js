let c1 = document.querySelector('#japan');
c1.addEventListener('click', changeColor);
let c2 = document.querySelector('#Cairo');
c2.addEventListener('click', changeColor);
let c3 = document.querySelector('#Moscow');
c3.addEventListener('click', changeColor);
let c4 = document.querySelector('#Johannesburg');
c4.addEventListener('click', changeColor);
let c5 = document.querySelector('#Beijing');
c5.addEventListener('click', changeColor);
let c6 = document.querySelector('#Singapore');
c6.addEventListener('click', changeColor);
let c7 = document.querySelector('#Sydney');
c7.addEventListener('click', changeColor);
let c8 = document.querySelector('#London');
c8.addEventListener('click', changeColor);
let c9 = document.querySelector('#Paris');
c9.addEventListener('click', changeColor);
let c10 = document.querySelector('#RiodeJaneiro');
c10.addEventListener('click', changeColor);
let c11= document.querySelector('#NewYork');
c11.addEventListener('click', changeColor);
let c12= document.querySelector('#LosAngeles');
c12.addEventListener('click', changeColor);
function changeColor(event) {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let color = 'rgb(' + r + ',' + g + ',' + b + ')';
	let div = event.target;
	div.style.backgroundColor = color;
}


let b1 = document.querySelector('button#japan');
let b2 = document.querySelector('button#Cairo');
let b3 = document.querySelector('button#Moscow');
let b4 = document.querySelector('button#Johannesburg');
let b5 = document.querySelector('button#Beijing');
let b6 = document.querySelector('button#Singapore');
let b7 = document.querySelector('button#Sydney');
let b8 = document.querySelector('button#London');
let b9 = document.querySelector('button#Paris');
let b10 = document.querySelector('button#RiodeJaneiro');
let b11 = document.querySelector('button#NewYork');
let b12= document.querySelector('button#LosAngeles');

b1.addEventListener('click', tokyo);
b2.addEventListener('click', kairo);
b3.addEventListener('click', mosukuwa);
b4.addEventListener('click', yohane);
b5.addEventListener('click', pekin);
b6.addEventListener('click', singa);
b7.addEventListener('click', sido);
b8.addEventListener('click', rondon);
b9.addEventListener('click', pari);
b10.addEventListener('click', rio);
b11.addEventListener('click', NY);
b12.addEventListener('click', AL);
let r = document.querySelector('p#toshi');  
let country = {
    "日本":1850147,
    "エジプト":360630,
    "ロシア":524901,
    "南アフリカ":993800,
    "中華人民共和国":1816670,
    "シンガポール":1880252,
    "シドニー":2147714,
    "イギリス":2643743,
    "フランス":2968815,
    "ブラジル":3451189,
    "アメリカ合衆国(ニューヨーク)":5128581,
    "アメリカ合衆国(ロサンゼルス)":5368361
}
// 通信を開始する処理
function tokyo() {
    cityid = country[b1.textContent];
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cityid+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
function kairo() {
    cityid = country[b2.textContent];
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cityid+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
function mosukuwa() {
    cityid = country[b3.textContent];
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cityid+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
function yohane() {
    cityid = country[b4.textContent];
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cityid+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
function pekin() {
    cityid = country[b5.textContent];
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cityid+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
function singa() {
    cityid = country[b6.textContent];
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cityid+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
function sido() {
    cityid = country[b7.textContent];
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cityid+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
function rondon() {
    cityid = country[b8.textContent];
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cityid+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
function pari() {
    cityid = country[b9.textContent];
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cityid+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
function rio() {
    cityid = country[b10.textContent];
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cityid+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
function NY() {
    cityid = country[b11.textContent];
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cityid+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
function AL() {
    cityid = country[b12.textContent];
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+cityid+'.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    let toshi= data.name;
    let weather= data.weather[0].description;
    let max= data.main.temp_max;
    let min= data.main.temp_min;
    let situdo= data.main.humidity;
    let p1 = document.querySelector('span#toshi');
    let p2 = document.querySelector('span#weather');
    let p3 = document.querySelector('span#temp_max');
    let p4 = document.querySelector('span#temp_min');
    let p5 = document.querySelector('span#humidity');
    p1.textContent ='都市名:'+toshi; 
    p2.textContent ='天気:'+weather; 
    p3.textContent ='最高気温:'+max+'℃'; 
    p4.textContent ='最低気温:'+min+'℃'; 
    p5.textContent ='湿度:'+situdo+'%'; 

    // data をコンソールに出力
    
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}