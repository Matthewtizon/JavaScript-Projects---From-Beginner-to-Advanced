const body = document.getElementsByTagName("body")[0]



function setColor(name){
    body.style.backgroundColor = name;
}


function random() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    let color = `rgb(${r}, ${g}, ${b})`

    body.style.backgroundColor = color;
}