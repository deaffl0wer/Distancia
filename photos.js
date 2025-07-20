const images = [
  { src: "photo1.jpg", left: 50, top: 100, width: 200 },
  { src: "photo2.jpg", left: 300, top: 80, width: 250 },
  { src: "photo3.jpg", left: 700, top: 180, width: 280 },
];

const mur = document.getElementById("mur");

images.forEach(imgData => {
  const img = document.createElement("img");
  img.src = `/images/Mur de Souvenirs/${imgData.src}`;
  img.classList.add("souvenir");

  img.style.left = `${imgData.left}px`;
  img.style.top = `${imgData.top}px`;
  img.style.width = `${imgData.width}px`;
  img.style.position = "absolute";

  mur.appendChild(img);
});