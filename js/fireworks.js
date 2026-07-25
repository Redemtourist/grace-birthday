// =======================================
// FIREWORKS.JS
// =======================================

class Firework {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.particles = [];

        for (let i = 0; i < 80; i++) {

            this.particles.push({

                x: x,
                y: y,

                radius: Math.random() * 3 + 2,

                angle: Math.random() * Math.PI * 2,

                speed: Math.random() * 8 + 3,

                alpha: 1,

                color: `hsl(${Math.random()*360},100%,60%)`

            });

        }

    }

    update(ctx){

        this.particles.forEach(p=>{

            p.x += Math.cos(p.angle)*p.speed;
            p.y += Math.sin(p.angle)*p.speed;

            p.speed *= .97;

            p.alpha -= .015;

            ctx.globalAlpha = p.alpha;

            ctx.beginPath();

            ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);

            ctx.fillStyle=p.color;

            ctx.fill();

        });

    }

}

const canvas=document.createElement("canvas");

canvas.style.position="fixed";
canvas.style.left="0";
canvas.style.top="0";
canvas.style.width="100%";
canvas.style.height="100%";
canvas.style.pointerEvents="none";
canvas.style.zIndex="99999";

document.body.appendChild(canvas);

const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const fireworks=[];

function launchFirework(){

fireworks.push(

new Firework(

Math.random()*canvas.width,

Math.random()*canvas.height/2+50

)

);

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=fireworks.length-1;i>=0;i--){

fireworks[i].update(ctx);

if(fireworks[i].particles[0].alpha<=0){

fireworks.splice(i,1);

}

}

requestAnimationFrame(animate);

}

animate();

window.launchFireworks=function(){

let count=0;

const timer=setInterval(()=>{

launchFirework();

count++;

if(count===10){

clearInterval(timer);

}

},350);

}