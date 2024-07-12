

// Create a single div

containerDiv = document.createElement("div");
document.body.append(containerDiv)

// set container as ID for main container
containerDiv.setAttribute("id", "container");

//create one new div in container


//newDiv = document.createElement("div");
//containerDiv.append(newDiv);

// iterate 256 times + generate a div for each iteration
for(let count = 1; count <= 256 ; count ++){
    //console.log(count) - Check iteration number - interates to 256
    newDiv = document.createElement("div");
    newDiv.classList.add("grid");
    
    containerDiv.append(newDiv);

    const content = document.createElement('div');
    content.classList.add('grid-content');
    content.textContent = count; // Optional: number each grid item
    
    newDiv.appendChild(content);
    containerDiv.append(newDiv);
}



