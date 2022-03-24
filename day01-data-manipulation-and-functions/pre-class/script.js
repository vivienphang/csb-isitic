var computeAreaOfCircle = function () {
  var pi = 3.14;
  var radius = 6;
  var area = pi * radius * radius;

  return area;
};

var repeatTheInput = function (input) {
  console.log(input);
  console.log(input);
};

var main = function (input) {
  console.log("i love pasta actually");

  var area = computeAreaOfCircle();

  repeatTheInput(input);

  var myOutputValue =
    "i love cheese. </br> the area is " +
    area +
    "</br> you have input that you like " +
    input;
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = "hello " + input + ". How are you?";
  return myOutputValue;
};

var metricMain = function (input) {
  var myOutputValue = "The total distance in KM is " + distanceInMiles + "!";
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "wow hello world";
  return myOutputValue;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
