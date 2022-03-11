// variables to select elements
const grid = document.querySelector(".gridSketch");
const userInput = document.getElementById("numberofGrid");
const resetButton = document.querySelector(".reset");

/* function to create a grid  with this steps : 
    - step 1 : create a div element
    - step 2 : add a class to this element
    - step 3 : append this div element to the grid element
*/
createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

/* 
function to update the grid : 
    - step 1 : reset the grid to empty
    - step 2 : reset the repeat value of grid-template-columns property and add user input
    - step 3 : reset the repeat value of grid-template-rows property and add user input
    - step 4 : create the square elements and append to grid element
    - step 5 : add event listener to square element
    - step 6 : add event listener to user input element
    - step 7 : add event listener to reset button
*/

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }

};

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", "color");
});

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});

createGrid();