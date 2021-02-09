function makeTask(data) {
  const completed = false;
  const category = "Общее";
  const priority = "Обычный";

  // Пиши код ниже этой строки
  // Пиши код выше этой строки
}

const hotel = {
  // nameOfHotel: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

const { nameOfHotel: hotelName = "hotel", stars: hotelStars, status: hotelStatus = "empty" } = hotel; // DEFAULT

// console.log(hotelName, hotelStatus); // "Resort Hotel", 5, "empty"
