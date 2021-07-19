
let checkIt = true;
//если chekIt оставить внутри 
//функции, то будет if всегда 
//выполняться

let btn = document.getElementById("btn2");
btn.addEventListener("click", readMore);

function readMore() {
let dots = document.getElementById("dots2");
let more = document.getElementById("more2");

if (checkIt) {
more.style.display = "inline";
dots.style.display = "none";
btn.innerHTML = "";
checkIt = false;
} else {
dots.style.display = "inline";
more.style.display = "none";
btn.innerHTML = "";
checkIt = true;
}

}