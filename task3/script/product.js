const buy = document.getElementById('buy');
const listing = document.getElementById('listing');

buy.addEventListener('click', ()=>{
    var dibeli= document.createTextNode("Dimasukan dalam keranjang!");
    var p = document.createElement("p");
    p.appendChild(dibeli);
    listing.appendChild(p);
    buy.textContent= "Dibeli"
  });