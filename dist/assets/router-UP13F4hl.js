(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const te="$",x=[{id:"lacivert-keten-pantolon",name:"Navy Linen Trousers",nameTr:"Lacivert Keten Pantolon",category:"men",line:"Trousers",price:380,color:"Navy",fabric:"Pure linen, gold kilim side-stripe",tagline:"Heritage thread, modern line",image:"/images/designs/3.png",description:"Wide, fluid linen trousers traced with a hand-guided Kurdish kilim motif in gold thread down the side seam. Quiet by day, ceremonial by candlelight.",details:["Relaxed straight leg","Natural linen, breathable hand","Gold kilim side detail","Hidden hook & zip"],sizes:["30","32","34","36","38"],badge:"Signature"},{id:"antrasit-keten",name:"Anthracite Herringbone Trousers",nameTr:"Antrasit Keten",category:"men",line:"Trousers",price:410,color:"Anthracite",fabric:"Wool-linen herringbone",tagline:"Strong stance, quiet luxury",image:"/images/designs/4.png",description:"Tailored herringbone trousers in deep anthracite — restraint cut close to the body. A wardrobe spine for the considered man.",details:["Tailored slim fit","Wool-linen herringbone","Subtle tonal side trace","Season 2026"],sizes:["30","32","34","36","38"]},{id:"koyu-vizon-keten",name:"Dark Mink Linen Trousers",nameTr:"Koyu Vizon Keten",category:"men",line:"Trousers",price:390,color:"Dark Mink",fabric:"Pure linen, gold kilim side-stripe",tagline:"Cultural root, modern line",image:"/images/designs/5.png",description:"A warm mink-brown linen with a golden kilim ribbon running the length of the leg — the house signature in its most wearable tone.",details:["Relaxed straight leg","Gold-tone kilim side-stripe","Natural linen","Unlined, lightweight"],sizes:["30","32","34","36","38"]},{id:"kum-beji-keten",name:"Sand Beige Linen Trousers",nameTr:"Kum Beji Keten",category:"men",line:"Trousers",price:360,color:"Sand Beige",fabric:"Pure linen, navy kilim side-stripe",tagline:"Natural flow, elegant detail",image:"/images/designs/6.png",description:"Soft sand linen with a navy kilim motif at the seam. Generous through the leg, made to move with the desert light.",details:["Relaxed wide fit","Navy kilim side detail","Natural linen","Pleated front"],sizes:["30","32","34","36","38"]},{id:"gece-mavisi",name:"Midnight Blue Trousers",nameTr:"Gece Mavisi",category:"men",line:"Trousers",price:420,color:"Midnight Blue",fabric:"Wool-silk blend, metallic kilim",tagline:"Cinematic elegance, a golden trace",image:"/images/designs/7.png",description:"Midnight wool-silk with a fine metallic gold kilim motif — drape and fall engineered for evening. The trouser that holds a room.",details:["Fluid evening drape","Wool-silk blend","Metallic gold kilim","Tailored mid-rise"],sizes:["30","32","34","36","38"],badge:"Evening"},{id:"zeytin-yesili-keten",name:"Olive Linen Co-ord",nameTr:"Zeytin Yeşili Keten",category:"men",line:"Sets",price:640,color:"Olive Green",fabric:"Pure linen, terracotta kilim",tagline:"City spirit, cultural texture",image:"/images/designs/8.png",description:"An olive linen overshirt and trouser, joined by a terracotta-cream kilim ribbon. Slim, urban, rooted. Sold as a co-ord.",details:["Overshirt + trouser set","Terracotta kilim side-stripe","Slim urban silhouette","Pure linen"],sizes:["S","M","L","XL"],badge:"Co-ord"},{id:"tas-grisi-keten",name:"Stone Grey Linen Trousers",nameTr:"Taş Grisi Keten",category:"men",line:"Trousers",price:360,color:"Stone Grey",fabric:"Pure linen, bordeaux-gold kilim",tagline:"Easy stance, deep roots",image:"/images/designs/9.png",description:"Stone-grey linen with a bordeaux-and-gold kilim trace. Relaxed through an open hem — the everyday trouser of the house.",details:["Relaxed fit, open hem","Bordeaux-gold kilim detail","Natural linen","Everyday weight"],sizes:["30","32","34","36","38"]},{id:"bej-cizgili-keten",name:"Beige Pinstripe Trousers",nameTr:"Bej Çizgili Keten",category:"men",line:"Trousers",price:370,color:"Beige Stripe",fabric:"Striped linen, gold motif column",tagline:"Relaxed cut, natural line",image:"/images/designs/14.png",description:"Fine-striped beige linen carrying a column of stacked kilim diamonds in gold and amber. A relaxed, considered trouser.",details:["Relaxed fit","Stacked kilim motif column","Striped linen","Season 2026"],sizes:["30","32","34","36","38"]},{id:"mavi-gri-cizgili",name:"Blue-Grey Pinstripe Trousers",nameTr:"Mavi-Gri Çizgili",category:"men",line:"Trousers",price:390,color:"Blue Grey",fabric:"Pinstripe linen, gold kilim",tagline:"Slim fit, a fine line",image:"/images/designs/15.png",description:"A crisp blue-grey pinstripe with the gold kilim motif tracing the outseam. Slim, sharp, quietly decorated.",details:["Slim fit","Gold kilim outseam","Pinstripe linen","Tailored rise"],sizes:["30","32","34","36","38"]},{id:"antrasit-cizgili",name:"Anthracite Pinstripe Trousers",nameTr:"Antrasit Çizgili",category:"men",line:"Trousers",price:400,color:"Anthracite Stripe",fabric:"Wool-blend pinstripe, gold kilim",tagline:"Modern cut, deep texture",image:"/images/designs/16.png",description:"Modern anthracite pinstripe in a wool blend, finished with a slim gold kilim trace. Built for the city, rooted in the loom.",details:["Modern slim fit","Slim gold kilim trace","Wool-blend pinstripe","All-day structure"],sizes:["30","32","34","36","38"]},{id:"sehir-paltosu",name:"Double-Breasted Wool Overcoat",nameTr:"Şehir Paltosu",category:"men",line:"Outerwear",price:1450,color:"Charcoal",fabric:"Pressed virgin wool",tagline:"The architecture of winter",image:"/images/models/7.png",description:"A double-breasted overcoat in pressed virgin wool, cut just below the knee. Structured shoulder, fluid skirt — the long line of the house.",details:["Double-breasted","Pressed virgin wool","Below-knee length","Horn buttons"],sizes:["46","48","50","52","54"]},{id:"hafif-blazer",name:"Soft-Tailored Blazer",nameTr:"Hafif Blazer",category:"men",line:"Outerwear",price:890,color:"Navy",fabric:"Wool-linen, unstructured",tagline:"Ease, tailored",image:"/images/models/6.png",description:"An unstructured navy blazer in wool-linen — no lining, no rigidity. Worn over a tee with chinos, it carries the whole day.",details:["Unstructured, unlined","Wool-linen blend","Patch pockets","Natural shoulder"],sizes:["46","48","50","52","54"]},{id:"keten-gomlek-ceket",name:"Linen Overshirt",nameTr:"Keten Gömlek Ceket",category:"men",line:"Outerwear",price:440,color:"Stone",fabric:"Heavy washed linen",tagline:"Between shirt and coat",image:"/images/models/8.png",description:"A heavy washed-linen overshirt that lives between a shirt and a jacket. Throw it over a grey tee and pleated trousers.",details:["Shirt-jacket cut","Heavy washed linen","Chest & side pockets","Mother-of-pearl buttons"],sizes:["S","M","L","XL"]},{id:"genis-paca-tulum",name:"Wide-Leg Jumpsuit",nameTr:"Geniş Paça Tulum",category:"women",line:"Dresses",price:720,color:"Chocolate",fabric:"Fluid crepe",tagline:"One line, head to floor",image:"/images/models/1.png",description:"A wrap-front jumpsuit in fluid chocolate crepe, falling to a sweeping wide leg. A single, uninterrupted gesture of a garment.",details:["Wrap front, self-tie","Fluid crepe","Sweeping wide leg","Concealed zip"],sizes:["XS","S","M","L"],badge:"Signature"},{id:"tek-omuz-abiye",name:"One-Shoulder Gown",nameTr:"Tek Omuz Abiye",category:"women",line:"Dresses",price:980,color:"Midnight Navy",fabric:"Draped jersey-silk",tagline:"Asymmetry, perfected",image:"/images/models/4.png",description:"A midnight one-shoulder gown, gathered at the waist and falling clean to the floor. Draped jersey-silk that moves like water.",details:["One-shoulder neckline","Gathered waist","Draped jersey-silk","Floor length"],sizes:["XS","S","M","L"],badge:"Evening"},{id:"yun-pelerin-palto",name:"Wool Cape Coat",nameTr:"Yün Pelerin Palto",category:"women",line:"Outerwear",price:1650,color:"Camel",fabric:"Brushed wool-cashmere",tagline:"Wrapped in warm light",image:"/images/models/5.png",description:"A floor-grazing cape coat in brushed wool-cashmere, camel as the late sun. It falls from the shoulder and trails behind you.",details:["Full cape silhouette","Brushed wool-cashmere","Floor-grazing length","Tonal hook closure"],sizes:["XS/S","M/L"],badge:"Atelier"},{id:"oversize-keten-palto",name:"Oversized Linen Coat",nameTr:"Oversize Keten Palto",category:"women",line:"Outerwear",price:1250,color:"Oatmeal",fabric:"Textured pure linen",tagline:"Borrowed lines, perfected",image:"/images/models/2.png",description:"An oversized double-breasted coat in textured oatmeal linen — masculine cut, feminine fall. The summer outer layer of the house.",details:["Oversized double-breasted","Textured pure linen","Drop shoulder","Self belt"],sizes:["XS/S","M/L"]},{id:"drapeli-pelerin-takim",name:"Draped Cape Set",nameTr:"Drapeli Pelerin Takım",category:"women",line:"Sets",price:890,color:"Charcoal",fabric:"Soft suede-touch jersey",tagline:"Movement, draped",image:"/images/models/3.png",description:"A cowl-draped cape top with matching wide trousers in suede-touch jersey. Charcoal, fluid, and built to move through narrow streets.",details:["Cowl cape top + trousers","Suede-touch jersey","Wide fluid leg","Sold as a set"],sizes:["XS","S","M","L"],badge:"Co-ord"},{id:"derin-lacivert-abaya",name:"Gold-Embroidered Abaya",nameTr:"Derin Lacivert",category:"women",line:"Abaya",price:840,color:"Deep Navy",fabric:"Crepe, gold-silver kilim embroidery",tagline:"A golden trace",image:"/images/models/12.png",description:"An oversized deep-navy abaya embroidered with gold-and-silver Kurdish kilim motifs across the body and cuffs. The house signature, for her.",details:["Oversized abaya cut","Gold-silver kilim embroidery","Crepe drape","Matching scarf"],sizes:["36","38","40","42","44"],badge:"Signature"},{id:"pudra-pembe-keten-abaya",name:"Powder Pink Abaya",nameTr:"Pudra Pembe Keten",category:"women",line:"Abaya",price:760,color:"Powder Pink",fabric:"Pure linen, gold kilim embroidery",tagline:"An elegant motif",image:"/images/models/13.png",description:"A powder-pink linen abaya with a rose-gold kilim motif running its length. Oversized, soft, luminous against the light.",details:["Oversized abaya cut","Rose-gold kilim embroidery","Pure linen","Matching scarf"],sizes:["36","38","40","42","44"]},{id:"antrasit-abaya",name:"Charcoal Everyday Abaya",nameTr:"Antrasit Abaya",category:"women",line:"Abaya",price:620,color:"Charcoal",fabric:"Matte crepe",tagline:"Quiet, every day",image:"/images/models/10.png",description:"A clean charcoal abaya in matte crepe with a slim gold pendant detail at the neck and discreet side slits. The understated daily piece.",details:["Minimal A-line abaya","Matte crepe","Gold neck detail","Side slits"],sizes:["36","38","40","42","44"]},{id:"kum-beji-abaya-takim",name:"Open Abaya & Slip Set",nameTr:"Kum Beji Abaya Takım",category:"women",line:"Sets",price:880,color:"Camel & Cream",fabric:"Chiffon over linen slip",tagline:"Layers of warm sand",image:"/images/models/11.png",description:"A flowing camel chiffon open-abaya layered over a cream embroidered linen slip dress. Two pieces, one warm, sand-toned silhouette.",details:["Open-abaya + slip dress","Chiffon over linen","Tonal embroidery","Sold as a set"],sizes:["XS","S","M","L"],badge:"Co-ord"},{id:"krem-palto-takim",name:"Belted Coat & Trouser Set",nameTr:"Krem Palto Takım",category:"women",line:"Outerwear",price:1100,color:"Cream & Camel",fabric:"Wool-blend coat, linen trouser",tagline:"Tonal, head to toe",image:"/images/models/9.png",description:"A long cream belted coat with embroidered cuffs over camel wide-leg trousers and a matching scarf. A complete tonal look from the atelier.",details:["Belted long coat","Embroidered cuffs","Camel wide-leg trouser","Matching scarf"],sizes:["XS","S","M","L"],badge:"Atelier"}],f=e=>`${te}${e.toLocaleString("en-US")}`,h=e=>x.find(t=>t.id===e),z=e=>e&&e!=="all"?x.filter(t=>t.category===e):x.slice(),ie=(e,t=3)=>x.filter(n=>n.id!==e.id&&n.category===e.category).slice(0,t),ne=()=>[h("derin-lacivert-abaya"),h("gece-mavisi"),h("yun-pelerin-palto"),h("lacivert-keten-pantolon")].filter(Boolean),q="lebivest.bag.v1",k=new Set,P=(e,t)=>`${e}::${t||"—"}`;function V(){try{const e=localStorage.getItem(q),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}let m=V();function I(){try{localStorage.setItem(q,JSON.stringify(m))}catch{}k.forEach(e=>e(b()))}function ae(e){const t=h(e.id);return t?{key:P(e.id,e.size),id:e.id,size:e.size,qty:e.qty,product:t,lineTotal:t.price*e.qty}:null}function b(){const e=m.map(ae).filter(Boolean),t=e.reduce((a,i)=>a+i.qty,0),n=e.reduce((a,i)=>a+i.lineTotal,0);return{lines:e,count:t,subtotal:n,subtotalLabel:f(n)}}function re(e){return k.add(e),e(b()),()=>k.delete(e)}function oe(e,{size:t=null,qty:n=1}={}){if(!h(e))return;const i=m.find(r=>r.id===e&&r.size===t);i?i.qty+=n:m.push({id:e,size:t,qty:n}),I()}function K(e,t){const n=Math.max(0,t);m=m.map(a=>P(a.id,a.size)===e?{...a,qty:n}:a).filter(a=>a.qty>0),I()}function se(e){m=m.filter(t=>P(t.id,t.size)!==e),I()}window.addEventListener("storage",e=>{e.key===q&&(m=V(),k.forEach(t=>t(b())))});const le="905461532118",U="lebivest",N=`https://instagram.com/${U}`,_=[{label:"Maison",href:"/",match:["/","/index.html"]},{label:"Collections",href:"/collections",match:["/collections","/shop.html"]},{label:"Women",href:"/collections?category=women"},{label:"Men",href:"/collections?category=men"},{label:"About",href:"/about",match:["/about","/about.html"]}];function Y(){const e=window.location.pathname.replace(/\/index\.html$/,"/");return e==="/shop.html"?"/collections":e==="/about.html"?"/about":e}const ce=e=>{var a;const t=Y(),n=new URL(e.href,window.location.origin).pathname.replace(/\/$/,"")||"/";return(a=e.match)!=null&&a.length?e.match.some(i=>i===t||i===window.location.pathname):n===t};function de(){const e=_.map(t=>`<a href="${t.href}" data-nav-link class="link-underline text-[0.72rem] tracking-[0.22em] uppercase ${ce(t)?"opacity-100":"opacity-70 hover:opacity-100"} transition-opacity">${t.label}</a>`).join("");return`
  <header id="site-nav" data-state="top"
    class="fixed top-0 inset-x-0 z-40 transition-all duration-500">
    <div class="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
      <div class="flex items-center justify-between h-[68px] md:h-[88px] transition-all duration-500">
        <!-- left -->
        <div class="flex items-center gap-8 flex-1">
          <button id="menu-open" aria-label="Open menu" class="md:hidden -ml-1 p-1">
            ${ge()}
          </button>
          <nav class="hidden md:flex items-center gap-8">${e.slice(0,e.length)}</nav>
        </div>
        <!-- center wordmark -->
        <a href="/" class="flex-1 text-center" aria-label="LEBIVEST home">
          <span class="font-serif tracking-[0.42em] text-lg md:text-2xl pl-[0.42em]">LEBIVEST</span>
        </a>
        <!-- right -->
        <div class="flex items-center gap-5 sm:gap-7 flex-1 justify-end">
          <a href="/collections" class="hidden sm:inline-block link-underline text-[0.72rem] tracking-[0.22em] uppercase opacity-70 hover:opacity-100">Search</a>
          <button id="bag-open" aria-label="Open bag" class="relative flex items-center gap-2 text-[0.72rem] tracking-[0.22em] uppercase">
            <span class="hidden sm:inline">Bag</span>
            <span class="sm:hidden">${he()}</span>
            <span data-bag-count
              class="inline-flex items-center justify-center min-w-[1.2rem] h-[1.2rem] px-1 rounded-full text-[0.62rem] leading-none bg-ink text-cream data-[empty=true]:opacity-40 transition-opacity">0</span>
          </button>
        </div>
      </div>
    </div>
    <div class="h-px w-full bg-current opacity-0 transition-opacity duration-500" data-nav-rule></div>
  </header>`}function ue(){const e=_.map((t,n)=>`<a href="${t.href}" data-nav-link class="block font-serif text-[2.6rem] leading-tight font-light text-cream/90 hover:text-cream transition-colors"
         style="transition-delay:${60+n*45}ms">${t.label}</a>`).join("");return`
  <div id="mobile-menu" class="fixed inset-0 z-[60] md:hidden invisible opacity-0 pointer-events-none transition-opacity duration-300">
    <div class="menu-backdrop absolute inset-0 bg-ink/40" data-menu-close></div>
    <div class="menu-panel absolute inset-y-0 left-0 w-[84%] max-w-sm bg-ink text-cream flex flex-col">
      <div class="flex items-center justify-between h-[68px] px-5 border-b border-white/10">
        <span class="font-serif tracking-[0.42em] text-lg pl-[0.42em]">LEBIVEST</span>
        <button aria-label="Close menu" data-menu-close class="p-1">${j()}</button>
      </div>
      <nav class="flex-1 px-6 py-10 flex flex-col gap-5">${e}</nav>
      <div class="px-6 py-6 border-t border-white/10 text-[0.65rem] tracking-[0.25em] uppercase text-cream/50">
        Quiet luxury · Est. 2026
      </div>
    </div>
  </div>`}function me(){return`
  <div id="bag-drawer" class="fixed inset-0 z-[70] invisible opacity-0 pointer-events-none transition-opacity duration-300">
    <div class="drawer-backdrop absolute inset-0 bg-ink/45 backdrop-blur-[2px]" data-bag-close></div>
    <aside class="drawer-panel absolute top-0 right-0 h-full w-full max-w-[440px] bg-cream text-ink flex flex-col shadow-2xl pointer-events-auto">
      <div class="flex items-center justify-between px-7 h-[88px] border-b border-ink/10">
        <h2 class="eyebrow">Your Bag <span data-bag-count-label class="text-stone normal-case tracking-normal">(0)</span></h2>
        <button aria-label="Close bag" data-bag-close class="p-1 hover:opacity-60 transition-opacity">${j()}</button>
      </div>
      <div data-bag-lines class="flex-1 overflow-y-auto px-7 py-6"></div>
      <div data-bag-footer class="border-t border-ink/10 px-7 py-6 space-y-5"></div>
    </aside>
  </div>`}function pe(){const e=new Date().getFullYear();return`
  <footer class="bg-ink text-cream/80 mt-px">
    <div class="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 py-20 md:py-28">
      <div class="grid gap-14 md:grid-cols-12">
        <div class="md:col-span-5">
          <span class="font-serif tracking-[0.4em] text-2xl text-cream pl-[0.4em]">LEBIVEST</span>
          <p class="mt-7 max-w-sm font-serif text-2xl leading-snug font-light text-cream/90">
            Anatolian thread, drawn into a quiet, modern line.
          </p>
          <form class="mt-9 max-w-sm" data-newsletter>
            <label class="eyebrow text-cream/50">The Maison Letter</label>
            <div class="mt-3 flex items-center border-b border-cream/30 focus-within:border-cream transition-colors">
              <input type="email" required placeholder="Email address"
                class="flex-1 bg-transparent py-3 text-sm placeholder:text-cream/40 focus:outline-none" />
              <button class="eyebrow py-3 hover:text-cream transition-colors">Join</button>
            </div>
            <p data-newsletter-msg class="mt-3 text-[0.7rem] tracking-wide text-gold-soft h-4"></p>
          </form>
          <div class="mt-9">
            <span class="eyebrow text-cream/50">Follow the Maison</span>
            <a href="${N}" target="_blank" rel="noopener noreferrer"
              class="group mt-3 inline-flex items-center gap-3 border border-cream/25 rounded-full pl-4 pr-5 py-2.5 text-cream/85 hover:text-ink hover:bg-cream hover:border-cream transition-colors">
              ${fe()}
              <span class="text-sm tracking-wide">@${U}</span>
            </a>
          </div>
        </div>
        <div class="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
          ${$("Shop",[["Collections","/collections"],["Women","/collections?category=women"],["Men","/collections?category=men"],["Signature Kilim","/collections"]])}
          ${$("Maison",[["The Atelier","/about"],["Craft & Kilim","/about"],["Sustainability","/about"],["Contact","mailto:atelier@lebivest.com"]])}
          ${$("Client Care",[["Shipping","/about"],["Returns","/about"],["Size Guide","/about"],["Appointments","mailto:atelier@lebivest.com"]])}
        </div>
      </div>
      <div class="mt-20 pt-8 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.66rem] tracking-[0.22em] uppercase text-cream/45">
        <span>© ${e} LEBIVEST — All rights reserved</span>
        <span class="flex gap-6">
          <a href="${N}" target="_blank" rel="noopener noreferrer" class="hover:text-cream transition-colors">Instagram</a>
          <a href="#" class="hover:text-cream transition-colors">Pinterest</a>
          <a href="#" class="hover:text-cream transition-colors">Legal</a>
        </span>
      </div>
    </div>
  </footer>`}const $=(e,t)=>`
  <div>
    <h4 class="eyebrow text-cream/50">${e}</h4>
    <ul class="mt-5 space-y-3 text-sm">
      ${t.map(([n,a])=>`<li><a href="${a}" class="link-underline text-cream/75 hover:text-cream transition-colors">${n}</a></li>`).join("")}
    </ul>
  </div>`;function ge(){return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 6h18M3 12h18M3 18h18"/></svg>'}function j(){return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 5l14 14M19 5L5 19"/></svg>'}function he(){return'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>'}function fe(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>'}function be(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.17 0 4.2.85 5.74 2.38a8.06 8.06 0 0 1 2.38 5.73c0 4.47-3.64 8.11-8.12 8.11a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.05 8.05 0 0 1-1.24-4.27c0-4.48 3.64-8.11 8.12-8.11Zm-2.62 4.3c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.72.13.18 1.85 2.82 4.49 3.96.63.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31-.26-.13-1.55-.76-1.79-.85-.24-.09-.42-.13-.59.13-.18.26-.68.85-.83 1.02-.15.18-.31.2-.57.07-.26-.13-1.1-.41-2.1-1.3-.78-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.16.18-.27.26-.44.09-.18.04-.33-.02-.46-.07-.13-.59-1.42-.81-1.94-.21-.51-.43-.44-.59-.45h-.5Z"/></svg>'}function ye(e){return`Merhaba LEBIVEST 🤍
Aşağıdaki ürünler için sipariş vermek istiyorum:

${e.lines.map((n,a)=>{const i=n.size?`Beden: ${n.size}`:"Beden: Standart";return`${a+1}) ${n.product.name} — ${n.product.nameTr}
   ${i} · Adet: ${n.qty} · ${f(n.lineTotal)}`}).join(`

`)}

Toplam: ${e.subtotalLabel}`}function ve(){const e=b();if(e.lines.length===0){C("Your bag is empty");return}const t=`https://wa.me/${le}?text=${encodeURIComponent(ye(e))}`;window.open(t,"_blank","noopener"),C("Opening WhatsApp to confirm your order")}function we(e){const t=document.querySelector("[data-bag-lines]"),n=document.querySelector("[data-bag-footer]");if(!t||!n)return;document.querySelectorAll("[data-bag-count]").forEach(i=>{i.textContent=e.count,i.dataset.empty=e.count===0});const a=document.querySelector("[data-bag-count-label]");if(a&&(a.textContent=`(${e.count})`),e.lines.length===0){t.innerHTML=`
      <div class="h-full min-h-[40vh] flex flex-col items-center justify-center text-center">
        <p class="font-serif text-3xl font-light">Your bag is empty</p>
        <p class="mt-3 text-sm text-stone max-w-[15rem]">Pieces you add will rest here, waiting.</p>
        <a href="/collections" data-bag-close class="btn btn-dark mt-8">Explore the collection</a>
      </div>`,n.innerHTML="";return}t.innerHTML=e.lines.map(i=>`
    <div class="flex gap-4 py-5 first:pt-0 border-b border-ink/10 last:border-b-0">
      <a href="/product.html?id=${i.id}" class="block w-20 h-28 shrink-0 overflow-hidden bg-sand">
        <img src="${i.product.image}" alt="${i.product.name}" class="w-full h-full object-cover" loading="lazy" />
      </a>
      <div class="flex-1 min-w-0">
        <div class="flex justify-between gap-3">
          <a href="/product.html?id=${i.id}" class="text-sm font-medium leading-snug hover:opacity-60 transition-opacity">${i.product.name}</a>
          <button data-remove="${i.key}" aria-label="Remove" class="text-stone hover:text-ink transition-colors shrink-0">${j()}</button>
        </div>
        <p class="mt-1 text-[0.72rem] tracking-wide uppercase text-stone">${i.product.color}${i.size?` · Size ${i.size}`:""}</p>
        <div class="mt-4 flex items-center justify-between">
          <div class="inline-flex items-center border border-ink/20">
            <button data-dec="${i.key}" aria-label="Decrease" class="w-8 h-8 leading-none hover:bg-ink hover:text-cream transition-colors">–</button>
            <span class="w-8 text-center text-sm tabular-nums">${i.qty}</span>
            <button data-inc="${i.key}" aria-label="Increase" class="w-8 h-8 leading-none hover:bg-ink hover:text-cream transition-colors">+</button>
          </div>
          <span class="text-sm tabular-nums">${f(i.lineTotal)}</span>
        </div>
      </div>
    </div>`).join(""),n.innerHTML=`
    <div class="flex items-center justify-between text-sm">
      <span class="eyebrow">Subtotal</span>
      <span class="font-serif text-2xl">${e.subtotalLabel}</span>
    </div>
    <p class="text-[0.7rem] tracking-wide text-stone">Confirm your order on WhatsApp — your selection and sizes are sent to our atelier. Complimentary worldwide shipping.</p>
    <button class="btn btn-dark w-full" data-checkout>${be()} Order via WhatsApp</button>
    <button class="block w-full text-center eyebrow text-stone hover:text-ink transition-colors" data-bag-close>Continue shopping</button>`,t.querySelectorAll("[data-inc]").forEach(i=>i.addEventListener("click",()=>{const r=b().lines.find(o=>o.key===i.dataset.inc);r&&K(i.dataset.inc,r.qty+1)})),t.querySelectorAll("[data-dec]").forEach(i=>i.addEventListener("click",()=>{const r=b().lines.find(o=>o.key===i.dataset.dec);r&&K(i.dataset.dec,r.qty-1)})),t.querySelectorAll("[data-remove]").forEach(i=>i.addEventListener("click",()=>se(i.dataset.remove)))}function X(){const e=document.getElementById("bag-drawer");e&&(e.classList.remove("invisible","opacity-0","pointer-events-none"),e.classList.add("opacity-100")),document.body.classList.add("drawer-open","overlay-lock")}function w(){const e=document.getElementById("bag-drawer");e&&(e.classList.remove("opacity-100"),e.classList.add("opacity-0","pointer-events-none","invisible")),document.body.classList.remove("drawer-open"),document.body.classList.contains("menu-open")||document.body.classList.remove("overlay-lock")}function xe(){const e=document.getElementById("mobile-menu");e&&(e.classList.remove("invisible","opacity-0","pointer-events-none"),e.classList.add("opacity-100")),document.body.classList.add("menu-open","overlay-lock")}function M(){const e=document.getElementById("mobile-menu");e&&(e.classList.remove("opacity-100"),e.classList.add("opacity-0","pointer-events-none","invisible")),document.body.classList.remove("menu-open"),document.body.classList.contains("drawer-open")||document.body.classList.remove("overlay-lock")}let D;function C(e){let t=document.getElementById("toast");t||(t=document.createElement("div"),t.id="toast",t.className="fixed z-[80] bottom-6 left-1/2 -translate-x-1/2 bg-ink text-cream text-[0.72rem] tracking-[0.2em] uppercase px-6 py-4 opacity-0 translate-y-3 transition-all duration-500 pointer-events-none",document.body.appendChild(t)),t.textContent=e,requestAnimationFrame(()=>{t.classList.remove("opacity-0","translate-y-3")}),clearTimeout(D),D=setTimeout(()=>t.classList.add("opacity-0","translate-y-3"),2400)}function ke(){const e=document.getElementById("site-nav");if(!e)return;const t=document.body.dataset.nav==="overlay",n=e.querySelector("[data-nav-rule]"),a=()=>{const i=window.scrollY>24;t&&!i?(e.style.background="transparent",e.style.color="#ffffff",n&&(n.style.opacity="0")):(e.style.background="rgba(255,255,255,0.92)",e.style.backdropFilter="saturate(180%) blur(12px)",e.style.color="#0c0c0c",n&&(n.style.opacity=i?"0.12":"0.08"))};a(),window.addEventListener("scroll",a,{passive:!0})}function Se(){const e=document.querySelectorAll(".reveal");if(!("IntersectionObserver"in window)||e.length===0){e.forEach(n=>n.classList.add("is-visible"));return}const t=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-visible"),t.unobserve(a.target))})},{threshold:.12,rootMargin:"0px 0px -8% 0px"});e.forEach(n=>t.observe(n))}function y(e=document){const t=e.querySelectorAll?e.querySelectorAll(".reveal"):[];if(!("IntersectionObserver"in window)||t.length===0){t.forEach(a=>a.classList.add("is-visible"));return}const n=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&(i.target.classList.add("is-visible"),n.unobserve(i.target))})},{threshold:.12,rootMargin:"0px 0px -8% 0px"});t.forEach(a=>n.observe(a))}function O(){const e=Y();document.querySelectorAll("[data-nav-link]").forEach(t=>{const a=new URL(t.getAttribute("href"),window.location.origin).pathname.replace(/\/$/,"")||"/";let i=a===e;a==="/collections"?i=e==="/collections":a==="/about"?i=e==="/about":a==="/"&&(i=e==="/"),t.classList.toggle("opacity-100",i),t.classList.toggle("opacity-70",!i)})}function Le(){var n,a,i,r;document.body.insertAdjacentHTML("afterbegin",de()),document.body.insertAdjacentHTML("beforeend",ue()+me()+pe());const e=document.getElementById("mobile-menu"),t=document.getElementById("bag-drawer");e==null||e.classList.add("invisible","opacity-0","pointer-events-none"),t==null||t.classList.add("invisible","opacity-0","pointer-events-none"),(n=document.getElementById("bag-open"))==null||n.addEventListener("click",X),document.querySelectorAll("[data-bag-close]").forEach(o=>o.addEventListener("click",w)),(a=document.getElementById("bag-drawer"))==null||a.addEventListener("click",o=>{o.target.closest("[data-bag-close]")&&w(),o.target.closest("[data-checkout]")&&ve()}),(i=document.getElementById("menu-open"))==null||i.addEventListener("click",xe),document.querySelectorAll("[data-menu-close]").forEach(o=>o.addEventListener("click",M)),document.addEventListener("keydown",o=>{o.key==="Escape"&&(w(),M())}),(r=document.querySelector("[data-newsletter]"))==null||r.addEventListener("submit",o=>{o.preventDefault();const u=o.currentTarget.querySelector("[data-newsletter-msg]");u&&(u.textContent="Welcome to the Maison. Check your inbox."),o.currentTarget.querySelector("input").value=""}),re(we),ke(),Se(),O()}function Te(e,{reveal:t=!0}={}){return`
  <article class="product-card group ${t?"reveal":""}">
    <a href="/product.html?id=${e.id}" class="block relative overflow-hidden bg-sand aspect-[3/4]">
      <img src="${e.image}" alt="${e.name}" loading="lazy"
        class="img-zoom absolute inset-0 w-full h-full object-cover" />
      ${e.badge?`<span class="absolute top-4 left-4 eyebrow bg-cream/90 text-ink px-3 py-1.5">${e.badge}</span>`:""}
      <button data-quick-add="${e.id}"
        class="absolute bottom-4 inset-x-4 btn btn-light bg-cream/95 border-cream/95 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        Add to bag
      </button>
    </a>
    <div class="pt-5 flex items-start justify-between gap-4">
      <div>
        <h3 class="text-sm font-medium leading-snug">
          <a href="/product.html?id=${e.id}" class="link-underline">${e.name}</a>
        </h3>
        <p class="mt-1 text-[0.72rem] tracking-[0.18em] uppercase text-stone">${e.nameTr}</p>
      </div>
      <span class="text-sm tabular-nums shrink-0">${f(e.price)}</span>
    </div>
  </article>`}function S(e,t,n){e.innerHTML=t.map(a=>Te(a,n)).join(""),e.querySelectorAll("[data-quick-add]").forEach(a=>{a.addEventListener("click",i=>{i.preventDefault(),Q(a.dataset.quickAdd)})})}function Q(e,t={}){oe(e,t),C("Added to your bag"),X()}const Ee=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Ae(e){const t=e.play();t&&typeof t.catch=="function"&&t.catch(()=>{})}function $e(e=document){const t=e.querySelectorAll("[data-film]");if(t.length)if("IntersectionObserver"in window&&!Ee){const n=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting?Ae(i.target):i.target.pause()})},{threshold:.35});t.forEach(a=>n.observe(a))}else t.forEach(n=>{n.removeAttribute("autoplay"),n.setAttribute("controls","")})}const H="lebivest:pending-route",ze={"/":{source:"/index.html",title:"LEBIVEST — Quiet Luxury, Anatolian Thread",description:"LEBIVEST — a quiet-luxury maison. Anatolian kilim motifs in gold thread, drawn into modern tailoring. The Autumn–Winter 2026 collection.",nav:"overlay"},"/collections":{source:"/shop.html",title:"The Collection — LEBIVEST",description:"Shop the LEBIVEST collection — trousers, abayas, gowns and outerwear carrying the signature gold kilim motif.",nav:"default"},"/about":{source:"/about.html",title:"The Atelier — LEBIVEST",description:"Inside LEBIVEST — a quiet-luxury maison drawing Anatolian kilim motifs in gold thread onto modern tailoring.",nav:"default"},"/product":{source:"/product.html",title:"Product — LEBIVEST",description:"A LEBIVEST piece — quiet-luxury tailoring with the signature gold kilim motif.",nav:"default"}};function Me(e){const t=e.replace(/\/$/,"")||"/";return t==="/index.html"?"/":t==="/shop.html"?"/collections":t==="/about.html"?"/about":t==="/product.html"?"/product":t}function L(e){const t=new URL(e,window.location.origin),n=Me(t.pathname),a=n==="/collections"||n.startsWith("/collections/")?"/collections":n==="/about"||n.startsWith("/about/")?"/about":n==="/product"||n.startsWith("/product/")?"/product":"/";return{key:a,cleanPath:a==="/"?"/":a,search:t.search,hash:t.hash,source:ze[a].source}}function J(){return document.querySelector("main")}function Z(e){e.nav==="overlay"?document.body.dataset.nav="overlay":delete document.body.dataset.nav}function Ce(e,t){var i;document.title=e.title||t.title;const n=((i=e.querySelector('meta[name="description"]'))==null?void 0:i.content)||t.description;let a=document.head.querySelector('meta[name="description"]');a||(a=document.createElement("meta"),a.setAttribute("name","description"),document.head.appendChild(a)),a.setAttribute("content",n)}function Be(e=document){const t=e.querySelector("[data-featured]");t&&S(t,ne());const n=e.querySelector("[data-rail]");n&&S(n,z("women").slice(0,6)),$e(e),y(e)}function qe(e=document){const t=e.querySelector("[data-grid]"),n=e.querySelector("[data-count]"),a=e.querySelector("[data-shop-title]"),i=e.querySelector("[data-lines]"),r=e.querySelector("[data-sort]"),o=e.querySelector("[data-cats]"),u=new URLSearchParams(window.location.search),s={category:u.get("category")||"all",line:u.get("line")||"all",sort:u.get("sort")||"featured"},d={all:"The Collection",women:"Women",men:"Men"};function T(c){const l=z(c);return["all",...new Set(l.map(p=>p.line))]}function R(c,l,p,g){return`<button data-${g}="${p}" class="eyebrow px-4 py-2 border transition-colors ${l?"bg-ink text-cream border-ink":"border-ink/20 text-stone hover:border-ink hover:text-ink"}">${c}</button>`}function W(){if(!o)return;const c=[["all","All"],["women","Women"],["men","Men"]];o.innerHTML=c.map(([l,p])=>R(p,s.category===l,l,"cat")).join(""),o.querySelectorAll("[data-cat]").forEach(l=>l.addEventListener("click",()=>{s.category=l.dataset.cat,s.line="all",W(),E(),v()}))}function E(){if(!i)return;const c=T(s.category);if(c.length<=2){i.innerHTML="";return}i.innerHTML=c.map(l=>R(l==="all"?"Everything":l,s.line===l,l,"line")).join(""),i.querySelectorAll("[data-line]").forEach(l=>l.addEventListener("click",()=>{s.line=l.dataset.line,E(),v()}))}function v(){let c=z(s.category);s.line!=="all"&&(c=c.filter(g=>g.line===s.line)),s.sort==="price-asc"?c=c.slice().sort((g,A)=>g.price-A.price):s.sort==="price-desc"&&(c=c.slice().sort((g,A)=>A.price-g.price)),t&&S(t,c,{reveal:!1}),n&&(n.textContent=`${c.length} ${c.length===1?"piece":"pieces"}`),a&&(a.textContent=d[s.category]||"The Collection");const l=new URLSearchParams;s.category!=="all"&&l.set("category",s.category),s.line!=="all"&&l.set("line",s.line),s.sort!=="featured"&&l.set("sort",s.sort);const p=l.toString();history.replaceState(null,"",p?`/collections?${p}`:"/collections"),y(e)}r&&(r.value=s.sort,r.addEventListener("change",()=>{s.sort=r.value,v()})),W(),E(),v()}function Pe(e=document){y(e)}function Ie(e=document){var u,s;const t=e.querySelector("[data-product]"),n=e.querySelector("[data-related]");if(!t)return;const a=new URLSearchParams(window.location.search).get("id"),i=a?h(a):null;if(!i){t.innerHTML=`
      <div class="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <p class="eyebrow text-stone">404</p>
        <h1 class="mt-4 font-serif text-4xl font-light">This piece could not be found</h1>
        <a href="/collections" class="btn btn-dark mt-8">Return to the collection</a>
      </div>`,n&&(n.innerHTML=""),y(e);return}document.title=`${i.name} — LEBIVEST`;let r=null;t.innerHTML=`
  <nav class="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 pt-28 md:pt-36 pb-6 text-[0.7rem] tracking-[0.18em] uppercase text-stone">
    <a href="/" class="hover:text-ink transition-colors">Maison</a>
    <span class="mx-2">/</span>
    <a href="/collections?category=${i.category}" class="hover:text-ink transition-colors">${i.category==="men"?"Men":"Women"}</a>
    <span class="mx-2">/</span>
    <span class="text-ink">${i.name}</span>
  </nav>

  <div class="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-20 pb-24">
    <div class="lg:sticky lg:top-28 self-start">
      <div class="overflow-hidden bg-sand aspect-[3/4]">
        <img src="${i.image}" alt="${i.name}" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="lg:py-6 max-w-xl">
      ${i.badge?`<span class="eyebrow text-gold">${i.badge}</span>`:""}
      <h1 class="display text-4xl md:text-5xl mt-3">${i.name}</h1>
      <p class="mt-2 text-sm tracking-[0.18em] uppercase text-stone">${i.nameTr}</p>
      <p class="mt-6 font-serif text-3xl">${f(i.price)}</p>

      <p class="mt-8 text-[15px] leading-relaxed text-ink/80">${i.description}</p>

      <div class="mt-8 flex items-center justify-between">
        <span class="eyebrow">Size</span>
        <button class="text-[0.7rem] tracking-[0.18em] uppercase text-stone hover:text-ink transition-colors link-underline" data-size-guide>Size guide</button>
      </div>
      <div class="mt-3 flex flex-wrap gap-2" data-sizes>
        ${i.sizes.map(d=>`<button data-size="${d}" class="min-w-[3rem] px-3 h-11 border border-ink/20 text-sm hover:border-ink transition-colors">${d}</button>`).join("")}
      </div>
      <p data-size-msg class="mt-2 text-[0.72rem] tracking-wide text-gold h-4"></p>

      <button data-add class="btn btn-dark w-full mt-6">Add to bag — ${f(i.price)}</button>
      <p class="mt-4 text-center text-[0.7rem] tracking-wide text-stone">Complimentary worldwide shipping & returns</p>

      <dl class="mt-10 border-t border-ink/10 divide-y divide-ink/10">
        <div class="py-4 flex justify-between gap-6 text-sm">
          <dt class="text-stone">Colour</dt><dd class="text-right">${i.color}</dd>
        </div>
        <div class="py-4 flex justify-between gap-6 text-sm">
          <dt class="text-stone">Fabric</dt><dd class="text-right">${i.fabric}</dd>
        </div>
        <div class="py-4 flex justify-between gap-6 text-sm">
          <dt class="text-stone">Details</dt>
          <dd class="text-right"><ul class="space-y-1">${i.details.map(d=>`<li>${d}</li>`).join("")}</ul></dd>
        </div>
      </dl>
    </div>
  </div>`;const o=e.querySelector("[data-size-msg]");e.querySelectorAll("[data-size]").forEach(d=>d.addEventListener("click",()=>{r=d.dataset.size,e.querySelectorAll("[data-size]").forEach(T=>T.classList.remove("bg-ink","text-cream","border-ink")),d.classList.add("bg-ink","text-cream","border-ink"),o&&(o.textContent="")})),(u=e.querySelector("[data-size-guide]"))==null||u.addEventListener("click",()=>{o&&(o.textContent="Fits true to size. Between sizes? Take the larger.")}),(s=e.querySelector("[data-add]"))==null||s.addEventListener("click",()=>{if(!r){o&&(o.textContent="Please select a size.");return}Q(i.id,{size:r})}),n&&S(n,ie(i,3)),y(e)}function ee(e,t=document){e.key==="/"?Be(t):e.key==="/collections"?qe(t):e.key==="/about"?Pe(t):Ie(t)}function G(e,t){const n=J(),a=e.querySelector("main");!n||!a||(n.innerHTML=a.innerHTML,Z(t),Ce(e,t),ee(t,document),O(),window.scrollTo(0,0))}async function je(e){const t=await fetch(e.source,{credentials:"same-origin"});if(!t.ok)throw new Error(`Failed to load ${e.source}`);const n=await t.text();return new DOMParser().parseFromString(n,"text/html")}async function B(e,{replace:t=!1}={}){const n=typeof e=="string"?L(e):e;w(),M();const a=await je(n),i=`${n.cleanPath}${n.search}${n.hash}`;if(document.startViewTransition){await document.startViewTransition(()=>{t?history.replaceState(null,"",i):history.pushState(null,"",i),G(a,n)}).finished;return}const r=J();r==null||r.classList.add("is-leaving"),await new Promise(o=>requestAnimationFrame(o)),t?history.replaceState(null,"",i):history.pushState(null,"",i),G(a,n),r==null||r.classList.remove("is-leaving")}function Oe(){const e=L(window.location.href),t=`${e.cleanPath}${e.search}${e.hash}`;history.replaceState(null,"",t),Z(e),ee(e,document),O(),window.scrollTo(0,0)}function Re(){document.addEventListener("click",e=>{const t=e.target.closest("a[href]");if(!t||t.target==="_blank"||t.hasAttribute("download")||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;const n=new URL(t.getAttribute("href"),window.location.origin);if(n.origin!==window.location.origin||n.pathname.startsWith("/images/")||n.pathname.startsWith("/public/")||n.pathname.startsWith("/assets/")||n.pathname===window.location.pathname&&n.search===window.location.search&&n.hash===window.location.hash)return;const a=L(n.href);e.preventDefault(),B(a)},!0),window.addEventListener("popstate",()=>{const e=L(window.location.href);B(e,{replace:!0})})}function We(){const e=sessionStorage.getItem(H);return e?(sessionStorage.removeItem(H),e):null}Le();Re();const F=We();F?B(F,{replace:!0}):Oe();
