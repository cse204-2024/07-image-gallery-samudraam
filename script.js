//Image Array
const images = [
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //1
  "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=2755&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //2
  "https://images.unsplash.com/photo-1560583306-bd304a162229?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN5YmVycHVua3xlbnwwfDB8MHx8fDA%3D", //3
  "https://images.unsplash.com/photo-1557515126-1bf9ada5cb93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D", //4
  "https://plus.unsplash.com/premium_photo-1690576974191-e9a3cb22591e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D", //5
  "https://images.unsplash.com/photo-1571331154805-c2a013108395?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D", //6
  "https://images.unsplash.com/Ys-DBJeX0nE.JPG?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D", //7
  "https://images.unsplash.com/photo-1555397430-57791c75748a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //8
  "https://images.unsplash.com/photo-1552668355-4f6d28b9dc7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8ODMxMTc4OXx8ZW58MHx8fHx8", //9
  "https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8bjFrVkI0cEprUDh8fGVufDB8fHx8fA%3D%3D", //10
  "https://images.unsplash.com/photo-1587398458654-6a55d2d0dd61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8NTc0MzMxfHxlbnwwfHx8fHw%3D", //11
  "https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xwY3F1OGNxaG1pRXx8ZW58MHx8fHx8", //12
];

//Function Call
initialize();
function initialize() {
  var imgGal = document.getElementById("image-gal");
  for (i = 0; i < images.length; i++) {
    let articleElement = document.createElement("article");
    let imageElement = document.createElement("img");
    imageElement.src = images[i];
    imageElement.width = 400;
    imageElement.height = 250;
    imageElement.id = "img" + i;
    imageElement.class = "myImages";
    document.body.appendChild(imageElement);
    imgGal.appendChild(imageElement);
  }
}

//display image modal
function displayImage(imageId) {
  //get id of elm so we can dupe
  let text = [...imageId];
  let id = text[3];
  console.log(id);

  //create modal + content + img  :< {i hate this}
  let displayModal = document.createElement("div");
  displayModal.style.cssText = `
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

  let modalContent = document.createElement("div");
  modalContent.style.cssText = `
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed; 
  top: 0;
  left: 0; 
  width: 100vw;
  height: 100vh; 
  overflow-y: auto; 
  background: rgba(0, 0, 0, 0.7); 
  border-radius: 0; 
`;

  let ie = document.createElement("img");
  ie.src = images[id];
  ie.style.cssText = `
  max-width: 90vw; 
  max-height: 90vh; 
  width: auto;
  height: auto;
`;
  ie.id = "displayImage";
  ie.className = "img-dis";

  let closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.style.cssText = `
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background: none;
    margin-right:30px;
    color: white;
    font-family: "VT323", monospace;
    font-size: 50px;
    cursor: pointer;
  `;

  closeButton.addEventListener("click", function () {
    displayModal.remove();
  });

  let next = document.createElement("button");
  next.textContent = ">";
  next.style.cssText = `
    position: absolute;
    align-content: center;
    right: 50px;
    border: none;
    background: none;
    margin-right:30px;
    color: white;
    font-family: "VT323", monospace;
    font-size: 100px;
    cursor: pointer;
  `;

  next.addEventListener("click", function () {
    displayModal.remove();
  });

  let prev = document.createElement("button");
  prev.textContent = "<";
  prev.style.cssText = `
    position: absolute;
    align-content: center;
    left: 50px;
    border: none;
    background: none;
    margin-right:30px;
    color: white;
    font-family: "VT323", monospace;
    font-size: 100px;
    cursor: pointer;
  `;

  prev.addEventListener("click", function () {
    displayModal.remove();
  });

  modalContent.appendChild(prev);
  modalContent.appendChild(next);
  modalContent.appendChild(closeButton);
  modalContent.appendChild(ie);
  displayModal.appendChild(modalContent);
  document.body.appendChild(displayModal);
}



document.getElementById("img0").addEventListener("click", function () {
  displayImage("img0");
});

document.getElementById("img1").addEventListener("click", function () {
  displayImage("img1");
});

document.getElementById("img2").addEventListener("click", function () {
  displayImage("img2");
});
