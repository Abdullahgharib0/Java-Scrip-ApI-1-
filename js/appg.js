var AHttp =new XMLHttpRequest()
var Abda = []
AHttp.open('GET',`https://newsapi.org/v2/top-headlines?country=eg&category=general&apiKey=84c8c86570e24764bde95b1a88242570`)
AHttp.send()

AHttp.addEventListener('readystatechange',function(){
    if (AHttp.readyState == 4) {
        
        Abda = JSON.parse(AHttp.response).articles
        console.log(Abda);
        displayProducts();


    }
})


function displayProducts(){
    var carton = ``;
    for(var i =0 ; i<Abda.length ;i++){
        carton += `<div class="col-md-4">
        <div class="items">
            <img class="w-100" src="${Abda[i].urlToImage}" alt="">
            <h1>${Abda[i].title}</h1>
            <p class="text-muted">${Abda[i].description}</p>
            <a class ='btn btn-outline-danger btn-sm my-5 fs-3' href='${Abda[i].url}'>Show More</a>
        </div>
    </div>`
    }
    document.getElementById('rowAb').innerHTML = carton
}