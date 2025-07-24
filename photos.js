const photos = [
  { src: "2023 (2).jpg", date: "2023-02-02", tags: ["été"] },
  { src: "2023 (6).jpg", date: "2023-02-13"},
  { src: "2023 (9).jpg", date: "2023-02-18"},
  { src: "2023 (12).jpg", date: "2023-02-20"},
  { src: "2023 (13).jpg", date: "2023-02-22"},
  { src: "2023 (19).jpg", date: "2023-04-08"},
  { src: "2023 (20).jpg", date: "2023-04-08"},
  { src: "2023 (32).jpg", date: "2023-06-09"},
  { src: "2023 (48).jpg", date: "2023-07-24"},
  { src: "2023 (49).jpg", date: "2023-07-28"},
  { src: "2023 (54).jpg", date: "2023-08-02"},
  { src: "2023 (58).jpg", date: "2023-08-05"},
  { src: "2023 (59).jpg", date: "2023-08-05"},
  { src: "2023 (62).jpg", date: "2023-08-09", tags: ["souvenir"] },
  { src: "2023 (64).jpg", date: "2023-08-10", tags: ["souvenir"] },
  { src: "2023 (65).jpg", date: "2023-08-11", tags: ["souvenir"] },
  { src: "2023 (66).jpg", date: "2023-08-12", tags: ["souvenir"] },
  { src: "2023 (69).jpg", date: "2023-08-18", tags: ["souvenir"] },
  { src: "2023 (73).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (82).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (83).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (89).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (91).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (96).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (97).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (98).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (99).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (100).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (101).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (102).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (103).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (104).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (105).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (106).jpg", date: "2023-08-21", tags: ["souvenir"] },
  { src: "2023 (1).webp", date: "2023-08-24", tags: ["souvenir"] },
  { src: "2023 (108).jpg", date: "2023-08-26", tags: ["souvenir"] },
  { src: "2023 (111).jpg", date: "2023-08-28", tags: ["souvenir"] },
  { src: "2023 (112).jpg", date: "2023-08-28", tags: ["souvenir"] },
  { src: "2023 (114).jpg", date: "2023-08-28", tags: ["souvenir"] },
  { src: "2023 (116).jpg", date: "2023-08-28", tags: ["souvenir"] },
  { src: "2023 (118).jpg", date: "2023-08-28", tags: ["souvenir"] },
  { src: "2023 (120).jpg", date: "2023-08-28", tags: ["souvenir"] },
  { src: "2023 (123).jpg", date: "2023-08-28", tags: ["souvenir"] },
  { src: "2023 (126).jpg", date: "2023-08-28", tags: ["souvenir"] },
  { src: "2023 (128).jpg", date: "2023-08-28", tags: ["souvenir"] },
  { src: "2023 (129).jpg", date: "2023-08-28", tags: ["souvenir"] },
  { src: "2023 (131).jpg", date: "2023-08-28", tags: ["souvenir"] },
  { src: "2023 (134).jpg", date: "2023-08-30", tags: ["souvenir"] },
  { src: "2023 (135).jpg", date: "2023-08-30", tags: ["souvenir"] },
  { src: "2023 (136).jpg", date: "2023-08-31", tags: ["souvenir"] },
  { src: "2023 (141).jpg", date: "2023-09-03", tags: ["souvenir"] },
  { src: "2023 (144).jpg", date: "2023-09-03", tags: ["souvenir"] },
  { src: "2023 (146).jpg", date: "2023-09-03", tags: ["souvenir"] },
  { src: "2023 (147).jpg", date: "2023-09-03", tags: ["souvenir"] },
  { src: "2023 (148).jpg", date: "2023-09-04", tags: ["souvenir"] },
  { src: "2023 (158).jpg", date: "2023-09-10", tags: ["souvenir"] },,
  { src: "2023 (161).jpg", date: "2023-09-22", tags: ["souvenir"] },
  { src: "2023 (181).jpg", date: "2023-11-18", tags: ["souvenir"] },
  { src: "2023 (183).jpg", date: "2023-11-28", tags: ["souvenir"] },
  { src: "2023 (185).jpg", date: "2023-12-08", tags: ["souvenir"] },
  { src: "2023 (189).jpg", date: "2023-12-26", tags: ["souvenir"] },
  { src: "2023 (190).jpg", date: "2023-12-27", tags: ["souvenir"] },
  { src: "2023 (191).jpg", date: "2023-12-31", tags: ["souvenir"] },
  { src: "2024 (1).jpg", date: "2024-01-14", tags: ["souvenir"] },
  { src: "2024 (3).jpg", date: "2024-01-27", tags: ["souvenir"] },
  { src: "2024 (4).jpg", date: "2024-02-04", tags: ["souvenir"] },
  { src: "2024 (5).jpg", date: "2024-02-11", tags: ["souvenir"] },
  { src: "2024 (6).jpg", date: "2024-02-15", tags: ["souvenir"] },
  { src: "2024 (7).jpg", date: "2024-02-17", tags: ["souvenir"] },
  { src: "2024 (8).jpg", date: "2024-02-17", tags: ["souvenir"] },
  { src: "2024 (9).jpg", date: "2024-02-18", tags: ["souvenir"] },
  { src: "2024 (10).jpg", date: "2024-02-18", tags: ["souvenir"] },
  { src: "2024 (11).jpg", date: "2024-02-20", tags: ["souvenir"] },
  { src: "2024 (12).jpg", date: "2024-02-23", tags: ["souvenir"] },
  { src: "2024 (13).jpg", date: "2024-02-28", tags: ["souvenir"] },
  { src: "2024 (14).jpg", date: "2024-03-06", tags: ["souvenir"] },
  { src: "2024 (15).jpg", date: "2024-03-24", tags: ["souvenir"] },
  { src: "2024 (16).jpg", date: "2024-04-06", tags: ["souvenir"] },
  { src: "2024 (17).jpg", date: "2024-04-13", tags: ["souvenir"] },
  { src: "2024 (18).jpg", date: "2024-04-20", tags: ["souvenir"] },
  { src: "2024 (19).jpg", date: "2024-06-17", tags: ["souvenir"] },
  { src: "2024 (20).jpg", date: "2024-06-17", tags: ["souvenir"] },
  { src: "2024 (21).jpg", date: "2024-06-30", tags: ["souvenir"] },
  { src: "2024 (22).jpg", date: "2024-07-06", tags: ["souvenir"] },
  { src: "2024 (23).jpg", date: "2024-07-06", tags: ["souvenir"] },
  { src: "2024 (24).jpg", date: "2024-07-06", tags: ["souvenir"] },
  { src: "2024 (25).jpg", date: "2024-07-06", tags: ["souvenir"] },
  { src: "2024 (26).jpg", date: "2024-12-01", tags: ["souvenir"] },
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

  // 🔽 Trie les photos dans l'année de la plus récente à la plus ancienne
  grouped[year].sort((a, b) => new Date(b.date) - new Date(a.date));

  grouped[year].forEach(photo => {
    const img = document.createElement("img");
    img.src = `/images/Mur de Souvenirs/${photo.src}`;
    img.alt = `Souvenir ${year}`;
    img.classList.add("photo");

    img.dataset.tags = Array.isArray(photo.tags) ? photo.tags.join(',') : "";

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