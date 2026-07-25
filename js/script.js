// =====================================
// Birthday Surprise Script
// =====================================

const giftButton = document.getElementById("giftButton");
const typedText = document.getElementById("typedText");
const music = document.getElementById("bgMusic");
const cake = document.getElementById("cakeEmoji");
const hearts = document.getElementById("hearts");


// ------------------------------
// Floating Hearts
// ------------------------------

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const emojis = ["❤️","💖","💕","💗","💝"];

    heart.innerHTML =
        emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
        (18 + Math.random()*25) + "px";

    heart.style.animationDuration =
        (6 + Math.random()*6) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,350);


// ------------------------------
// Hide Loader
// ------------------------------

window.onload = ()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";

    },2500);

};


// ------------------------------
// Gift Button
// ------------------------------

giftButton.addEventListener("click",()=>{

    if(music){

        music.play().catch(()=>{});

    }

    document.getElementById("story").scrollIntoView({

        behavior:"smooth"

    });

    startTypewriter();

});


// ------------------------------
// Typewriter Letter
// ------------------------------

const message = `

My Dearest Grace ❤️,

Happy Birthday to you.

Today I celebrate not just your birthday,
but the wonderful woman you are.

These past few months have been filled with
beautiful conversations, unforgettable outings,
laughter, and memories that I truly cherish.

Thank you for allowing me to know you.

Thank you for your kindness,
your beautiful smile,
your caring heart,
and the happiness you bring.

As you begin another year today,
I pray that God blesses you with
good health,
peace,
joy,
wisdom,
favor,
success,
and open doors beyond your imagination.

May your dreams become reality.

May your smile never fade.

May God continue to order your steps
and surround you with people
who genuinely love and appreciate you.

Never stop believing in yourself.

Keep shining.

Keep smiling.

Enjoy every single moment today.

Happy Birthday once again,
Grace.

With Love ❤️

Jonathan

`;

let index = 0;
let started = false;

function startTyping(){

    if(started) return;

    started = true;

    function type(){

        if(index < message.length){

            typedText.innerHTML += message.charAt(index);

            index++;

            setTimeout(type,35);

        }

    }

    type();

}


// ------------------------------
// Cake Click
// ------------------------------

cake.addEventListener("click",()=>{

    cake.innerHTML="🎉";

    alert("🎂 Happy Birthday Grace! May all your wishes come true! ❤️");

    launchFireworks();

});


// ------------------------------
// Confetti
// ------------------------------

function launchConfetti(){

    for(let i=0;i<120;i++){

        const confetti = document.createElement("div");

        confetti.innerHTML="🎊";

        confetti.style.position="fixed";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.fontSize=(12+Math.random()*18)+"px";

        confetti.style.transition="4s linear";

        confetti.style.zIndex=9999;

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.style.top="110vh";

            confetti.style.transform=

            `rotate(${Math.random()*720}deg)`;

        },50);

        setTimeout(()=>{

            confetti.remove();

        },4500);

    }

}


// ------------------------------
// Fade Sections
// ------------------------------

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});