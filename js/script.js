// VITASCAN: navegación entre páginas, filtros, lista de síntomas y QR.
document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.querySelector(".menu-toggle"),nav=document.getElementById("mainNav");
 if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});}
 const drop=document.querySelector(".nav-dropdown"),toggle=document.querySelector(".dropdown-toggle");
 if(drop&&toggle){toggle.addEventListener("click",()=>{const open=drop.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});document.addEventListener("click",e=>{if(!drop.contains(e.target)){drop.classList.remove("open");toggle.setAttribute("aria-expanded","false");}});}
 const cards=[...document.querySelectorAll("#diseaseGrid .disease-card")],filters=[...document.querySelectorAll(".filter-btn")],counter=document.getElementById("resultsCount");
 filters.forEach(btn=>btn.addEventListener("click",()=>{filters.forEach(b=>b.classList.toggle("active",b===btn));const visible=cards.filter(card=>btn.dataset.filter==="todas"||card.dataset.group===btn.dataset.filter);cards.forEach(card=>card.hidden=!visible.includes(card));if(counter)counter.textContent=visible.length+" fichas informativas";}));
 const symptoms=[...document.querySelectorAll('input[name="symptom"]')],symptomResult=document.getElementById("symptomResult");
 if(symptomResult)symptoms.forEach(item=>item.addEventListener("change",()=>{const n=symptoms.filter(x=>x.checked).length;symptomResult.textContent=n?"Has marcado "+n+" elemento(s) para comentar en una consulta. Esto no determina un diagnóstico ni una etapa.":"No has seleccionado ningún elemento. Tus respuestas no se guardan.";}));
 const qrSelect=document.getElementById("qrSelect"),qrBox=document.getElementById("qrcode"),qrLink=document.getElementById("qrDirectLink");
 const qrNames={"vih":"VIH 1 y 2","sifilis":"Sífilis","hepatitis-b":"Hepatitis B","hepatitis-c":"Hepatitis C","clamidia":"Clamidia","gonorrea":"Gonorrea","vph":"VPH"};
 function makeQr(){if(!qrSelect||!qrBox)return;const id=qrSelect.value;const url=new URL("enfermedades/"+id+".html",location.href).href;qrBox.innerHTML="";if(qrLink)qrLink.href=url;document.getElementById("qrName").textContent="Código QR · "+qrNames[id];const placeholder=document.getElementById("qrPlaceholder");if(typeof QRCode==="undefined"){placeholder.textContent="No se pudo cargar el QR. Revisa la conexión.";placeholder.style.display="block";return;}placeholder.style.display="none";new QRCode(qrBox,{text:url,width:166,height:166,colorDark:"#173d49",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M});}
 if(qrSelect){qrSelect.addEventListener("change",makeQr);makeQr();}
 const download=document.getElementById("downloadQr");
 if(download)download.addEventListener("click",()=>{const canvas=qrBox?.querySelector("canvas"),img=qrBox?.querySelector("img"),url=canvas?.toDataURL("image/png")||img?.src;if(!url){const toast=document.getElementById("toast");if(toast){toast.textContent="No se pudo generar el QR.";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2500);}return;}const a=document.createElement("a");a.href=url;a.download="VITASCAN-"+qrSelect.value+".png";document.body.appendChild(a);a.click();a.remove();});
});
