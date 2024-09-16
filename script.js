const container = document.createElement('div');
container.setAttribute('id', 'container');

createGrid();



function createGrid() {
    for (i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid');
    }
}