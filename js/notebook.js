function sum() {
  return [].reduce.call(arguments, function (a, b) {
    return a + b;
  });
}
sum(1, 2, 3);
