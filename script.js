let line = document.querySelector("#line");
let angle = 0;

setInterval(() => {
    angle += 2; 
    line.style.rotate = `${angle}deg`;
}, 20);
