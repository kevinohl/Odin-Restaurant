import generateHome from "./home";
import generateMenu from "./menu";
import "./style.css";




const mainContainer = document.querySelector("#content");
mainContainer.innerHTML = "";
mainContainer.appendChild(generateHome());

const homeButton = document.querySelector("li:nth-of-type(1)");
homeButton.addEventListener("click", () => {
    mainContainer.innerHTML = "";
    mainContainer.appendChild(generateHome());
});

const menuButton = document.querySelector("li:nth-of-type(2)");
menuButton.addEventListener("click", () => {
    mainContainer.innerHTML = "";
    mainContainer.appendChild(generateMenu());
});

console.log("OwO");
console.log(generateHome());