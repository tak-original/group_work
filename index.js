//指定したid値を持つ要素をElementとして返す
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

document.addEventListener('DOMContentLoaded',()=>{
button.addEventListener("click",async function(){
 //liタグ削除
       let litags = document.getElementsByTagName('li');
    for(let li of litags){
        lists.removeChild(li);
    }

   //id 属性を利用して入力内容を返す 
    const searchWord = document.getElementById('searchWord').value;

   // Google Books APIs のエンドポイント
   const url = `https://www.googleapis.com/books/v1/volumes?q=${searchWord}`;
     //responseオブジェクトが帰ってくる
   const res = await fetch(url);
    //const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //jsonデータが帰ってくる？
   const bookData =  await res.json();   
    // let today = bookData.items[0].volumeInfo.title;
    // let telop = bookData.items[0].id;
    // document.getElementById('today').textContent = today;
    // document.getElementById('telop').textContent = telop;
 //DOM操作
for (let index = 0; index < Math.min(bookData.items.length,10); index++) {
    const item = bookData.items[index]; 
    const list = document.createElement("li");
  list.innerText = item.volumeInfo.title;
    // javaScript html 要素　追加　
  lists.appendChild(list); 
}
});
});


// const button = document.getElementById("addBtn");
// const lists = document.getElementById("lists");

// button.addEventListener("click",async function(){
//     // //responseオブジェクトが帰ってくる
//      const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     //jsonデータが帰ってくる？
//     const users =  await res.json();


//  users.forEach(function(user){
//          //  createElement HTML要素を生成できる
//   const list = document.createElement("li");
//   list.innerText = user.address.suite;
//     // javaScript html 要素　追加　
//   lists.appendChild(list);
//   console.log(list);    
//     });

// });


   //DOM操作
// for (let index = 0; index < users.length; index++) {
//     const user = users[index]; 
//     const list = document.createElement("li");
//   list.innerText = user.address.suite;
//     // javaScript html 要素　追加　
//   lists.appendChild(list); 
// }


// async function callApi(){
//     // 実際にAPIをたたく処理（async await)
//     //Responseオブジェクトが帰ってくる？
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     //jsonデータが帰ってくる？
//     const users =  await res.json();
//     console.log(users);
// }

// callApi();
