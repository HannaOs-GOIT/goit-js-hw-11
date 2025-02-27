import{a as f,S as y,i}from"./assets/vendor-BDaiwwc1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="49053882-7e244883c6f1c912e1433ba1a";async function p(a){const t="https://pixabay.com/api/",o={key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await f.get(t,{params:o})).data.hits}catch(s){throw console.error("Error fetching images:",s),s}}const d=document.querySelector(".gallery");let c;function h(a){const t=a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:n,comments:u,downloads:m})=>`
            <li class="gallery-item">
                    <a href="${s}" class="gallery">
                    <img class="gallery-image" src="${o}" alt="${e}">
                    </a>
                

                <div class="info">
                    <p><b>Likes:</b> ${r}</p>
                    <p><b>Views:</b> ${n}</p>
                    <p><b>Comments:</b> ${u}</p>
                    <p><b>Downloads:</b> ${m}</p>
                </div>
            </li>
        `).join("");d.innerHTML=t,c||(c=new y(".gallery a")),c.refresh()}const b=document.querySelector(".search-form"),l=document.querySelector(".loader"),L=document.querySelector(".gallery");b.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements.searchQuery.value.trim();if(!t){i.warning({message:"Please enter a search query!"});return}l.style.display="block",L.innerHTML="";try{const o=await p(t);if(o.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o)}catch{i.error({message:"Something went wrong. Please try again later."})}finally{l.style.display="none"}});
//# sourceMappingURL=index.js.map
