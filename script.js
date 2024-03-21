//Image Array
const images = [
  "https://images.unsplash.com/photo-1487452066049-a710f7296400?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZmZpdGl8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1611063158871-7dd3ed4a2ac8?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhZmZpdGl8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1603328203114-8b9c370b374d?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhZmZpdGl8ZW58MHx8MHx8fDA%3D",
];

//Function Call
initialize();

function initialize() {
  for (i = 0; i < images.length; i++) {
    let articleElement = document.createElement("article");
    let imageElement = document.createElement("img");
    imageElement.src = images[i];
    imageElement.width = 400;
    imageElement.height = 250;
    imageElement.id = "img" + (i + 1);
    imageElement.class = "myImages";
    document.body.appendChild(imageElement);
  }
}
//display Image Modal
function displayImage(imageId) {
  console.log("this is " + imageId);
  // let modal = document.createElement("div");
  // modal.style.display = "none";
  // modal.style.position = "fixed"
  let myImg = document.getElementById(imageId);
  imageId.width = 600;
  imageId.height = 450;
  document.getElementById(myImg).addEventListener("click", function () {
    exitImage(myImg);
  });

  // let img = document.getElementById(imageId);
}

//On x close modal
function exitImage(myImg) {
  let myImg = document.getElementById(imageId);
  myImg.width = 600;
  myImg.height = 450;
}

document.getElementById("img1").addEventListener("click", function () {
  displayImage("img1");
});

document.getElementById("img2").addEventListener("click", function () {
  displayImage("img2");
});

document.getElementById("img3").addEventListener("click", function () {
  displayImage("img3");
});
