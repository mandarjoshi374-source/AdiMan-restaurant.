let cart = [];

function addToCart(item) {
  cart.push(item);
  displayCart();
}

function displayCart() {
  let cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  cart.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    cartList.appendChild(li);
  });
}

/* SEARCH FUNCTION */
function searchFood() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.querySelectorAll(".item");

  items.forEach(item => {
    let name = item.querySelector("h3").textContent.toLowerCase();

    if (name.includes(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// --- FUNCTION FOR INDEX.HTML (Add to Cart) ---
function addToCart(itemName, price) {
    // 1. Get existing cart from LocalStorage or start a new array
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    
    // 2. Add the new item
    cart.push({ name: itemName, price: price });
    
    // 3. Save it back to LocalStorage
    localStorage.setItem('myCart', JSON.stringify(cart));
    
    alert(itemName + " added to cart!");
}

function placeOrder(){

let name=document.getElementById("customerName").value;

if(name==""){
document.getElementById("successMsg").innerHTML="Please Enter Your Name!";
return;
}

if(total<=0){
document.getElementById("successMsg").innerHTML="Cart is Empty!";
return;
}

document.getElementById("successMsg").innerHTML=
"🎉 Thank You " + name + "! Your Order is Placed Successfully.";

document.getElementById("cartList").innerHTML="";
document.getElementById("total").innerText=0;
document.getElementById("customerName").value="";

total=0;
}