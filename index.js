//指定したid値を持つ要素をElementとして返す
const button = document.getElementById("addBtn");

console.log("aa");
document.addEventListener('DOMContentLoaded',()=>{
button.addEventListener("click",async function(){
    //olタグ取得
  const lists = document.getElementById("lists");

 //li,imgタグ削除 olの子要素すべて削除
//[li]の数を取得する
 const len = lists.children.length ;

 //[li]の数だけ繰り返す
  for ( var i = 0 ; i < len ; i ++ ) {
       //[li]を削除する
        lists.removeChild ( lists.children [ 0 ] ) ;
      }
    
   //id 属性を利用して入力内容を返す 
    const searchWord = document.getElementById('searchWord').value;
    
    const applicationId  = '1000474099632671904';
  const affiliateId    = '258b0227.6e1470c9.258b0228.c6450a4a';
  const encodedKeyword = encodeURIComponent(searchWord);

   
   const url = `https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?format=json&keyword=${encodedKeyword}&applicationId=${applicationId}`;

   //responseオブジェクトが帰ってくる
   const res = await fetch(url);

    //jsonデータが帰ってくる？
   const bookData =  await res.json();   
    
//  let today = bookData.Items[0].Item.author;
//     let telop = bookData.Items[0].Item.itemName;
//     document.getElementById('today').textContent = today;
//     document.getElementById('telop').textContent = telop;
 //DOM操作

 //DOM操作
for (let index = 0; index < Math.min(bookData.Items.length,10); index++) {
    const item = bookData.Items[index].Item; 
    const list = document.createElement("li");
    const img = document.createElement("img");
    //imgタグにid属性付与
    //img.id = `id${index}`;
    img.src = `${item.mediumImageUrl}`;


  //list.innerText = item.volumeInfo.title;
  list.innerText = "タイトル:"+item.title+"　著者:"+
   item.author+"　出版社:"+item.publisherName
   +"　isbn:"+item.isbn+"　価格:￥"+item.itemPrice+"円";
    // javaScript html 要素　追加　
  lists.appendChild(list); 
  lists.appendChild(img);
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