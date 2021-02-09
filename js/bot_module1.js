// !1

// Пиши код ниже этой строки

const productName = "Дроид";
const pricePerItem = 2000;

// console.log(productName);
// 'Дроид'

// console.log(pricePerItem);
// 2000
//!2
// Базовый код
let productName = "Дроид";
let pricePerItem = 2000;

// Пиши код ниже этой строки
productName = "Ремонтный дроид";

pricePerItem = 3500;
//!3
const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;
//!4
// Базовый код
const pricePerItem = 3500;
const orderedQuantity = 4;

// Пиши код ниже этой строки
const totalPrice = pricePerItem * orderedQuantity;
//!5
// Базовый код
const productName = "Дроид";
const pricePerItem = 3500;

// Пиши код ниже этой строки
const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;
//!6
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
console.log(totalPrice);
const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
//!7
// Пиши код ниже этой строки
function sayHi() {
  // Тело функции
  console.log("Привет, это моя первая функция!");
}

// 2. Вызовы функции multiply
sayHi();
//!8
// Пиши код ниже этой строки
function add(a, b, c) {
  console.log(`Результат сложения равен ${a + b + c}`);
  // Пиши код выше этой строки
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//!9
function add(a, b, c) {
  //  Пиши код ниже этой строки

  return a + b + c;

  //  Пиши код выше этой строки
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));
//!10
function makeMessage(name, price) {
  // Пиши код ниже этой строки
  const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
  // Пиши код выше этой строки
  return message;
}
//!11
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Пиши код ниже этой строки
  const totalPrice = orderedQuantity * pricePerItem;

  // Пиши код выше этой строки
  return totalPrice;
}
//!12
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Пиши код ниже этой строки
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

  // Пиши код выше этой строки
  return message;
}
//!13
function isAdult(age) {
  // Пиши код ниже этой строки
  const passed = age >= 18;

  // Пиши код выше этой строки
  return passed;
}
//!14
function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  // Пиши код ниже этой строки

  const isMatch = SAVED_PASSWORD === password;

  // Пиши код выше этой строки
  return isMatch;
}
//!15
function checkAge(age) {
  let message;

  if (age >= 18) {
    // Дополни эту строку

    message = "Вы совершеннолетний человек";

    console.log(message);
  } else {
    age <= 18;
    message = "Вы не совершеннолетний человек";
    console.log(message);
  }

  return message;
}

//!16
function checkStorage(available, ordered) {
  let message = "Заказ оформлен, с вами свяжется менеджер";
  // Пиши код ниже этой строки
  if (available >= ordered) {
    console.log(message);
  } else {
    message = "На складе недостаточно товаров!";
  }
  // Пиши код выше этой строки
  return message;
}

//!17
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Пиши код ниже этой строки
a += 2;
b -= 4;
c *= 3;
d /= 10;

//!18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message = "Недостаточно средств на счету!";
  // Пиши код ниже этой строки
  if (customerCredits < pricePerDroid * orderedQuantity) {
    console.log(message);
  } else {
    message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${
      customerCredits - pricePerDroid * orderedQuantity
    } кредитов`;
  }
  // Пиши код выше этой строки
  return message;
}
//!19
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    // Дополни эту строку
    message = "Отменено пользователем!";
  } else if (password === ADMIN_PASSWORD) {
    // Дополни эту строку
    message = "Добро пожаловать!";
  } else {
    message = "Доступ запрещен, неверный пароль!";
  }

  return message;
}
//!20
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  if (ordered === 0) {
    message = "В заказе еще нет товаров";
  } else if (available <= ordered) {
    message = "Слишком большой заказ, на складе недостаточно товаров!";
  } else {
    message = "Заказ оформлен, с вами свяжется менеджер";
  }
  // Пиши код выше этой строки
  return message;
}
//!21
function isNumberInRange(start, end, number) {
  const isInRange = start <= number && number <= end; // дополни эту строку

  return isInRange;
}
//!22
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // дополни эту строку

  return canAccessContent;
}
//!23
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Дополни эту строку

  return isNotInRange;
}
//!24
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Пиши код ниже этой строки
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }

  // Пиши код выше этой строки
  return discount;
}
//!25
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки

  message = ordered > available ? "На складе недостаточно товаров!" : "Заказ оформлен, с вами свяжется менеджер";
  // Пиши код выше этой строки
  return message;
}
//!26
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Пиши код ниже этой строки
  message = password === ADMIN_PASSWORD ? "Доступ разрешен" : "Доступ запрещён, неверный пароль!";
  // Пиши код выше этой строки
  return message;
}
//!27
function getSubscriptionPrice(type) {
  let price;
  // Пиши код ниже этой строки

  switch (
    type // Дополни эту строку
  ) {
    case "starter": // Дополни эту строку
      price = 0; // Дополни эту строку
      break;

    case "professional": // Дополни эту строку
      price = 20; // Дополни эту строку
      break;

    case "organization": // Дополни эту строку
      price = 50; // Дополни эту строку
      break;
  }
}
//!28
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  let passwird = "jqueryismyjam";

  switch (password) {
    case null:
      message = "Отменено пользователем!";
      break;
    case "jqueryismyjam":
      message = "Добро пожаловать!";
      break;
    default:
      message = "Доступ запрещён, неверный пароль!";
  }

  return message;
}
//!29
function getShippingCost(country) {
  let message;
  let deliveryFee;
  let country;
  // Пиши код ниже этой строки
  switch (country) {
    case "Китай":
      country = "Китай";
      deliveryFee = 100;
      message = `Доставка в ${country} будет стоить ${deliveryFee} кредитов`;
      break;
    case "Чили":
      country = "Чили";
      deliveryFee = 250;
      message = `Доставка в ${country} будет стоить ${deliveryFee} кредитов`;
      break;
    case "Австралия":
      country = "Австралия";
      deliveryFee = 170;
      message = `Доставка в ${country} будет стоить ${deliveryFee} кредитов`;
      break;
    case "Ямайка":
      country = "Ямайка";
      deliveryFee = 120;
      message = `Доставка в ${country} будет стоить ${deliveryFee} кредитов`;
      break;
    default:
      message = "Извините, в вашу страну доставки нет";
      break;
  }
  // Пиши код выше этой строки
  return message;
}
//!30
function getNameLength(name) {
  const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

  return message;
}

//!31
const courseTopic = "JavaSript для начинающих";
// Пиши код ниже этой строки

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Пиши код выше этой строки
//!32
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Дополни эту строку

  return substring;
}
//!33
function formatMessage(message, maxLength) {
  let result;
  // Пиши код ниже этой строки
  if (message.length > maxLength) {
    result = message.slice(0, maxLength) + "...";
  } else {
    result = message;
  }
  // Пиши код выше этой строки
  return result;
}
//!34
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
}

//!35
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Дополни эту строку
  return result;
}

//!36
function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  message = message.toLowerCase();
  result = message.includes("spam") || message.includes("sale");
  // Пиши код выше этой строки
  return result;
}
