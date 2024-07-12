// Create a main container div and set its ID
const containerDiv = document.createElement('div');
containerDiv.setAttribute('id', 'container');
document.body.append(containerDiv);

// Function to create the initial grid
function createGrid() {
    for (let count = 1; count <= 256; count++) {
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

// Call the function to create the initial grid
createGrid();

// Select the reset button
const resetBtn = document.getElementById("reset");

// Add event listener to reset button
resetBtn.addEventListener("click", function() {
    deleteGrid(); // Call deleteGrid function when button is clicked
});

// Function to delete the grid
function deleteGrid() {
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    const userInput = prompt("Please enter numbe of columns between 1-100")
}
