

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
    containerDiv.append(newDiv);
}