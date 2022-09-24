$('document').ready(function () {
   loadGoods();
});

function loadGoods() {

  $.getJSON('goods.json', function (data) {
      let goods = document.getElementById('goods');
      var out = '';
   for (var key in data) {
         out += '<div class="single_goods">';
         out += '<h3>' + data[key]['name'] + '</h3>';
         out += '<p>Цена: ' + data[key]['cost'] + '</p>';
         out += '<img src="' + data[key].image + '" >';
         out += '<button data-art="' + key + '">Купить</button>';
         out += '</div>';
      }

      let goods = document.getElementById('goods');
      goods.insertAdjacentElement("afterbegin", out);

   })
}
console.log('pizdec3')
