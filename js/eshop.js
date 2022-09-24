$('document').ready(function () {
   loadGoods();
});
function loadGoods() {

   $.getJSON('goods.json', function (data) {
      var out = '';
      let single = document.createElement('div');
      single.classList.add('single_goods')
      for (var key in data) {

         single.innerHTML += '<h3>' + data[key]['name'] + '</h3>';
         single.innerHTML += '<p>Цена: ' + data[key]['cost'] + '</p>';
         single.innerHTML += '<img src="' + data[key].image + '" >';
         single.innerHTML += '<button class="add-to-cart" data-art="' + key + '">Купить</button>';

      }

      let goods = document.getElementById('goods');
      goods.insertAdjacentElement("afterbegin", single);

      let btnbuy = document.querySelector(".add-to-cart");
      btnbuy.onclick() = addToCart();

   })
}
console.log('pizdec1')
