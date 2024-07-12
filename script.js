// Create a main container div and set its ID
const containerDiv = document.createElement('div');
containerDiv.setAttribute('id', 'container');
document.body.append(containerDiv);

// Iterate 256 times to create a 16x16 grid
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
const resetBtn = document.getElementById("reset")

    resetBtn.addEventListener("click", () => {
        console.log("click");
    })