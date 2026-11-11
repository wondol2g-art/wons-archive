// 사진 목록: 이미지 파일명과 제목/장소를 원하는 내용으로 바꿔주세요.
const photos = [
  {
    "src": "images/photo-01.webp",
    "title": "A moment of stillness",
    "location": "LIGHT & SHADOW",
    "category": "LIGHT & SHADOW"
  },
  {
    "src": "images/photo-02.webp",
    "title": "Quiet arches",
    "location": "LIGHT & SHADOW",
    "category": "LIGHT & SHADOW"
  },
  {
    "src": "images/photo-03.webp",
    "title": "Where light falls",
    "location": "LIGHT & SHADOW",
    "category": "LIGHT & SHADOW"
  },
  {
    "src": "images/photo-04.webp",
    "title": "After the rain",
    "location": "CITY & MOMENTS",
    "category": "CITY & MOMENTS"
  },
  {
    "src": "images/photo-05.webp",
    "title": "Autumn layers",
    "location": "TRAVEL & PLACES",
    "category": "TRAVEL & PLACES"
  },
  {
    "src": "images/photo-06.webp",
    "title": "Evening traffic",
    "location": "CITY & MOMENTS",
    "category": "CITY & MOMENTS"
  },
  {
    "src": "images/photo-07.webp",
    "title": "Soft skyline",
    "location": "CITY & MOMENTS",
    "category": "CITY & MOMENTS"
  },
  {
    "src": "images/photo-08.webp",
    "title": "Passing by",
    "location": "CITY & MOMENTS",
    "category": "CITY & MOMENTS"
  },
  {
    "src": "images/photo-09.webp",
    "title": "Night traces",
    "location": "CITY & MOMENTS",
    "category": "CITY & MOMENTS"
  },
  {
    "src": "images/photo-10.webp",
    "title": "Across the walkway",
    "location": "CITY & MOMENTS",
    "category": "CITY & MOMENTS"
  },
  {
    "src": "images/photo-11.webp",
    "title": "Under autumn leaves",
    "location": "TRAVEL & PLACES",
    "category": "TRAVEL & PLACES"
  },
  {
    "src": "images/photo-12.webp",
    "title": "A place to rest",
    "location": "TRAVEL & PLACES",
    "category": "TRAVEL & PLACES"
  },
  {
    "src": "images/photo-13.webp",
    "title": "Water and wood",
    "location": "TRAVEL & PLACES",
    "category": "TRAVEL & PLACES"
  },
  {
    "src": "images/photo-14.webp",
    "title": "By the water",
    "location": "LANDSCAPE",
    "category": "LANDSCAPE"
  },
  {
    "src": "images/photo-15.webp",
    "title": "Above the wires",
    "location": "LANDSCAPE",
    "category": "LANDSCAPE"
  },
  {
    "src": "images/photo-16.webp",
    "title": "Open skies",
    "location": "LANDSCAPE",
    "category": "LANDSCAPE"
  },
  {
    "src": "images/photo-17.webp",
    "title": "Summer hillside",
    "location": "LANDSCAPE",
    "category": "LANDSCAPE"
  }
];

const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector("#lightbox");
let current = 0;

let visiblePhotos = photos;
const filters = document.querySelector("#filters");
const categories = ["ALL", "LIGHT & SHADOW", "CITY & MOMENTS", "LANDSCAPE", "TRAVEL & PLACES"];
categories.forEach(category => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = category;
  button.className = "filter-button" + (category === "ALL" ? " active" : "");
  button.setAttribute("aria-pressed", String(category === "ALL"));
  button.addEventListener("click", () => {
    filters.querySelectorAll("button").forEach(b => {b.classList.remove("active"); b.setAttribute("aria-pressed", "false");});
    button.classList.add("active"); button.setAttribute("aria-pressed", "true");
    visiblePhotos = category === "ALL" ? photos : photos.filter(p => p.category === category);
    renderGallery();
  });
  filters.appendChild(button);
});
function renderGallery() {
 gallery.replaceChildren();
 visiblePhotos.forEach((photo, index) => {
  const button = document.createElement("button");
  button.className = "photo-card";
  button.type = "button";
  button.innerHTML = `
    <span class="photo-frame"><img src="${photo.src}" alt="${photo.title}" loading="lazy"></span>
    <span class="photo-meta"><span class="photo-title">${photo.title}</span><span class="photo-location">${photo.location}</span></span>`;
  button.addEventListener("click", () => openPhoto(index));
  gallery.appendChild(button);
 });
}

function openPhoto(index) {
  current = (index + visiblePhotos.length) % visiblePhotos.length;
  const photo = visiblePhotos[current];
  lightbox.querySelector("img").src = photo.src;
  lightbox.querySelector("img").alt = photo.title;
  lightbox.querySelector("figcaption").textContent = `${photo.title} — ${photo.location}`;
  if (!lightbox.open) lightbox.showModal();
}
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.querySelector(".lightbox-prev").addEventListener("click", () => openPhoto(current - 1));
lightbox.querySelector(".lightbox-next").addEventListener("click", () => openPhoto(current + 1));
lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.close(); });
document.addEventListener("keydown", e => {
  if (!lightbox.open) return;
  if (e.key === "ArrowLeft") openPhoto(current - 1);
  if (e.key === "ArrowRight") openPhoto(current + 1);
});
document.querySelector("#year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

renderGallery();
