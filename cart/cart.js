var products = [
//     {
//         id:1,
//         images : ['https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/be7b94169533691.Y3JvcCwxOTk5LDE1NjQsMCwxMTg.png'],
//         name : 'Auto Parts',
//         quantity : 1,
//         price : 20000,
//     },
//     {
//         id:2,
//         images : ['https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/be7b94169533691.Y3JvcCwxOTk5LDE1NjQsMCwxMTg.png'],
//         name : 'Auto Parts',
//         quantity : 1,
//         price : 20000,
//     },
//     {
//         id:3,
//         images : ['https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/be7b94169533691.Y3JvcCwxOTk5LDE1NjQsMCwxMTg.png'],
//         name : 'Auto Parts',
//         quantity : 1,
//         price : 20000,
//     },
    
    
]
// console.log(products);
localStorage.setItem('cart-products',JSON.stringify(products));
var pds = JSON.parse(localStorage.getItem('cart-products'))||[];
var items = document.getElementById('items')
function display(products){
    updateprice(products)
    items.innerHTML = "";
    if(products.length==0){
        var img = document.createElement('img');
        img.src = "https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif"
        img.style.width = "100%";
        var shopnow = document.createElement('button');
        shopnow.style.float = "right"
        shopnow.innerText = 'Shop Now'
        shopnow.style.width = "150px"
        shopnow.style.color = "green"
        shopnow.style.backgroundColor = "lightgrey"
        img.style.height = "500px"
        items.append(shopnow,img);

    }
    document.getElementById('total-items').innerText = products.length;
    products.forEach(function(element,index){
        var item = document.createElement('div'); 
        item.className = 'item';
        var div = document.createElement('div'); 
        var img = document.createElement('img');
        var name = document.createElement('h4');
        var qty = document.createElement('span');
        var price = document.createElement('h6');
        var strikeoff = document.createElement('h6');
        var btn = document.createElement('button');
        var add = document.createElement('button');
        var less = document.createElement('button')
        var span = document.createElement('span');
        var br = document.createElement('br')
        add.id = 'increase';
        less.id = 'decrease';
        add.innerText = '+';
        less.innerText = "-";
        
        span.innerText = products[index].quantity;
        btn.textContent = 'REMOVE';
        btn.id = "removeBtn"
        img.src = products[index].images[0];
        img.style.width = '100px';
        strikeoff.style.fontSize = "15px";
        strikeoff.style.marginRight = "20px"
        name.textContent = products[index].name;
        qty.innerHTML = `Quantity: `
        qty.className = 'name';
        price.textContent = '₹ ' +products[index].price;
        price.style.float = 'top'
        strikeoff.textContent = '₹ ' +products[index].price*2;
        strikeoff.style.float = 'top'
        strikeoff.style.textDecoration = "line-through"
        btn.addEventListener('click',function(event){
            event.preventDefault();
            products.splice(index,1);
            localStorage.setItem('cart-products',JSON.stringify(products));
            document.getElementById('total-cost').textContent = total(products)
            display(products)
            
        })
        

        // let increase = document.getElementById("increase");
        add.addEventListener("click",(event)=>{
            event.preventDefault();
            products[index].quantity = products[index].quantity+1;
            products[index].price = (products[index].price/(products[index].quantity-1))*products[index].quantity
            // console.log(products[index].price/(products[index].quantity-1))
            localStorage.setItem('cart-products',JSON.stringify(products));
            display(products);
        })
        
        less.addEventListener("click",(event)=>{
            event.preventDefault();
            if(products[index].quantity==1) less.disabled = true;
            else{
                products[index].quantity = products[index].quantity-1;
                products[index].price = (products[index].price/(products[index].quantity+1))*products[index].quantity
                localStorage.setItem('cart-products',JSON.stringify(products));
                display(products);
            }
        })

        div.append(name,qty,less," ",span," ",add,br,strikeoff,price,btn);
        item.append(img,div);
        items.append(item);
        document.getElementById('total-cost').textContent = total(products)
    })
}
display(pds);
function total(arr){
    if(arr.length==0) return 0;
    else
    return arr.reduce(function(acc,element,index){
       return acc+ + +arr[index].price;
    },0)
}

// console.log(total(products));
//redirecting to address page
var nxtPage = document.querySelector('#tp>button');
// console.log(nxtPage)
nxtPage.addEventListener('click',function(event){
    window.location.href='./address.html';
})


function updateprice(products){
    let strikeoff = document.getElementById("strikeoff");
    let sp = products.reduce(function(acc,element,index){
        return acc+ + +products[index].price*2;
     },0)
    strikeoff.innerText = sp;
    let discount = document.getElementById("discount");
    discount.innerText = "- "+sp/2
    let total = document.getElementById("total");
    total.innerText = sp/2
    let save = document.getElementById("price-discount");
    save.innerText = sp/2;
}



