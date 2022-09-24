var cart = {}; //packet



$('document').ready(function () {
   loadGoods();
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

     let btnbuy = querySelectorAll('.add-to-cart');
      btnbuy.onclick = addToCart;


   })
}
console.log('pizdec2')

function addToCart() {
   //add merchandaise in pocket
   var articul = $(this).attr('data-art');
   cart[articul] = 1;
   console.log(cart);

}
