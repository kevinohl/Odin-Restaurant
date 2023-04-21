// Each module will export a function that creates a div element, 
// adds the appropriate content and styles to that element and then 
// appends it to the DOM.

function generateHome() {
  const homeContent = document.createElement("div");
  homeContent.classList.add("main-container")
  const testParagraph = document.createElement("p");
  testParagraph.innerHTML = "OwO"
  homeContent.appendChild(testParagraph);
  return homeContent;
}

export default generateHome;
