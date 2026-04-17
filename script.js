/* CLICK SOUND */
const clickSound = new Audio("assets/click.mp3");

/* BACKGROUND MUSIC */
const music = new Audio("assets/music.mp3");
music.loop = true;
music.volume = 0.2;
window.onload = () => music.play();

/* PLAY CLICK */
function playClick(){
  clickSound.currentTime = 0;
  clickSound.play();
}

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el=>{
  observer.observe(el);
});

/* PLAYER DATA */
const players = {
raj:{
name:"Raj",
role:"Owner",
ign:"TSxRXJ",
uid:"55720702033",
discord:"@TSxRAJ",
insta:"https://instagram.com/raj_odedra.00",
wa:"6356117045"
},

karan:{
name:"Karan",
role:"Co-Owner",
ign:"TSxTankerz",
uid:"5775954453",
discord:"@TSxTankerz",
insta:"https://instagram.com/k_a_r_a_n_k_u_s_h_w_a_h_a",
wa:"8368245973"
},

iconic:{
name:"Iconic",
role:"T1 Player",
ign:"TSxIC0NIC",
uid:"55582848562",
discord:"@ICONIC",
insta:"https://instagram.com/0p_iconic",
ach:"BGIS R2, 50K Semis, 60K Semis"
},

ultron:{
name:"Ultron",
role:"Manager",
discord:"@ultron_og",
insta:"https://instagram.com/_ultron.y"
}
};

/* LOAD PLAYER PAGE */
function loadPlayer(){
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = players[id];

  if(!p) return;

  document.getElementById("name").innerText = p.name;
  document.getElementById("role").innerText = p.role;

  document.getElementById("details").innerHTML = `
    ${p.ign ? `<p>IGN: ${p.ign}</p>`:""}
    ${p.uid ? `<p>UID: ${p.uid}</p>`:""}
    ${p.discord ? `<p>Discord: ${p.discord}</p>`:""}
    ${p.ach ? `<p>${p.ach}</p>`:""}
    ${p.insta ? `<a class="link" href="${p.insta}" target="_blank">Instagram</a>`:""}
    ${p.wa ? `<a class="link" href="https://wa.me/${p.wa}">WhatsApp</a>`:""}
  `;
}