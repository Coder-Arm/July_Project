const cartItems = document.querySelector(".cart-items");
const itemsSummary = document.getElementById('items-summary');
const total = document.getElementById('total');
let items = JSON.parse(localStorage.getItem("cart"));
// console.log(items)


function getCartDetails(data){
    let count = 0;
    cartItems.innerHTML = "";
   data.forEach(item => {
    count += item.price;
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = 
    `<img
      src="${item.image}"
      alt="cloth"
    />
    <div class="card-details">
      <div class="price-size-box">
        <span>$${item.price}</span>
        <span>${item.size}</span>
      </div>
      <div class="color-detail">Color : <span class=${item.color}></span></div>
      <div class="rating-detail">Rating : ${item.rating.rate}</div>
    </div>
    <button class="remove-from-cart">Remove From Cart</button>`
    cartItems.appendChild(card);
    const div = document.createElement("div");
    div.className = "item-with-price";
    div.innerHTML = `<span>${item.title.substr(0,10)}</span> <span>$${item.price}</span>`
    itemsSummary.appendChild(div);
   });
   total.innerText = "$"+count;
}
getCartDetails(items);

document.querySelectorAll(".remove-from-cart").forEach((button,idx) =>{
    button.addEventListener("click",()=>{
        items.splice(idx,1);
      let strItems =  JSON.stringify(items);
       localStorage.setItem("cart",strItems);
       getCartDetails(items);
       window.location.reload();
    })
})