// Each module will export a function that creates a div element, 
// adds the appropriate content and styles to that element and then 
// appends it to the DOM.

function generateHome() {
  // main container
  const homeContent = document.createElement("div")
  homeContent.classList.add("main-container")

  // sub containers
  const descriptionDiv = document.createElement("div")
  descriptionDiv.classList.add("sub-container")
  const descriptionParagraph = document.createElement("p")
  descriptionParagraph.innerHTML = "<h2>Description</h2> everything"
  descriptionDiv.appendChild(descriptionParagraph)

  const openingTimesDiv = document.createElement("div")
  openingTimesDiv.classList.add("sub-container")
  const openingTimesParagraph = document.createElement("p")
  openingTimesParagraph.innerHTML = "<h2>Opening Times</h2> never"
  openingTimesDiv.appendChild(openingTimesParagraph)

  homeContent.appendChild(descriptionDiv)
  homeContent.appendChild(openingTimesDiv)
  return homeContent;
}

export default generateHome;
