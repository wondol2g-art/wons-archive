// 사진 목록: 이미지 파일명과 제목/장소를 원하는 내용으로 바꿔주세요.
const originalPhotos = [
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

// 공개 GitHub 저장소의 images 폴더를 읽어 새 사진을 자동으로 찾아냅니다.
// 별도의 GitHub Actions 설정이나 사진 목록 수정이 필요하지 않습니다.
const GITHUB_OWNER = "wondol2g-art";
const GITHUB_REPO = "wons-archive";
const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|gif|avif)$/i;
const originalByPath = new Map(originalPhotos.map(photo => [photo.src.toLowerCase(), photo]));
let photos = [...originalPhotos];

function filenameTitle(name) {
  return name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
}

async function loadPhotosFromGitHub() {
  const endpoint = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/images?ref=main`;
  try {
    const response = await fetch(endpoint, { headers: { Accept: "application/vnd.github+json" }, cache: "no-store" });
    if (!response.ok) throw new Error(`GitHub API ${response.status}`);
    const entries = await response.json();
    if (!Array.isArray(entries)) throw new Error("Invalid GitHub folder response");
    const discovered = entries
      .filter(entry => entry.type === "file" && IMAGE_EXTENSIONS.test(entry.name) && entry.name.toLowerCase() !== "cover.png")
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
      .map(entry => {
        const src = `images/${encodeURIComponent(entry.name)}`;
        const existing = originalByPath.get(`images/${entry.name}`.toLowerCase());
        return existing || { src, title: filenameTitle(entry.name), location: "NEW PHOTOGRAPHS", category: "NEW PHOTOGRAPHS" };
      });
    photos = discovered;
    updateGallery();
  } catch (error) {
    console.warn("사진 자동 목록을 불러오지 못해 기본 갤러리를 표시합니다.", error);
    // 네트워크 장애나 GitHub API 제한 시 기존 17장 유지
  }
}

const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector("#lightbox");
let current = 0;

let visiblePhotos = photos;
const filters = document.querySelector("#filters");
const categories = ["ALL", "LIGHT & SHADOW", "CITY & MOMENTS", "LANDSCAPE", "TRAVEL & PLACES", "NEW PHOTOGRAPHS"];
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
function updateGallery() {
  const active = filters.querySelector(".filter-button.active")?.textContent || "ALL";
  visiblePhotos = active === "ALL" ? photos : photos.filter(p => p.category === active);
  document.querySelector(".section-heading h2 span").textContent = `(${photos.length})`;
  renderGallery();
}
function renderGallery() {
 gallery.replaceChildren();
 visiblePhotos.forEach((photo, index) => {
  const button = document.createElement("button");
  button.className = "photo-card";
  button.type = "button";
  const frame = document.createElement("span");
  frame.className = "photo-frame";
  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.title;
  img.loading = "lazy";
  frame.appendChild(img);
  const meta = document.createElement("span");
  meta.className = "photo-meta";
  const title = document.createElement("span");
  title.className = "photo-title";
  title.textContent = photo.title;
  const location = document.createElement("span");
  location.className = "photo-location";
  location.textContent = photo.location;
  meta.append(title, location);
  button.append(frame, meta);
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

loadPhotosFromGitHub();
