const container = document.querySelector('#Container');

// Need to make the number of columns dynamic by selecting the container and adding grid template columns styling based on the number of is?

// No we need to loop it 16 times

for(i=0; i < 256; i++){

// We need to create a div and create a class for it
const grid = document.createElement('div');

// Need to apply styling to the created div element of grid-item
// Looks liek we can either use setAttribute or classList.add
grid.classList.add('gridItem')

// Then add it to the container div
container.appendChild(grid);

}

