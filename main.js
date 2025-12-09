let selectedLight = "";
const redLight = document.getElementById("traffic-light-red");
const orangeLight = document.getElementById("traffic-light-orange");
const greenLight = document.getElementById("traffic-light-green");

const stopButton = document.getElementById("stop");

stopButton.addEventListener("click", function () {
  if (selectedLight === "" || selectedLight === "orangeGreen") {
    redLight.style.backgroundColor = "red";
    orangeLight.style.backgroundColor = "gray";
    selectedLight = "red";
  }
});

const waitButton = document.getElementById("wait");
waitButton.addEventListener("click", function () {
  if (selectedLight === "red") {
    orangeLight.style.backgroundColor = "orange";
    selectedLight = "orangeRed";
  }
  if (selectedLight === "green") {
    greenLight.style.backgroundColor = "gray";
    orangeLight.style.backgroundColor = "orange";
    selectedLight = "orangeGreen";
  }
});

const goButton = document.getElementById("go");
goButton.addEventListener("click", function () {
  console.log(selectedLight);
  if (selectedLight === "orangeRed") {
    orangeLight.style.backgroundColor = "gray";
    redLight.style.backgroundColor = "gray";

    greenLight.style.backgroundColor = "green";
    selectedLight = "green";
  }
});
