var products = [
    {
        img : 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/be7b94169533691.Y3JvcCwxOTk5LDE1NjQsMCwxMTg.png',
        name : 'Auto Parts',
        qty : 1,
        price : 20000,
    },
    {
        img : 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/be7b94169533691.Y3JvcCwxOTk5LDE1NjQsMCwxMTg.png',
        name : 'Auto Parts',
        qty : 2,
        price : 20000,
    },
    {
        img : 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/be7b94169533691.Y3JvcCwxOTk5LDE1NjQsMCwxMTg.png',
        name : 'Auto Parts',
        qty : 1,
        price : 20000,
    },
    {
        img : 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/be7b94169533691.Y3JvcCwxOTk5LDE1NjQsMCwxMTg.png',
        name : 'Auto Parts',
        qty : 2,
        price : 20000,
    },
    
]
// console.log(products);
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
        var btn = document.createElement('button');
        btn.textContent = 'Remove';
        btn.addEventListener('click',function(event){
            event.preventDefault();
            products.splice(index,1);
            localStorage.setItem('cart-products',JSON.stringify(products));
            display(products)
        })
        img.src = products[index].img;
        img.style.width = '100px';
        name.textContent = products[index].name;
        qty.textContent = 'Quantity: '+products[index].qty;
        qty.className = 'name';
        price.textContent = '₹ ' +products[index].price;
        price.style.float = 'top'
        div.append(name,qty,price,btn);
        item.append(img,div);
        items.append(item);
        document.getElementById('total-cost').textContent = total(products)
    })
}
display(products);
//getting total price
function total(arr){
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