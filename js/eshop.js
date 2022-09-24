var cart = {}; //packet



$('document').ready(function () {
   loadGoods();
   checkCart();
   addToMinicart()
});

function loadGoods() {

   $.getJSON('goods.json', function (data) {
      var out = '';

      for (var key in data) {
         out += '<div class="single_goods">';
         out += '<h3>' + data[key]['name'] + '</h3>';
         out += '<p>Цена: ' + data[key]['cost'] + '</p>';
         out += '<img src="' + data[key].image + '" width = 150px height = 150px >';
         out += '<button class="add-to-cart" data-art="' + key + '">Купить</button>';
         out += '</div>';
      }

      let goods = document.getElementById('goods');
      goods.insertAdjacentHTML("afterbegin", out);
      
let btnbuy = document.querySelector('.add-to-cart');
btnbuy.addEventListener("click", addToCart);
console.log(btnbuy);

   })
}


let btnbuy = document.querySelector('.add-to-cart');
btnbuy.addEventListener("click", addToCart);
console.log(btnbuy);

function addToCart() {
   //add merchandaise in pocket
   var articul = $(this).attr('data-art');
   if (cart[articul] != undefined) {
      cart[articul]++;
   }
   else {
      cart[articul] = 1
   }
   localStorage.setItem('cart', JSON.stringify(cart));

   console.log(cart);
   addToMinicart(); //вывожу корзину при добавлении товара
}

function checkCart() {
   if (localStorage.getItem('cart') != null) {
      cart = JSON.parse(localStorage.getItem('cart'));
   }
}


//функция для вывода корзины
function addToMinicart() {
   var ont = '';
   for (var keu in cart) {
      ont += '<p>Артикул: ' + ont + '</p>';
      ont += '<p>Количество товаров: ' + cart[ont] + '</p>';
   }
   let minicart = document.getElementById('mini_cart');
   minicart.insertAdjacentHTML("afterbegin", ont);

}
