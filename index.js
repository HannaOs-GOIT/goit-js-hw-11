import{a as y,S as g,i as l}from"./assets/vendor-BDaiwwc1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="49053882-7e244883c6f1c912e1433ba1a";async function h(s){const t="https://pixabay.com/api/",o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await y.get(t,{params:o})).data.hits}catch(a){throw console.error("Error fetching images:",a),a}}const f=document.querySelector(".gallery");let i;function b(s){const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:n,comments:m,downloads:u})=>`
            <li class="gallery-item">
                <div class="gallery">
                    <a href="${a}">
                        <img class="gallery-image" src="${o}" alt="${e}" loading="lazy">
                    </a>
                </div>

                <div class="info">
                    <p><b>Likes:</b> ${r}</p>
                    <p><b>Views:</b> ${n}</p>
                    <p><b>Comments:</b> ${m}</p>
                    <p><b>Downloads:</b> ${u}</p>
                </div>
            </li>
        `).join("");f.innerHTML=t,i||(i=new g(".gallery a")),i.refresh()}function E(){f.innerHTML="",i&&(i.destroy(),i=null)}const L=document.getElementById("search-form"),c=document.getElementById("loader"),d=document.getElementById("loading-text");L.addEventListener("submit",I);async function I(s){s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){l.error({title:"Error",message:"Please enter a search query."});return}c.style.display="block",d.style.display="block",E();try{const o=await h(t);o.length===0?l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):b(o)}catch(o){console.error("Error fetching images:",o),l.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{c.style.display="none",d.style.display="none",s.target.reset()}}
//# sourceMappingURL=index.js.map
