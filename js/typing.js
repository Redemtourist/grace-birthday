// =======================================
// TYPING.JS
// =======================================

const cursor = "|";

const birthdayLetter = `

My Dearest Grace ❤️,

Happy Birthday.

I honestly don't know where to begin.

Meeting you has been one of the beautiful parts of my year.

Every conversation...
Every outing...
Every laugh...
Every smile...

has become a memory I'll always treasure.

I pray that this new year brings you joy,
peace,
good health,
success,
favor
and abundant blessings.

May God continue to guide your path
and make all things work together for your good.

Keep smiling.

Keep shining.

Never stop being the amazing woman you are.

Happy Birthday once again.

With Love ❤️

Jonathan

`;

const output=document.getElementById("typedText");

let pointer=0;

function typeWriter(){

if(pointer<birthdayLetter.length){

output.innerHTML=

birthdayLetter.substring(0,pointer)+

"<span style='opacity:.5'>|</span>";

pointer++;

setTimeout(typeWriter,32);

}else{

output.innerHTML=birthdayLetter;

}

}

window.startTypewriter=typeWriter;