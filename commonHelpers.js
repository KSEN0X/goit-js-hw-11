import{s as g,i as l}from"./assets/vendor-87ec4f81.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const b=document.querySelector(".form"),c=document.querySelector("#input"),u=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";let L=new g("ul.gallery a",{captionDelay:250,captionsData:"alt"});b.addEventListener("submit",a=>{a.preventDefault();const o=c.value.trim();u.innerHTML="",c.value="",n.style.display="block";const i=new URLSearchParams({key:"41748903-b29fd083c740b117cdeeb235d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${i}`).then(r=>{if(n.style.display="none",!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length===0)throw l.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"#EF4040",titleColor:"white",position:"topRight"});const e=r.hits.reduce((t,{webformatURL:s,largeImageURL:d,tags:p,likes:m,views:f,comments:y,downloads:h})=>t+`<li class="gallery-item">
          <a class="gallery-link" href="${d}">
           <img class="gallery-image"
           src="${s}"
           alt="${p}"
           />
          </a>          
          <div class="description">
          <p><b>Likes:</b><span>${m}</span></p>
          <p><b>Views:</b><span>${f}</span></p>
          <p><b>Comments:</b><span>${y}</span></p>
          <p><b>Downloads:</b><span>${h}</span></p>
          </div> 
        </li>`,"");u.insertAdjacentHTML("beforeend",e),L.refresh()}).catch(r=>{n.style.display="none",l.error({message:r.message,color:"red",position:"topCenter"}),console.error("Error fetching data:",r)})});
//# sourceMappingURL=commonHelpers.js.map
