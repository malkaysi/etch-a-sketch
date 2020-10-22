const container = document.querySelector('#Container');



// Need to make the number of columns dynamic by selecting the container and adding grid template columns styling based on the number of is?
// We have the container, and the input should be based on the square root of numGrids

container.setAttribute('id', 'gridContainer');

function createGrid(numColumns) {

    
    

    // let numColumns = Math.sqrt(numGrids);
    let numGrids = numColumns * numColumns;

    // Set grid-template-columns: repeat(16, auto); to be in javascript based on numGrids instead of in the css
    container.style.gridTemplateColumns = "repeat(" + numColumns + ", auto)"

    for (i = 0; i < numGrids; i++) {


        // We need to create a div and create a class for it
        const grid = document.createElement('div');

        // Need to apply styling to the created div element of grid-item
        // Looks liek we can either use setAttribute or classList.add
        grid.classList.add('gridItem')

        grid.setAttribute('id', 'theGrid');


        // Then add it to the container div
        container.appendChild(grid);

        // We now have a grid of squares that are 16x16

        // Now we use hover to change any of the div squares we hover our to a different color
        // Let's change one div to red
        // Can we change the background-color to red if we hover over?
        // use add.eventlistener("mouseover")

        grid.addEventListener("mouseover", function (event) {

            

            event.target.style.backgroundColor = 'red';

        });

    }

}

function resetGrid(){

    // Get the number of divs to remove
    const numDivs = document.querySelectorAll(".gridItem");
    
    numDivs.forEach(function(node) {
        node.parentNode.removeChild(node);
    })


    do{
        numColumns = prompt("How many rows/columns do you want for your etch-a-sketch? (Max: 25)", 10)
    } while (numColumns > 25);

    createGrid(numColumns);

}
