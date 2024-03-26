//Image Array
const images = [
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //1
  "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=2755&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //2
  "https://images.unsplash.com/photo-1560583306-bd304a162229?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //3
  "https://images.unsplash.com/photo-1557515126-1bf9ada5cb93?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //4
  "https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //5
  "https://images.unsplash.com/photo-1571331154805-c2a013108395?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //6
  "https://images.unsplash.com/Ys-DBJeX0nE.JPG?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //7
  "https://images.unsplash.com/photo-1555397430-57791c75748a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //8
  "https://images.unsplash.com/photo-1552668355-4f6d28b9dc7e?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //9
  "https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //10
  "https://images.unsplash.com/photo-1578608738964-cd27acd5af2c?q=80&w=2302&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //11
  "https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //12
  "https://images.unsplash.com/photo-1619286875682-1aed54a4bade?q=80&w=2461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1485001564903-56e6a54d46ef?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1575028421517-8eca5793c196?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

//Function Call
initialize();
function initialize() {
  const imgGal = document.getElementById("image-gal");
  for (i = 0; i < images.length; i++) {
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
  let id = 0;
  if (text.length == 4) {
    id = text[3];
    console.log(id);
  } else {
    id = text[3] + text[4];
    console.log(id);
  }

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
    nextImg(id);
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
    prevImg(id);
  });

  if (id > 0) {
    modalContent.appendChild(prev);
  }

  if (id < images.length - 1) {
    modalContent.appendChild(next);
  }

  modalContent.appendChild(closeButton);
  modalContent.appendChild(ie);
  displayModal.appendChild(modalContent);
  document.body.appendChild(displayModal);
}

function nextImg(id) {
  let pI = parseInt(id);
  let nI = "img" + (pI + 1);
  console.log(nI);
  displayImage(nI);
}

function prevImg(id) {
  let pI = parseInt(id);
  let nI = "img" + (pI - 1);
  console.log(nI);
  displayImage(nI);
}

// click fn for all elms (is there a way to do this iterativley?)
document.getElementById("img0").addEventListener("click", function () {
  displayImage("img0");
});

document.getElementById("img1").addEventListener("click", function () {
  displayImage("img1");
});

document.getElementById("img2").addEventListener("click", function () {
  displayImage("img2");
});

document.getElementById("img3").addEventListener("click", function () {
  displayImage("img3");
});

document.getElementById("img4").addEventListener("click", function () {
  displayImage("img4");
});

document.getElementById("img5").addEventListener("click", function () {
  displayImage("img5");
});

document.getElementById("img6").addEventListener("click", function () {
  displayImage("img6");
});

document.getElementById("img7").addEventListener("click", function () {
  displayImage("img7");
});

document.getElementById("img8").addEventListener("click", function () {
  displayImage("img8");
});

document.getElementById("img9").addEventListener("click", function () {
  displayImage("img9");
});

document.getElementById("img10").addEventListener("click", function () {
  displayImage("img10");
});

document.getElementById("img11").addEventListener("click", function () {
  displayImage("img11");
});

document.getElementById("img12").addEventListener("click", function () {
  displayImage("img12");
});

document.getElementById("img13").addEventListener("click", function () {
  displayImage("img13");
});

document.getElementById("img14").addEventListener("click", function () {
  displayImage("img14");
});
