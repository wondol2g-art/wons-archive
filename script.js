// 사진 목록: 이미지 파일명과 제목/장소를 원하는 내용으로 바꿔주세요.
const photos = [
  { src: "images/photo-01.svg", title: "Soft afternoon", location: "JEJU · 2026" },
  { src: "images/photo-02.svg", title: "A quiet road", location: "SEOUL · 2026" },
  { src: "images/photo-03.svg", title: "The coastline", location: "JEJU · 2026" },
  { src: "images/photo-04.svg", title: "Between seasons", location: "KOREA · 2026" },
  { src: "images/photo-05.svg", title: "Blue hour", location: "BUSAN · 2026" },
  { src: "images/photo-06.svg", title: "Little moments", location: "DAILY · 2026" }
];

const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector("#lightbox");
let current = 0;

photos.forEach((photo, index) => {
  const button = document.createElement("button");
  button.className = "photo-card";
  button.type = "button";
  button.innerHTML = `
    <span class="photo-frame"><img src="${photo.src}" alt="${photo.title}" loading="lazy"></span>
    <span class="photo-meta"><span class="photo-title">${photo.title}</span><span class="photo-location">${photo.location}</span></span>`;
  button.addEventListener("click", () => openPhoto(index));
  gallery.appendChild(button);
});

function openPhoto(index) {
  current = (index + photos.length) % photos.length;
  const photo = photos[current];
  lightbox.querySelector("img").src = photo.src;
  lightbox.querySelector("img").alt = photo.title;
  lightbox.querySelector("figcaption").textContent = `${photo.title} — ${photo.location}`;
  lightbox.showModal();
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
