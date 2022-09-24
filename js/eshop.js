$('document').ready(function () {
   loadGoods();
});

function loadGoods() {

  $.getJSON('goods.json', function (data) {
      let goods = document.getElementById('goods');
      var out = '';
      for (var key in data) {
         goods.innerHTML += '<div class="single_goods">';
         goods.innerHTML += '<h3>' + data[key]['name'] + '</h3>';
         goods.innerHTML += '<p>Цена: ' + data[key]['cost'] + '</p>';
         goods.innerHTML += '<img src="' + data[key].image + '" >';
         goods.innerHTML += '<button data-art="' + key + '">Купить</button>';
         goods.innerHTML += '</div>';
      }
   })
}
console.log('pizdec2')
