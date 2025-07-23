const photos = [
  { src: "photo1.jpg", date: "2024-01-14", tags: ["hiver"], message: "Souvenir de janvier ❄️" },
  { src: "photo2.jpg", date: "2023-08-10", tags: ["été"] },
  { src: "photo3.jpg", date: "2024-03-22", tags: ["printemps"], message: "Notre promenade en mars 🌼" },
  { src: "photo4.jpg", date: "2023-10-05", tags: ["automne"] },
  { src: "photo5.jpg", date: "2024-07-15", tags: ["été"], message: "Un jour de soleil parfait ☀️" }
];

const grouped = {};
photos.forEach(p => {
  const year = new Date(p.date).getFullYear();
  if (!grouped[year]) grouped[year] = [];
  grouped[year].push(p);
});

const years = Object.keys(grouped).map(Number).sort((a,b) => b - a);
const galerie = document.getElementById("galerie");

years.forEach(year => {
  const section = document.createElement("section");
  section.classList.add("year-group");

  const h2 = document.createElement("h2");
  h2.textContent = year;
  section.appendChild(h2);

  const grid = document.createElement("div");
  grid.classList.add("photo-grid");

  grouped[year].forEach(photo => {
    const img = document.createElement("img");
    img.src = `/images/Mur de Souvenirs/${photo.src}`;
    img.alt = `Souvenir ${year}`;
    img.classList.add("photo");
    img.dataset.tags = photo.tags.join(',');

    if (photo.message) {
      img.addEventListener("click", () => showModal(photo.message));
    }

    grid.appendChild(img);
  });

  section.appendChild(grid);
  galerie.appendChild(section);
});

// POP-UP
function showModal(message) {
  const overlay = document.createElement("div");
  overlay.classList.add("modal-overlay");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const close = document.createElement("button");
  close.classList.add("close-btn");
  close.innerHTML = "&times;";
  close.addEventListener("click", () => document.body.removeChild(overlay));

  const text = document.createElement("p");
  text.textContent = message;

  modal.appendChild(close);
  modal.appendChild(text);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

// FILTRAGE
const buttons = document.querySelectorAll(".filters button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const tag = button.dataset.tag;
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const allPhotos = document.querySelectorAll(".photo");
    allPhotos.forEach(photo => {
      const tags = photo.dataset.tags.split(",");
      if (tag === "all" || tags.includes(tag)) {
        photo.classList.remove("hidden");
      } else {
        photo.classList.add("hidden");
      }
    });
  });
});