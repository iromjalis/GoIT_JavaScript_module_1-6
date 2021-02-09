/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: 'apple', price: 50 }
 * { name: 'vinegar', price: 70 }
 * { name: 'lemon', price: 60 }
 * { name: 'strawbery', price: 110 }
 */

const cart = {
  items: [], //!массив, где собираются все данные корзины
  getItems() {
    return this.items;
  },
  add(product) {
    // product.quantity = "1"; //!добавили свойство в объект items
    // this.items.push(product); //!добавили в корзину product
    for (const item of this.items) {
      if (item.name === product.name) {
        console.log("Такой продукт уже есть:", product.name);
        console.log("item.quantity: ", item.quantity);
        item.quantity += 1;

        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i]; //!упрощение чтения кода
      if (productName === item.name) {
        console.log("Название удаляемого", productName);
        console.log("Индекс для удаления", i);
        items.splice(i, 1); //!возвращает то, что удалили
      }
    }
    // console.log(productName);
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },
};
console.table(cart.getItems());
cart.add({ name: "apple", price: 50 }); //!добавили в корзину
cart.add({ name: "vinegar", price: 70 });
cart.add({ name: "vinegar", price: 70 });
console.table(cart.getItems());

cart.remove("vinegar");
console.table(cart.getItems());

// cart.clear();//!очистить массив
// console.table(cart.getItems());
console.log("Total: ", cart.countTotalPrice());
