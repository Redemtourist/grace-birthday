// ===================================
// MUSIC
// ===================================

const bg=document.getElementById("bgMusic");

let playing=false;

function playMusic(){

if(playing) return;

bg.play().catch(()=>{});

playing=true;

}

document.body.addEventListener("click",playMusic,{
once:true
});