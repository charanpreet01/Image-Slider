let body=document.querySelector("body");
let images=document.querySelectorAll(".image");

images.forEach((image)=>{
    image.addEventListener("mouseover",(e)=>{
        console.log(e);
        if (e.target.id=="cricket") {
            body.style.backgroundImage="url(images/cricket.jpg)";
            body.style.objectFit="fill";
        }
        if (e.target.id=="football") {
            body.style.backgroundImage="url(images/football.jpg)";
            body.style.objectFit="fill";
        }
        if (e.target.id=="volleyball") {
            body.style.backgroundImage="url(images/volleyball.jpg)";
            body.style.objectFit="fill";
        }
        if (e.target.id=="chess") {
            body.style.backgroundImage="url(images/chess.jpg)";
            body.style.objectFit="fill";
        }
    })
})