// Edit the filenames, titles, and categories below to customize the collection.
const originalPhotos = [
  {
    "src": "images/photo-01.webp",
    "width": 1266,
    "height": 1900,
    "title": "A moment of stillness",
    "location": "LIGHT & SHADOW",
    "category": "PLACES"
  },
  {
    "src": "images/photo-02.webp",
    "width": 1266,
    "height": 1900,
    "title": "Quiet arches",
    "location": "LIGHT & SHADOW",
    "category": "PLACES"
  },
  {
    "src": "images/photo-03.webp",
    "width": 1266,
    "height": 1900,
    "title": "Where light falls",
    "location": "LIGHT & SHADOW",
    "category": "PLACES"
  },
  {
    "src": "images/photo-04.webp",
    "width": 1520,
    "height": 1900,
    "title": "After the rain",
    "location": "CITY & MOMENTS",
    "category": "STREET"
  },
  {
    "src": "images/photo-05.webp",
    "width": 1520,
    "height": 1900,
    "title": "Autumn layers",
    "location": "TRAVEL & PLACES",
    "category": "PLACES"
  },
  {
    "src": "images/photo-06.webp",
    "width": 1520,
    "height": 1900,
    "title": "Evening traffic",
    "location": "CITY & MOMENTS",
    "category": "STREET"
  },
  {
    "src": "images/photo-07.webp",
    "width": 1266,
    "height": 1900,
    "title": "Soft skyline",
    "location": "CITY & MOMENTS",
    "category": "STREET"
  },
  {
    "src": "images/photo-08.webp",
    "width": 1266,
    "height": 1900,
    "title": "Passing by",
    "location": "CITY & MOMENTS",
    "category": "STREET"
  },
  {
    "src": "images/photo-09.webp",
    "width": 1266,
    "height": 1900,
    "title": "Night traces",
    "location": "CITY & MOMENTS",
    "category": "STREET"
  },
  {
    "src": "images/photo-10.webp",
    "width": 1266,
    "height": 1900,
    "title": "Across the walkway",
    "location": "CITY & MOMENTS",
    "category": "STREET"
  },
  {
    "src": "images/photo-11.webp",
    "width": 1266,
    "height": 1900,
    "title": "Under autumn leaves",
    "location": "TRAVEL & PLACES",
    "category": "PLACES"
  },
  {
    "src": "images/photo-12.webp",
    "width": 1900,
    "height": 1266,
    "title": "A place to rest",
    "location": "TRAVEL & PLACES",
    "category": "PLACES"
  },
  {
    "src": "images/photo-13.webp",
    "width": 1266,
    "height": 1900,
    "title": "Water and wood",
    "location": "TRAVEL & PLACES",
    "category": "PLACES"
  },
  {
    "src": "images/photo-14.webp",
    "width": 1266,
    "height": 1900,
    "title": "By the water",
    "location": "LANDSCAPE",
    "category": "PLACES"
  },
  {
    "src": "images/photo-15.webp",
    "width": 1900,
    "height": 1424,
    "title": "Above the wires",
    "location": "LANDSCAPE",
    "category": "PLACES"
  },
  {
    "src": "images/photo-16.webp",
    "width": 1900,
    "height": 1266,
    "title": "Open skies",
    "location": "LANDSCAPE",
    "category": "PLACES"
  },
  {
    "src": "images/photo-17.webp",
    "width": 1900,
    "height": 1266,
    "title": "Summer hillside",
    "location": "LANDSCAPE",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-0204.webp",
    "width": 1365,
    "height": 2048,
    "title": "Light on Brick",
    "category": "STREET"
  },
  {
    "src": "images/dsc-1209.webp",
    "width": 2048,
    "height": 1365,
    "title": "Crossing Paths",
    "category": "STREET"
  },
  {
    "src": "images/dsc-1368.webp",
    "width": 1638,
    "height": 2048,
    "title": "Lakeside Light",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-1468.webp",
    "width": 1109,
    "height": 1386,
    "title": "By the Railing",
    "category": "STREET"
  },
  {
    "src": "images/dsc-1922.webp",
    "width": 1365,
    "height": 2048,
    "title": "Ferris Wheel Reflection",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-2178.webp",
    "width": 2048,
    "height": 1365,
    "title": "Bridge Under Clouds",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-3071.webp",
    "width": 1365,
    "height": 2048,
    "title": "Umbrellas on the Walkway",
    "category": "STREET"
  },
  {
    "src": "images/dsc-5231.webp",
    "width": 1365,
    "height": 2048,
    "title": "Stepping Stones",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-5843.webp",
    "width": 2048,
    "height": 1638,
    "title": "City at Dusk",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-6079.webp",
    "width": 1365,
    "height": 2048,
    "title": "A Ride by the Fountain",
    "category": "STREET"
  },
  {
    "src": "images/dsc-6758.webp",
    "width": 1365,
    "height": 2048,
    "title": "Bicycle in the Alley",
    "category": "STREET"
  },
  {
    "src": "images/dsc-6891.webp",
    "width": 1365,
    "height": 2048,
    "title": "Two Ducks",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-7063.webp",
    "width": 1638,
    "height": 2048,
    "title": "Across the Stream",
    "category": "STREET"
  },
  {
    "src": "images/dsc-7524.webp",
    "width": 2048,
    "height": 1365,
    "title": "Among Autumn Trees",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-7661.webp",
    "width": 1365,
    "height": 2048,
    "title": "The Red Clearing",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-7734.webp",
    "width": 1365,
    "height": 2048,
    "title": "Gold on Water",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-7786.webp",
    "width": 2048,
    "height": 1365,
    "title": "Leaves in Sunlight",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-7910.webp",
    "width": 2048,
    "height": 1365,
    "title": "An Autumn Afternoon",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-8434.webp",
    "width": 2048,
    "height": 1536,
    "title": "Fountain Figures",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-8505.webp",
    "width": 2048,
    "height": 1536,
    "title": "Water on the Steps",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-9449.webp",
    "width": 2048,
    "height": 1365,
    "title": "Fireworks over the Pavilion",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-9577-01.webp",
    "width": 1638,
    "height": 2048,
    "title": "Fireworks Reflected on the Water",
    "category": "PLACES"
  },
  {
    "src": "images/dsc-9987.webp",
    "width": 2048,
    "height": 1365,
    "title": "Red Brick Steeple",
    "category": "PLACES"
  }
];

// Find new photos in the public GitHub repository.

const OWNER='wondol2g-art', REPO='wons-archive';
const EXT=/\.(jpe?g|png|webp|gif|avif)$/i;
let photos = [...originalPhotos];
let selected = 'ALL';
const photosPerRow = 3;
let lightboxPhotos = [];
let activeIndex = 0;
const gallery = document.getElementById('gallery');
const filters = document.getElementById('filters');
const box = document.getElementById('lightbox');
const boxImage = document.getElementById('lightboxImage');
const boxCaption = document.getElementById('lightboxCaption');
const known = new Map(originalPhotos.map(photo => [photo.src.toLowerCase(), photo]));
const categories = new Map([
  ['ALL', 'All Work'],
  ['STREET', 'Street'],
  ['PLACES', 'Places'],
]);

function draw() {
  const available = [...categories].filter(([category]) =>
    category === 'ALL' || photos.some(photo => photo.category === category)
  );
  if (!available.some(([category]) => category === selected)) selected = 'ALL';

  const galleryTitle = document.getElementById('galleryTitle');
  const label = categories.get(selected);
  if (galleryTitle.textContent !== label) galleryTitle.textContent = label;

  const restoreFilterFocus = filters.contains(document.activeElement);
  filters.replaceChildren();
  for (const [category, label] of available) {
    const button = document.createElement('button');
    const active = category === selected;
    button.type = 'button';
    button.className = active ? 'filter active' : 'filter';
    button.textContent = label;
    button.setAttribute('aria-pressed', String(active));
    button.addEventListener('click', () => {
      selected = category;
      draw();
      window.scrollTo(0, 0);
    });
    filters.append(button);
    if (active && restoreFilterFocus) button.focus();
  }

  const visible = selected === 'ALL' ? photos : photos.filter(photo => photo.category === selected);
  gallery.replaceChildren();
  let nextPhotoIndex = 0;
  while (nextPhotoIndex < visible.length) {
    const start = nextPhotoIndex;
    const candidates = visible.slice(start, start + photosPerRow);
    const hasLandscape = candidates.some(photo => photo.width > photo.height);
    const rowPhotos = hasLandscape ? candidates.slice(0, 2) : candidates;
    nextPhotoIndex += rowPhotos.length;
    const row = document.createElement('div');
    row.className = 'photo-row';
    const ratios = rowPhotos.map(photo => photo.width && photo.height ? photo.width / photo.height : 1);
    const sizeColumns = () => {
      row.style.setProperty('--photo-columns', ratios.map(ratio => `minmax(0, ${ratio}fr)`).join(' '));
    };
    sizeColumns();
    rowPhotos.forEach((photo, index) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'photo-card';
      card.setAttribute('aria-label', 'View ' + photo.title);
      const image = document.createElement('img');
      image.addEventListener('load', () => {
        ratios[index] = image.naturalWidth / image.naturalHeight;
        sizeColumns();
      });
      image.src = photo.src;
      image.alt = photo.title;
      image.decoding = 'async';
      image.loading = start === 0 ? 'eager' : 'lazy';
      if (photo.width && photo.height) {
        image.width = photo.width;
        image.height = photo.height;
      }
      card.append(image);
      card.addEventListener('click', () => {
        lightboxPhotos = visible;
        showPhoto(start + index);
        box.showModal();
        document.body.style.overflow = 'hidden';
      });
      row.append(card);
    });
    gallery.append(row);
  }
}

function showPhoto(index) {
  activeIndex = index;
  const photo = lightboxPhotos[index];
  boxImage.src = photo.src;
  boxImage.alt = photo.title;
  boxCaption.textContent = photo.title;
}

function movePhoto(delta) {
  const count = lightboxPhotos.length;
  showPhoto((activeIndex + delta + count) % count);
}

document.getElementById('closeLightbox').addEventListener('click', () => box.close());
document.getElementById('prevPhoto').addEventListener('click', () => movePhoto(-1));
document.getElementById('nextPhoto').addEventListener('click', () => movePhoto(1));
box.addEventListener('close', () => {
  document.body.style.overflow = '';
  boxImage.removeAttribute('src');
});
box.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') movePhoto(1);
  if (event.key === 'ArrowLeft') movePhoto(-1);
});

async function measurePhoto(photo) {
  if (photo.width && photo.height) return photo;

  const image = new Image();
  image.src = photo.src;
  try {
    await image.decode();
    return { ...photo, width: image.naturalWidth, height: image.naturalHeight };
  } catch {
    return photo;
  }
}

async function refreshPhotos(){
  try{
    const res=await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/images?ref=main`,{headers:{Accept:'application/vnd.github+json'},cache:'no-store'});
    if(!res.ok)throw new Error('GitHub API '+res.status);
    const entries=await res.json();if(!Array.isArray(entries))throw new Error('Unexpected response');
    const found=entries.filter(e=>e.type==='file'&&EXT.test(e.name)&&e.name.toLowerCase()!=='cover.png').sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true})).map(e=>{
      const src='images/'+encodeURIComponent(e.name), existing=known.get(('images/'+e.name).toLowerCase());
      return existing||{src,title:e.name.replace(/\.[^.]+$/,'').replace(/[-_]+/g,' ')};
    });
    if(found.length){photos=await Promise.all(found.map(measurePhoto));draw()}
  }catch(err){console.warn('Could not load the GitHub collection. Showing the included photos.',err)}
}
draw();
if (window.location.protocol !== "file:") refreshPhotos();
