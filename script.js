// Create a main container div and set its ID
const containerDiv = document.createElement('div');
containerDiv.setAttribute('id', 'container');
document.body.append(containerDiv);

// Function to delete the grid and get user input
function deleteGrid() {
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    const userInput = prompt("Please enter number of columns between 1-100");
    if (userInput) { // Ensure userInput is not null or empty
        createNewGrid(parseInt(userInput)); // Pass userInput to createNewGrid as an integer
    }
}

// Function to create a new grid based on user input
function createNewGrid(numColumns) {
    // Set CSS variable --num-columns for dynamic grid layout
    containerDiv.style.setProperty('--num-columns', numColumns);

    const totalCells = numColumns * numColumns; // Calculate total cells based on numColumns

    for (let count = 1; count <= totalCells; count++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        
        // Add optional content for visibility
        const content = document.createElement('div');
        content.classList.add('grid-content');
        content.textContent = count; // Optional: number each grid item
        
        newDiv.appendChild(content);
        containerDiv.append(newDiv);

        // Add event listener for mouseover event
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = 'blue'; // Change background color on mouseover
        });
    }
}

// Example: Initial creation of 16x16 grid
createNewGrid(16);

// Example: Call deleteGrid function when a button is clicked
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", deleteGrid);
