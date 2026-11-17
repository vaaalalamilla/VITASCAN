// VITASCAN: contenido informativo y navegación por código QR.
const diseases = [
 {id:"vih",name:"VIH 1 y 2",group:"sangre",sample:"PRUEBA EN SANGRE",icon:"♡",desc:"Información sobre el virus de la inmunodeficiencia humana y las pruebas para detectarlo.",about:"El VIH afecta al sistema inmunitario. Con tratamiento antirretroviral, las personas con VIH pueden mantener su salud y prevenir la progresión de la infección.",symptoms:["Fiebre o malestar similar a una gripe","Dolor de garganta","Ganglios inflamados","Cansancio","Puede no presentar síntomas"],stages:["Infección aguda","Infección crónica","SIDA (etapa avanzada)"],test:"Prueba de detección de VIH; según el tipo y el momento de exposición, el personal de salud puede indicar una prueba de seguimiento o confirmatoria.",care:"El tratamiento antirretroviral permite controlar el VIH. La etapa no se determina marcando síntomas: requiere valoración clínica y estudios como el recuento de CD4 y la carga viral."},
 {id:"sifilis",name:"Sífilis",group:"sangre",sample:"PRUEBA EN SANGRE",icon:"✚",desc:"Conoce sus manifestaciones, etapas clínicas y la importancia de realizar pruebas.",about:"La sífilis es una infección bacteriana que puede avanzar por distintas etapas si no recibe tratamiento.",symptoms:["Llaga generalmente indolora","Erupción en la piel, incluso palmas o plantas","Fiebre o ganglios inflamados","Dolor de garganta o cansancio","Puede no presentar síntomas"],stages:["Primaria","Secundaria","Latente","Terciaria"],test:"Se utilizan pruebas serológicas. El personal de salud interpreta los resultados y puede solicitar pruebas adicionales.",care:"La sífilis se puede curar con antibióticos indicados por personal médico. La etapa y el tratamiento dependen de la evaluación clínica y los resultados de laboratorio."},
 {id:"hepatitis-b",name:"Hepatitis B",group:"sangre",sample:"PRUEBA EN SANGRE",icon:"◉",desc:"Información sobre la infección del hígado causada por el virus de la hepatitis B.",about:"La hepatitis B es una infección viral que afecta al hígado. Puede ser aguda o convertirse en una infección crónica.",symptoms:["Cansancio","Náuseas o vómitos","Dolor abdominal","Orina oscura o piel amarillenta","Puede no presentar síntomas"],stages:["Infección aguda","Infección crónica"],test:"Se utilizan marcadores en sangre, como el antígeno de superficie y otros análisis que el profesional selecciona según el caso.",care:"Existe vacuna para prevenir la hepatitis B. La infección crónica requiere seguimiento médico; no se determina su evolución por síntomas solamente."},
 {id:"hepatitis-c",name:"Hepatitis C",group:"sangre",sample:"PRUEBA EN SANGRE",icon:"◉",desc:"Conoce cómo se detecta el virus de la hepatitis C y por qué es importante el seguimiento.",about:"La hepatitis C es una infección viral que afecta al hígado. Muchas personas no presentan síntomas durante años.",symptoms:["Cansancio","Náuseas","Molestias abdominales","Orina oscura o piel amarillenta","Puede no presentar síntomas"],stages:["Infección aguda","Infección crónica"],test:"La detección suele iniciar con anticuerpos contra VHC y, si corresponde, una prueba de ARN para saber si existe infección activa.",care:"Actualmente existen tratamientos antivirales que curan a la mayoría de las personas. Se necesita valoración y pruebas para confirmar infección activa."},
 {id:"clamidia",name:"Clamidia",group:"saliva",sample:"MUESTRA SEGÚN PRUEBA",icon:"✧",desc:"Información sobre una infección bacteriana que con frecuencia no presenta síntomas.",about:"La clamidia es una infección bacteriana. Puede afectar distintas zonas del cuerpo y muchas personas no notan síntomas.",symptoms:["Ardor al orinar","Secreción genital inusual","Dolor en la parte baja del abdomen","Dolor o secreción rectal, según exposición","Puede no presentar síntomas"],stages:[],test:"La prueba habitual suele ser una prueba molecular (NAAT) en muestra de orina o hisopo del sitio correspondiente. Confirma con el laboratorio qué muestra utiliza.",care:"Se puede tratar con antibióticos recetados. Las parejas sexuales también pueden necesitar evaluación y tratamiento; sigue las indicaciones médicas."},
 {id:"gonorrea",name:"Gonorrea",group:"saliva",sample:"MUESTRA SEGÚN PRUEBA",icon:"✧",desc:"Consulta síntomas posibles, pruebas de detección y opciones de atención.",about:"La gonorrea es una infección bacteriana que puede afectar genitales, recto o garganta. A veces no causa síntomas.",symptoms:["Ardor al orinar","Secreción genital","Dolor testicular o pélvico","Molestias de garganta o recto según sitio","Puede no presentar síntomas"],stages:[],test:"Se utilizan pruebas moleculares (NAAT) en muestras del sitio que se desea evaluar, como orina o hisopos. La muestra depende del sitio de exposición.",care:"Requiere antibióticos indicados por personal médico. Debido a la resistencia bacteriana, es importante no automedicarse y seguir el control recomendado."},
 {id:"vph",name:"Virus del Papiloma Humano (VPH)",group:"saliva",sample:"MÉTODO SEGÚN INDICACIÓN",icon:"✦",desc:"Información sobre el VPH, sus tipos, prevención y pruebas disponibles.",about:"El VPH es un grupo de virus muy común. Algunos tipos pueden causar verrugas y otros se relacionan con ciertos cánceres. Muchas infecciones desaparecen por sí solas.",symptoms:["Con frecuencia no presenta síntomas","Algunos tipos causan verrugas","Cambios celulares que solo se detectan con pruebas","Las manifestaciones dependen del tipo"],stages:[],test:"La detección depende de la zona y la indicación clínica. Para cuello uterino existen pruebas de VPH y citología. Una prueba de saliva no es el método estándar para detectar VPH de cuello uterino.",care:"La vacunación ayuda a prevenir varios tipos de VPH. El seguimiento se realiza según edad, antecedentes y recomendaciones de personal de salud."}
];

const grid = document.getElementById("diseaseGrid");
const detailSection = document.getElementById("detalleEnfermedad");
const detailContent = document.getElementById("diseaseDetail");
const toast = document.getElementById("toast");
let qrInstance = null;

function showToast(message){toast.textContent=message;toast.classList.add("show");window.setTimeout(()=>toast.classList.remove("show"),2600)}
function renderCards(filter="todas"){
 const visible=diseases.filter(d=>filter==="todas"||d.group===filter);
 grid.innerHTML=visible.map(d=>`<button class="disease-card" type="button" data-id="${d.id}" aria-label="Consultar información sobre ${d.name}"><span class="disease-icon">${d.icon}</span><h3>${d.name}</h3><p>${d.desc}</p><span class="card-bottom"><span class="sample-tag">${d.sample}</span><span class="card-arrow">↗</span></span></button>`).join("");
 document.getElementById("resultsCount").textContent=visible.length+" fichas informativas";
 grid.querySelectorAll("[data-id]").forEach(card=>card.addEventListener("click",()=>openDisease(card.dataset.id)));
}
function openDisease(id){
 const d=diseases.find(item=>item.id===id);if(!d)return;
 document.querySelector(".diseases-section").hidden=true;
 document.querySelector(".how-section").hidden=true;
 document.querySelector(".qr-section").hidden=true;
 document.querySelector(".faq-section").hidden=true;
 detailSection.hidden=false;
 const list=items=>items.length?items.map(x=>`<li>${x}</li>`).join(""):"<li>No se clasifica mediante etapas clínicas de la misma manera que otras infecciones. Consulta la información y las pruebas indicadas.</li>";
 detailContent.innerHTML=`
 <div class="detail-hero"><span class="disease-icon">${d.icon}</span><div><span class="eyebrow">GUÍA DE INFORMACIÓN</span><h2>${d.name}</h2><p>${d.desc}</p></div></div>
 <div class="detail-grid">
  <article class="detail-card"><h3>¿Qué es?</h3><p>${d.about}</p></article>
  <article class="detail-card"><h3>Etapas o evolución</h3><ul>${list(d.stages)}</ul><p>Las etapas se determinan con evaluación clínica y pruebas, no con una lista de síntomas.</p></article>
  <article class="detail-card"><h3>Síntomas que pueden presentarse</h3><p>Marca los aspectos que deseas comentar con un profesional. Esta lista no confirma ni descarta una infección.</p><div class="symptom-form">${d.symptoms.map((s,i)=>`<label><input type="checkbox" name="symptom" value="${i}"> ${s}</label>`).join("")}</div><div class="form-result" id="symptomResult" aria-live="polite">Aún no has seleccionado ningún elemento. Tus selecciones no se guardan.</div></article>
  <article class="detail-card"><h3>¿Cómo se detecta?</h3><p>${d.test}</p><h3>Orientación y control</h3><p>${d.care}</p></article>
  <article class="detail-card"><h3>Importante</h3><p>Esta ficha es educativa. No reemplaza una consulta, no interpreta resultados de laboratorio y no indica una etapa individual. Si tienes una exposición reciente o inquietudes, consulta a un servicio de salud para recibir orientación confidencial.</p></article>
 </div>`;
 detailContent.querySelectorAll('input[name="symptom"]').forEach(input=>input.addEventListener("change",()=>{
  const count=detailContent.querySelectorAll('input[name="symptom"]:checked').length;
  document.getElementById("symptomResult").textContent=count? "Has seleccionado "+count+" elemento(s) para comentar en tu consulta. Esto no determina una etapa ni un diagnóstico.":"No has seleccionado ningún elemento. Tus selecciones no se guardan.";
 }));
 history.replaceState(null,"","#enfermedades/"+id);
 detailSection.scrollIntoView({behavior:"smooth",block:"start"});
}
function closeDisease(){
 detailSection.hidden=true;
 document.querySelector(".diseases-section").hidden=false;
 document.querySelector(".how-section").hidden=false;
 document.querySelector(".qr-section").hidden=false;
 document.querySelector(".faq-section").hidden=false;
 history.replaceState(null,"",location.pathname+location.search);
 document.querySelector(".diseases-section").scrollIntoView({behavior:"smooth"});
}
document.querySelectorAll(".filter-btn").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderCards(btn.dataset.filter);
}));
document.getElementById("backToDiseases").addEventListener("click",closeDisease);

const qrSelect=document.getElementById("qrSelect");
qrSelect.innerHTML=diseases.map(d=>`<option value="${d.id}">${d.name}</option>`).join("");
function makeQr(){
 const d=diseases.find(item=>item.id===qrSelect.value);if(!d)return;
 const target=new URL(location.href);target.hash="enfermedades/"+d.id;
 const qrBox=document.getElementById("qrcode");qrBox.innerHTML="";
 document.getElementById("qrPlaceholder").style.display="none";
 if(typeof QRCode==="undefined"){document.getElementById("qrPlaceholder").style.display="block";document.getElementById("qrPlaceholder").textContent="No se pudo cargar el generador QR. Revisa tu conexión.";return;}
 qrInstance=new QRCode(qrBox,{text:target.href,width:166,height:166,colorDark:"#173d49",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M});
 document.getElementById("qrName").textContent="Código QR · "+d.name;
}
qrSelect.addEventListener("change",makeQr);
document.getElementById("downloadQr").addEventListener("click",()=>{
 const qrBox=document.getElementById("qrcode");const img=qrBox.querySelector("img");const canvas=qrBox.querySelector("canvas");
 const url=img?.src||(canvas?canvas.toDataURL("image/png"):null);
 if(!url){showToast("Primero espera a que se genere el código QR.");return;}
 const a=document.createElement("a");a.href=url;a.download="VITASCAN-QR-"+qrSelect.value+".png";document.body.appendChild(a);a.click();a.remove();
});
document.getElementById("menuToggle").addEventListener("click",()=>{
 const nav=document.getElementById("mainNav");const open=nav.classList.toggle("open");document.getElementById("menuToggle").setAttribute("aria-expanded",String(open));
});
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>{document.getElementById("mainNav").classList.remove("open");document.getElementById("menuToggle").setAttribute("aria-expanded","false")}));

// Cuando el QR abre una URL con #enfermedades/id, se muestra la ficha solicitada.
function routeFromHash(){
 const match=location.hash.match(/^#enfermedades\/([a-z0-9-]+)$/);
 if(match)openDisease(match[1]);
}
renderCards();makeQr();routeFromHash();
