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

const OWNER='wondol2g-art', REPO='wons-archive';
const EXT=/\.(jpe?g|png|webp|gif|avif)$/i;
let photos=[...originalPhotos], visible=[...photos], selected='ALL', activeIndex=0;
const gallery=document.getElementById('gallery'), filters=document.getElementById('filters');
const box=document.getElementById('lightbox'), boxImage=document.getElementById('lightboxImage'), boxCaption=document.getElementById('lightboxCaption');
const known=new Map(originalPhotos.map(p=>[p.src.toLowerCase(),p]));
const categories=['ALL','LIGHT & SHADOW','CITY & MOMENTS','LANDSCAPE','TRAVEL & PLACES','NEW PHOTOGRAPHS'];
function draw(){
  const available=categories.filter(c=>c==='ALL'||photos.some(p=>p.category===c));
  if(!available.includes(selected))selected='ALL';
  filters.replaceChildren();
  for(const c of available){const b=document.createElement('button');b.type='button';b.className='filter'+(c===selected?' active':'');b.textContent=c;b.setAttribute('aria-pressed',String(c===selected));b.addEventListener('click',()=>{selected=c;draw()});filters.append(b)}
  visible=selected==='ALL'?photos:photos.filter(p=>p.category===selected);
  gallery.replaceChildren();
  visible.forEach((p,i)=>{
    const card=document.createElement('article');card.className='photo-card '+(i%7===0?'full':i%7===1?'wide':i%7===2?'narrow':'');card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',p.title+' 크게 보기');
    const visual=document.createElement('div');visual.className='photo-visual';const img=document.createElement('img');img.src=p.src;img.alt=p.title;img.loading='lazy';img.decoding='async';visual.append(img);
    const meta=document.createElement('div');meta.className='photo-meta';const title=document.createElement('span');title.className='photo-title';title.textContent=String(i+1).padStart(2,'0')+' / '+p.title;const cat=document.createElement('span');cat.className='photo-category';cat.textContent=p.category;meta.append(title,cat);card.append(visual,meta);
    card.addEventListener('click',()=>openBox(i));card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openBox(i)}});gallery.append(card)
  });
  document.getElementById('photoCount').textContent=photos.length+' FRAMES';
}
function openBox(i){activeIndex=i;const p=visible[i];boxImage.src=p.src;boxImage.alt=p.title;boxCaption.textContent=`${i+1} / ${visible.length} — ${p.title}`;box.hidden=false;document.body.style.overflow='hidden'}
function closeBox(){box.hidden=true;document.body.style.overflow='';boxImage.removeAttribute('src')}
function moveBox(delta){if(!visible.length)return;openBox((activeIndex+delta+visible.length)%visible.length)}
document.getElementById('closeLightbox').addEventListener('click',closeBox);
document.getElementById('prevPhoto').addEventListener('click',()=>moveBox(-1));
document.getElementById('nextPhoto').addEventListener('click',()=>moveBox(1));
box.addEventListener('click',e=>{if(e.target===box)closeBox()});
document.addEventListener('keydown',e=>{if(box.hidden)return;if(e.key==='Escape')closeBox();if(e.key==='ArrowRight')moveBox(1);if(e.key==='ArrowLeft')moveBox(-1)});
async function refreshPhotos(){
  try{
    const res=await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/images?ref=main`,{headers:{Accept:'application/vnd.github+json'},cache:'no-store'});
    if(!res.ok)throw new Error('GitHub API '+res.status);
    const entries=await res.json();if(!Array.isArray(entries))throw new Error('Unexpected response');
    const found=entries.filter(e=>e.type==='file'&&EXT.test(e.name)&&e.name.toLowerCase()!=='cover.png').sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true})).map(e=>{
      const src='images/'+encodeURIComponent(e.name), existing=known.get(('images/'+e.name).toLowerCase());
      return existing||{src,title:e.name.replace(/\.[^.]+$/,'').replace(/[-_]+/g,' '),category:'NEW PHOTOGRAPHS'};
    });
    if(found.length){photos=found;draw()}
  }catch(err){console.warn('GitHub 이미지 목록을 불러오지 못해 기본 사진을 표시합니다.',err)}
}
draw();refreshPhotos();
