function generateMenu() {
    const menuContent = document.createElement("div")
    menuContent.classList.add("main-container")

    const foodDiv = document.createElement("div")
    foodDiv.classList.add("sub-container")
    const foodParagraph = document.createElement("p")
    foodParagraph.innerHTML = "<h2>Food</h2> garbo"
    foodDiv.appendChild(foodParagraph)


    menuContent.appendChild(foodDiv);
    return menuContent;
}

export default generateMenu;