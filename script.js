

function renderData(data){
   data.forEach(item => {
    if(item.category === "men's clothing"){
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `
        <img
          src="${item.image}"
          alt="cloth"
        />
        <div class="card-details">
          <div class="price-size-box">
            <span>$${item.price}</span>
            <span>M</span>
          </div>
          <div class="color-detail">Color : Red</div>
          <div class="rating-detail">Rating : ${item.rating.rate}</div>
        </div>
        <button class="add-to-cart">Add To Cart</button>`
      document.querySelector(".men-section .list").appendChild(card);
    }
    else if(item.category === "women's clothing"){
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
            <span>M</span>
          </div>
          <div class="color-detail">Color : Red</div>
          <div class="rating-detail">Rating : ${item.rating.rate}</div>
        </div>
        <button class="add-to-cart">Add To Cart</button>`
      document.querySelector(".women-section .list").appendChild(card);
    }
    else if(item.category === "jewelery"){
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
            <span>M</span>
          </div>
          <div class="color-detail">Color : Red</div>
          <div class="rating-detail">Rating : ${item.rating.rate}</div>
        </div>
        <button class="add-to-cart">Add To Cart</button>`
      document.querySelector(".jewellery-section .list").appendChild(card);
    }
    else if(item.category === "electronics"){
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
            <span>M</span>
          </div>
          <div class="color-detail">Color : Red</div>
          <div class="rating-detail">Rating : ${item.rating.rate}</div>
        </div>
        <button class="add-to-cart">Add To Cart</button>`
      document.querySelector(".electronic-section .list").appendChild(card);
    }
   });
}


async function fetchData(){
    try{
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    // console.log(result);
    renderData(result);
    }
    catch(error){
        console.log(error.message);
    }
}
fetchData();