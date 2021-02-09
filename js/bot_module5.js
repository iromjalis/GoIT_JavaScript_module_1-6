//!1
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);

//!2==========================================================
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

//!3=================================================
// === ПРИМЕР ===
// function User(name, email, age) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User("Манго", "mango@mail.com");
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User("Поли", "poly@mail.com");
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }
// === Задание ===
// Объяви функцию-конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, model и
//price, значениями которых должны быть переданные аргументы во время её
//вызова с оператором new.

// function Car(brand, model, price){
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

// }
// const audi = new Car ('Audi', 'Q3', 36000)
// console.log(audi)
//!4============================================================

// Объект настроек
// Функции-конструкторы всегда принимают большое количество входных данных для
//свойств будущего объекта. Поэтому, к ним также можно применить паттерн «Объект
//настроек», передавая один объект с логично именованными свойствами, вместо несвязанного набора аргументов.

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// const poly = new User({ name: 'Поли', email: 'poly@mail.com' });

// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
//!5=============================================================
// Мы уже знаем что такое прототип объекта, свойство __proto__ и как происходит
//поиск отсутствующих свойств объекта по цепочке прототипов. Во время вызова
//функции-конструктора через new и создания нового объекта со свойствами, ему также устанавливается прототип.

// У каждой функции, кроме стрелочных, есть свойство prototype, значение которого
//это объект с единственным свойством constructor, указывающим на саму функцию-конструктор.

// function User() {}
// console.log(User.prototype); // { constructor: User }
// При вызове функции-конструктора и создании объекта через new, объект в свойстве
// prototype функции-конструктора будет прототипом создаваемого объекта.

// const mango = new User();
// console.log(User.prototype.isPrototypeOf(mango)); // true
// В свойство prototype можно записывать свойства и методы, которые будут доступны
// всем объектам созданным этой функцией-конструктором. Методы в prototype будут
//вызываться объектами созданными функцией-конструктором, поэтому для доступа к
//свойствам вызываемого объекта в методах используется ключевое слово this.

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// User.prototype.getEmail = function () {
//   return this.email;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ name: "Манго", email: "mango@mail.com" });

// console.log(mango.getEmail()); // mango@mail.com
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

// }
//   Car.prototype.getPrice = function(){
//     return this.price;
//   }
//   Car.prototype.changePrice = function(newPrice){
//   this.price = newPrice;}
//!6================================================
// function Storage(items ) {
//   this.items = items;
// };
// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//   return this.items.push(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//   for (let i = 0; i < this.items.length; i++) {
//     if (this.items[i] === item) {
//       this.items.splice(i, 1);
//       return this.items;
//     }
//   }
// };

// Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор",
//!7===============================================
// function StringBuilder(baseValue, value) {
//   this.baseValue = baseValue;
//   this.value = value;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.baseValue;
// };
// StringBuilder.prototype.padStart = function (str) {
//   this.baseValue = str + this.baseValue;
//   return str;
// };
// StringBuilder.prototype.padEnd = function (str) {
//   this.baseValue += str;
//   return;
// };
// StringBuilder.prototype.padBoth = function (str) {
//   this.baseValue = str + this.baseValue + str;
//   return;
// };

// Пиши код выше этой строки
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log;
//!8====================================================
// class Car {}
//!9===============================================
// class Car{
//   brand;
//   model;
//   price;

//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }}
//!10==========================================
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     return (this.price = newPrice);
//   }
// }
//!11==========================================
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//     getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
//!12===================================================
// class Storage {
//   #items;

//   constructor( items ) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
// }

// Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems());
//!13=====================================
// class StringBuilder {
//   #value;

//   constructor(value){
//   this.#value = value}
//   getValue(){
//   return this.#value;}

//   padEnd(str){
//   this.#value += str;}

// padStart  (str) {
// this.#value = str + this.#value;}

// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='
//!14===================================================
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand){
//   this.#brand = newBrand}

//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

//!15==============================
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE) {
//       return (this.#price = newPrice);
//     } else if (newPrice > Car.MAX_PRICE) {
//       return this.#price;
//     }
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
//!16===========================================
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if (price > this.#MAX_PRICE) {
//       return "Внимание! Цена превышает допустимую.";
//     } else return "Всё хорошо, цена в порядке.";
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

//!17==========================================
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// Пиши код ниже этой строки
// class Admin extends User {
//   AccessLevel;
//   constructor(AccessLevel) {
//     this.AccessLevel = AccessLevel;
//   }
//   static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
// }
//!18======================================================
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
// Пиши код ниже этой строки
//   accessLevel;

//   constructor({ email, accessLevel }) {
// Вызов конструктора родительского класса User
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
//!19=====================
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//  blacklistedEmails= [];
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   accessLevel;
//   constructor({ email, accessLevel,  }) {
//     super(email);
//     this.accessLevel = accessLevel;

//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//    return this.blacklistedEmails.includes(email);
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
