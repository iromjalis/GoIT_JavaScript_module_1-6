//!1============================================
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

////for (let i = 0; i < orderedItems.length; i += 1) {
////totalPrice += orderedItems[i];
////}
//   orderedItems.forEach(function (orderedItem) {
//     totalPrice += orderedItem;
//   })
//   return totalPrice;
// }
//!2==================================
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

////  for (let i = 0; i < numbers.length; i += 1) {
////  if (numbers[i] > value) {
////  filteredNumbers.push(numbers[i]);}}
// numbers.forEach(function (number){
// if (number > value){
// filteredNumbers.push(number)}})

//   return filteredNumbers;
// }
//!3================================
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   //for (let i = 0; i < firstArray.length; i += 1) {
//     //if (secondArray.includes(firstArray[i])) {
//       //commonElements.push(firstArray[i]);}}
// firstArray.forEach(function (item){
// if (secondArray.includes(item)){
//     commonElements.push(item)}
// })
//   return commonElements;
// }
//!4==============================

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }

//!5=========================
// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;
// ;

//!6===================================
// const calculateTotalPrice = (orderedItems) =>{
//   let totalPrice = 0;

//   orderedItems.forEach((item) =>{
//     totalPrice += item;
//   });

//   return totalPrice;
// }
//!7=========================================
// const filterArray = (numbers, value) =>{
//   const filteredNumbers = [];

//   numbers.forEach( (number) =>{
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }
//!8========================================
// const getCommonElements = (firstArray, secondArray)=> {
//   const commonElements = [];

//   firstArray.forEach((element)=> {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// }
//!9===========================================
// function changeEven(numbers, value) {
//   const array = [];
//   // Пиши код ниже этой строки
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       number += value;
//       array.push(number);
//     } else {
//       array.push(number);
//     }
//   });
//   return array;
//   // Пиши код выше этой строки
// }
// console.log(changeEven([17, 24, 68, 31, 42], 100));
//!10==================================================
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);
//!11=================================================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const titles = books.map(book => book.title);
//!12===================================================
// const genres = books.flatMap(book => book.genres);
//!13==============================================
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };
//!14========================================
// const getUserEmails = users => {
//   return users.map(user => user.email)

//   };
//!15================================
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((element) => {
//   if (element % 2 === 0) {
//     return element;
//   }
// });
// const oddNumbers = numbers.filter((element) => {
//   if (element % 2 !== 0) {
//     return element;
//   }
// });
// console.log(evenNumbers);
// console.log(oddNumbers);
//!16=========================
// const allGenres = books.flatMap((book) => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);
// console.log(uniqueGenres);
//! Пример => const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);

//!17========================================

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);
//!18=============================================
// const getUsersWithEyeColor =  (users, color) => {
//   return users.filter (user => {
//     if (user.eyeColor === color)
//     return user
//   })
// }

//!19====================================================
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => {
//     if (user.age > minAge && user.age < maxAge) return user;
//   });
// };
//!20===================================================
// const users = [
//   {
//     name: 'Moore Hensley',
//     friends: ['Sharron Pace'],
//   },
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
//   {
//     name: 'Elma Head',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//   },
//   {
//     name: 'Carey Barr',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//   },
//   {
//     name: 'Blackburn Dotson',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//   },
//   {
//     name: 'Sheree Anthony',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//   },
// ];
// const array = [];
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => {
//     if (user.friends.includes(friendName)) return array.push(user.name);
//   });
// };
//!21===============================================================
// const getFriends = (users) => {
//    const arr = users.flatMap(user => user.friends)
//    return arr.filter((item, index) => arr.indexOf(item) === index)
// };
//!22===================================================
// const getActiveUsers = (users) => {
//   return users.filter((user) => user.isActive);
// };
//!23====================================================
// const getInactiveUsers = (users) => {
//   return users.filter(user => !user.isActive);
// };
//!24================================================
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
// ];
// const BOOK_TITLE = "Сон смешного человека";
// const AUTHOR = "Роберт Шекли";
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
//!25=======================================
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email)

// };
//!26=========================================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(item => item % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(item => item % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(item => item % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(item => item % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(item => item % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(item => item % 2 !== 0);
//!27================================================
// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive)
// };
//!28==============================================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some(item => item % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(item => item % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(item => item % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(item => item % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(item => item % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(item => item % 2 !== 0);
//!29==================================================
// const isAnyUserActive = users => {
//   return users.some(item => item.isActive)
// };
//!30=================================
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, value) => acc + value, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;
//!31========================================
// const players = [
//   { name: "Манго", playtime: 1270, gamesPlayed: 4 },
//   { name: "Поли", playtime: 469, gamesPlayed: 2 },
//   { name: "Аякс", playtime: 690, gamesPlayed: 3 },
//   { name: "Киви", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);
//!32===============================================
// const calculateTotalBalance = (users) => users.reduce((total, user) => total + user.balance, 0);
//!33==============================
// const getTotalFriendCount = users =>
//   users.reduce((total, user) => total + user.friends.length, 0);
//!34==============================================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
//!35============================================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=> a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b)=> b-a);
//!36===================================================
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
//   'Говард Лавкрафт'
// ];

// const authorsInAlphabetOrder = [...authors].sort((a,b)=> a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));
//!37===========================
// const sortedByAuthorName = [...books].sort((a, b) => {
//   return a.author[0] > b.author[0] ? 1 : -1;
// });
// console.table(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((a, b) => {
//   return b.author[0] >= a.author[0] ? 1 : -1;
// });

// console.table(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByDescentingRating);
//!38============================================
// const sortByAscendingBalance = users => {
//   const arr = [...users];
//   return arr.sort((a, b) => a.balance - b.balance);
// };
//!39=================================================
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
//!40=================================================
// const sortByName = users => {
//   return [...users].sort((a, b) => (a.name[0] >= b.name[0] ? 1 : -1));
// };
//!41================================================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books]
// .sort((a, b) => {
//   const result = a.author[0] > b.author[0];

//   if (result) {
//     return 1;
//   }

//   if (!result) {
//     return -1;
//   }
// })
//   .filter(book => book.rating >= MIN_BOOK_RATING)
//   .map(book => book.author);
//!42==================================================
// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort((a, b) => (a.friends.length >= b.friends.length ? 1 : -1))
//     .map(user => user.name);
// };
//!43========================================================
// const getSortedFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter((user, index, array) => array.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b));
// };
//!44===================================
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter(user => user.gender === gender)
//     .reduce((acc, user) => (acc += user.balance), 0);
// };
