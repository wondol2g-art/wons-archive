// WONS ARCHIVE — four-category gallery
// Existing photos remain in images/. New files are classified by filename prefix.
const originalPhotos = [
  {src:'images/photo-01.webp',title:'A moment of stillness',category:'ARCHITECTURE'},
  {src:'images/photo-02.webp',title:'Quiet arches',category:'ARCHITECTURE'},
  {src:'images/photo-03.webp',title:'Where light falls',category:'ARCHITECTURE'},
  {src:'images/photo-04.webp',title:'After the rain',category:'STREET'},
  {src:'images/photo-05.webp',title:'Autumn layers',category:'TRAVEL'},
  {src:'images/photo-06.webp',title:'Evening traffic',category:'STREET'},
  {src:'images/photo-07.webp',title:'Soft skyline',category:'ARCHITECTURE'},
  {src:'images/photo-08.webp',title:'Passing by',category:'STREET'},
  {src:'images/photo-09.webp',title:'Night traces',category:'STREET'},
  {src:'images/photo-10.webp',title:'Across the walkway',category:'STREET'},
  {src:'images/photo-11.webp',title:'Under autumn leaves',category:'TRAVEL'},
  {src:'images/photo-12.webp',title:'A place to rest',category:'TRAVEL'},
  {src:'images/photo-13.webp',title:'Water and wood',category:'TRAVEL'},
  {src:'images/photo-14.webp',title:'By the water',category:'LANDSCAPE'},
  {src:'images/photo-15.webp',title:'Above the wires',category:'LANDSCAPE'},
  {src:'images/photo-16.webp',title:'Open skies',category:'LANDSCAPE'},
  {src:'images/photo-17.webp',title:'Summer hillside',category:'LANDSCAPE'}
];
const OWNER='wondol2g-art', REPO='wons-archive';
const EXT=/\.(jpe?g|png|webp|gif|avif)$/i;
const COVER=/^cover\.(jpe?g|png|webp|gif|avif)$/i;
const categories=['ALL','STREET','LANDSCAPE','ARCHITECTURE','TRAVEL'];
const known=new Map(originalPhotos.map(p=>[p.src.toLowerCase(),p]));
let photos=[...originalPhotos], visible=[...photos], selected='ALL', activeIndex=0;
const gallery=document.getElementById('gallery'), filters=document.getElementById('filters');
const box=document.getElementById('lightbox'), boxImage=document.getElementById('lightboxImage'), boxCaption=document.getElementById('lightboxCaption');
function inferCategory(filename){
  const name=filename.toLowerCase();
  if(/(?:^|[-_\s])(street|city|urban)(?:[-_\s.]|$)/.test(name))return 'STREET';
  if(/(?:^|[-_\s])(landscape|nature|scenery)(?:[-_\s.]|$)/.test(name))return 'LANDSCAPE';
  if(/(?:^|[-_\s])(architecture|building|arch)(?:[-_\s.]|$)/.test(name))return 'ARCHITECTURE';
  if(/(?:^|[-_\s])(travel|trip|journey)(?:[-_\s.]|$)/.test(name))return 'TRAVEL';
  return 'TRAVEL'; // Uncategorized new files default to TRAVEL; rename to categorize.
}
function draw(){
  const available=categories.filter(c=>c==='ALL'||photos.some(p=>p.category===c));
  if(!available.includes(selected))selected='ALL';
  filters.replaceChildren();
  for(const c of available){
    const b=document.createElement('button');b.type='button';b.className='filter'+(c===selected?' active':'');b.textContent=c;
    b.setAttribute('aria-pressed',String(c===selected));b.addEventListener('click',()=>{selected=c;draw()});filters.append(b);
  }
  visible=selected==='ALL'?photos:photos.filter(p=>p.category===selected);
  gallery.replaceChildren();
  visible.forEach((p,i)=>{
    const card=document.createElement('article');card.className='photo-card '+(i%7===0?'full':i%7===1?'wide':i%7===2?'narrow':'');
    card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',p.title+' 크게 보기');
    const visual=document.createElement('div');visual.className='photo-visual';
    const img=document.createElement('img');img.src=p.src;img.alt=p.title;img.loading='lazy';img.decoding='async';visual.append(img);
    const meta=document.createElement('div');meta.className='photo-meta';
    const title=document.createElement('span');title.className='photo-title';title.textContent=String(i+1).padStart(2,'0')+' / '+p.title;
    const cat=document.createElement('span');cat.className='photo-category';cat.textContent=p.category;
    meta.append(title,cat);card.append(visual,meta);
    card.addEventListener('click',()=>openBox(i));card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openBox(i)}});
    gallery.append(card);
  });
  const count=document.getElementById('photoCount');if(count)count.textContent=photos.length+' FRAMES';
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
    const found=entries.filter(e=>e.type==='file'&&EXT.test(e.name)&&!COVER.test(e.name))
      .sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true}))
      .map(e=>{
        const src='images/'+encodeURIComponent(e.name);
        const existing=known.get(('images/'+e.name).toLowerCase());
        return existing||{src,title:e.name.replace(/\.[^.]+$/,'').replace(/[-_]+/g,' '),category:inferCategory(e.name)};
      });
    if(found.length){photos=found;draw()}
  }catch(err){console.warn('GitHub 이미지 목록을 불러오지 못해 기본 사진을 표시합니다.',err)}
}
draw();refreshPhotos();
