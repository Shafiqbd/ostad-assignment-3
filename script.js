// question-1
const getDayFromDate = (date) => {
  return new Date(date).getDay();
};
document.getElementById("dayName").innerHTML = getDayFromDate("2023-06-1");

// question-2

const squareRootOfSumSquare = (array) => {
  let sumWithSquare = 0;
  for (let i = 0; i < array.length; i++) {
    sumWithSquare += Math.pow(array[i], 2);
  }
  return Math.sqrt(sumWithSquare);
};

document.getElementById("squareNumber").innerHTML = squareRootOfSumSquare([3, 4, 5]);

// question-3

const isPrimeNumber = (number) => {
    if(number <=1) return false;
    if(number%2 === 0) return false;
    return true;
};

document.getElementById("isPrimeNumber").innerHTML = isPrimeNumber(11);

// question-4

function openNewWindow(url, width, height) {
    var attribute = 'width=' + width + ',height=' + height + ',top=300' + ',left=400';
    window.open(url, 'Test', attribute);
  }
  
  openNewWindow('https://www.example.com', 800, 600);
  

// question-5

function getBrowserVersionAndName() {
   return `Browser Name is: ${window.navigator.appName} and version is: ${window.navigator.appVersion}`
  }

  document.getElementById("browserName").innerHTML = getBrowserVersionAndName();

// question-6
var locationElement  = document.getElementById("geoLocation");

function getCurrentLocation() {

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    locationElement.innerHTML = "Geolocation is not supported by this browser.";
  }

  }

  function showPosition(position) {
    locationElement.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
  }
  
  getCurrentLocation();

// question-7
//a
document.addEventListener("click", function(event) {
  var x = event.clientX;
  var y = event.clientY;
  alert("Coordinates: " + x + ", " + y);
});

//b
document.addEventListener("keydown", function(event) {
  alert(event.keyCode);
});

//c
const changeImageSrc =()=>{
   document.getElementById('image').src = 'ghost.jpg';
}

// question-8

document.getElementById('changeBtn').addEventListener("click", function(event) {
  document.getElementById('changeText').innerHTML = 'Hello World'
  
});

// question-9
// see form.html file

// question-10
const highlightParagraph =()=> {
  var paragraph = document.getElementById("changeBg");
  paragraph.classList.add("highlight");
}

// question-11
const showList =()=> {
  var ul = document.getElementById("list");
  for (var i = 1; i <= 5; i++) {
    var li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  }

}

// question-12

const onClickChangeImageSrc =()=>{
  document.getElementById('image').src = 'ghost.jpg';
}