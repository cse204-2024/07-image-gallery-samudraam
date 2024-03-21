const images = [
  "https://images.unsplash.com/photo-1487452066049-a710f7296400?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZmZpdGl8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1611063158871-7dd3ed4a2ac8?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhZmZpdGl8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1603328203114-8b9c370b374d?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhZmZpdGl8ZW58MHx8MHx8fDA%3D",
];

function initialize() {
  for (i = 0; i < images.length; i++) {
    console.log("hi");
    let articleElement = document.createElement("article");
    let imageElement = document.createElement("img");
    imageElement.src = images[i];
    imageElement.width = 100;
    imageElement.height = 100;
    document.body.appendChild(imageElement);
  }
}
initialize();
