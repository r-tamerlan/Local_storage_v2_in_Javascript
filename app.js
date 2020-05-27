let key = document.getElementById("key");
let info = document.getElementById("info");
let btn = document.querySelectorAll("button")[0];
let rst = document.querySelectorAll("button")[1];

rst.addEventListener("click",function(x){
    x.preventDefault();
    localStorage.clear();

});
    

btn.addEventListener("click",function(e){
    e.preventDefault();
    localStorage.setItem("'"+key.value+"'" ,JSON.stringify(info.value));

    // let client = {
    //     "name": ad.value,
    //     "email": email.value
    // };

    // let clientMesaj =  {
    //     "content": mesaj.value
    // }

    // localStorage.setItem("ad", JSON.stringify(ad.value));
    // localStorage.setItem("email", JSON.stringify(email.value));
    // localStorage.setItem("mesaj", JSON.stringify(mesaj.value));

    // localStorage.setItem("client", JSON.stringify(client));
    // localStorage.setItem("mesaj", JSON.stringify(clientMesaj));
})

// console.log(JSON.parse(localStorage.getItem("mesaj")));
console.log(JSON.parse(localStorage.getItem("mesaj")));

