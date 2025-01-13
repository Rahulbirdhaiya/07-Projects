
// const stopper = document.querySelector('#stop');


const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalID;

const startChangingColor = function () {
    if(!intervalID){
        intervalID = setInterval(Changebgc, 1000);
    }
    
    function Changebgc() {
        document.body.style.backgroundColor = randomColor();
    };
}

const stopChangingcolor = function () {
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingcolor);

