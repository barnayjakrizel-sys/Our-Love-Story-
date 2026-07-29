const proposalBtn = document.getElementById("proposalBtn");
const proposalModal = document.getElementById("proposalModal");
const yesBtn = document.getElementById("yesBtn");
const success = document.getElementById("success");

proposalBtn.addEventListener("click", () => {
    proposalModal.style.display = "flex";
});

yesBtn.addEventListener("click", () => {
    proposalModal.style.display = "none";
    success.style.display = "flex";

    createHearts();

    launchConfetti();
});

function createHearts(){

    for(let i = 0; i < 40; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.zIndex = "9999";
        heart.style.transition = "transform 4s linear, opacity 4s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform = `translateY(-120vh) rotate(${Math.random()*360}deg)`;
            heart.style.opacity = "0";

        },100);

        setTimeout(() => {

            heart.remove();

        },4200);

    }

}

function launchConfetti(){

    const colors = [
        "#ff4d8d",
        "#ffd166",
        "#ffffff",
        "#ff9ecb",
        "#ff6fa5"
    ];

    for(let i=0;i<120;i++){

        const piece = document.createElement("div");

        piece.style.position="fixed";
        piece.style.left=Math.random()*100+"vw";
        piece.style.top="-20px";
        piece.style.width="10px";
        piece.style.height="10px";
        piece.style.background=colors[Math.floor(Math.random()*colors.length)];
        piece.style.opacity="1";
        piece.style.zIndex="9998";
        piece.style.borderRadius=Math.random()>0.5?"50%":"2px";

        document.body.appendChild(piece);

        const duration=3000+Math.random()*2000;
        const x=(Math.random()-0.5)*400;
        const y=window.innerHeight+100;

        piece.animate([
            {
                transform:"translate(0,0) rotate(0deg)",
                opacity:1
            },
            {
                transform:`translate(${x}px,${y}px) rotate(${720*Math.random()}deg)`,
                opacity:0
            }
        ],{
            duration:duration,
            easing:"ease-out"
        });

        setTimeout(()=>{
            piece.remove();
        },duration);

    }

}
