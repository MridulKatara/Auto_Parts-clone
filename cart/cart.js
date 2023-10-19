var products = [
    {
        img : 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/be7b94169533691.Y3JvcCwxOTk5LDE1NjQsMCwxMTg.png',
        name : 'Auto Parts',
        qty : 1,
        price : 20000,
        strikeoff:40000
    },
    {
        img : 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/be7b94169533691.Y3JvcCwxOTk5LDE1NjQsMCwxMTg.png',
        name : 'Auto Parts',
        qty : 1,
        price : 20000,
        strikeoff:40000
    },
    {
        img : 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/be7b94169533691.Y3JvcCwxOTk5LDE1NjQsMCwxMTg.png',
        name : 'Auto Parts',
        qty : 1,
        price : 20000,
        strikeoff:40000
    },
    
    
]
// console.log(products);
localStorage.setItem('cart-products',JSON.stringify(products));
var pds = JSON.parse(localStorage.getItem('cart-products'))||[];
var items = document.getElementById('items')
function display(products){
    items.innerHTML = "";
    document.getElementById('total-items').innerText = products.length;
    products.forEach(function(element,index){
        var item = document.createElement('div'); 
        item.className = 'item';
        var div = document.createElement('div'); 
        var img = document.createElement('img');
        var name = document.createElement('p');
        var qty = document.createElement('p');
        var price = document.createElement('h6');
        var strikeoff = document.createElement('h6');
        var btn = document.createElement('button');
        btn.textContent = 'Remove';
        img.src = products[index].img;
        img.style.width = '100px';
        strikeoff.style.fontSize = "15px";
        strikeoff.style.marginRight = "20px"
        name.textContent = products[index].name;
        const decreaseButton = document.getElementById('decrease');
        const increaseButton = document.getElementById('increase');
        qty.innerHTML = `Quantity: <button id="decrease">-</button> ${products[index].qty} <button id="increase" >+</button>`
        qty.className = 'name';
        price.textContent = '₹ ' +products[index].price;
        price.style.float = 'top'
        strikeoff.textContent = '₹ ' +products[index].strikeoff;
        strikeoff.style.float = 'top'
        strikeoff.style.textDecoration = "line-through"
        btn.addEventListener('click',function(event){
            event.preventDefault();
            products.splice(index,1);
            localStorage.setItem('cart-products',JSON.stringify(products));
            updateprice(products);
            document.getElementById('total-cost').textContent = total(products)
            display(products)
            
        })
        

        // let increase = document.getElementById("increase");
        // increaseButton.addEventListener("click",(event)=>{
        //     event.preventDefault();
        //     products[index].qty = products[index].qty+1;
        //     localStorage.setItem('cart-products',JSON.stringify(products));
        //     display(products);
        // })


        div.append(name,qty,strikeoff,price,btn);
        item.append(img,div);
        items.append(item);
        document.getElementById('total-cost').textContent = total(products)
    })
}
display(pds);
//getting total price
// function increase(index){
//     // qty.innerText = +qty.innerText+ +1;
//     products[index].qty = products[index].qty+1;
//     localStorage.setItem('cart-products',JSON.stringify(products));
//     display(products);
//     console.log(qty.innerText);
// }
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
        return acc+ + +products[index].strikeoff;
     },0)
    strikeoff.innerText = sp;
    let discount = document.getElementById("discount");
    discount.innerText = "- "+sp/2
    let total = document.getElementById("total");
    total.innerText = sp/2
    let save = document.getElementById("price-discount");
    save.innerText = sp/2;
}

updateprice(pds);