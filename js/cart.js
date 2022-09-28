var cart = {};   //корзина


$.getJSON('goods.json', function (data) {
   var goods = data; //все тоары
   console.log(goods);
   checkCart();
   console.log(cart);
   showCart(); //вывод товаров на страницу


   function showCart() {
      if (Object.keys(cart).length === 0) {
         var out = '<div class = "inform">Корзина пуста. Добавьте товары <a href = "/internet_store.com">Главная страница</a></div>';
         mycart.insertAdjacentHTML('afterbegin', out);
      } else {
         var out = '';
         for (let key in cart) {
            out += '<button class="delete" data-art="' + key + '">Удалить</button>';
            out += '<img src="' + goods[key].image + '" width = "50" height = "50">';
            out += goods[key][name];
            out += '<button class = "minus" data-art="' + key + '">---</button>';
            out += cart[key];
            out += '<button class = "plus" data-art="' + key + '">+</button>';
            out += cart[key] * goods[key][cost];
            out += '<br>';
         }
         let mycart = document.querySelector("#my-cart");
         mycart.insertAdjacentHTML('afterbegin', out);

         btnplus = $('.plus');
         btnplus.onclick = plusGoods;

         function plusGoods() {
            var articul = $(this).attr('data-art');

            cart[articul]++;
            localStorage.setItem('cart', JSON.stringify(cart));
            showCart();
         }

         btnminus = $('.minus');
         btnminus.onclick = minusGoods;

         function minusGoods() {
            var articul = $(this).attr('data-art');

            if (cart[articul] > 1) {
               cart[articul]--;
            } else {
               delete cart[articul];
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            showCart();
         }

         btndelete = $('.delete');
         btndelete.onclick = deleteGoods;

         function deleteGoods() {
            var articul = $(this).attr('data-art');
            delete cart[articul];
         }
      }
   }

});

function checkCart() {
   if (localStorage.getItem('cart') != null) {
      cart = JSON.parse(localStorage.getItem('cart'));
   }
}

