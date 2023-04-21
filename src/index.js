import generateHome from "./home";
import "./style.css";

const mainContainer = document.querySelector("#content");
mainContainer.innerHTML = "";
mainContainer.appendChild(generateHome());

console.log("OwO");
console.log(generateHome());