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
         out += '<img src="' + data[key].image + '" >';
         out += '<button>Купить</button>';
         out += '</div>';
      }
       let goods = document.getElementById('goods');
      goods.innerHTML = out;

   })
}
console.log('pizdec')
