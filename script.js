const container = document.getElementById('container');
createGrid();

const button = document.getElementById('create');
button.addEventListener('click', function(){
    getNumber();
});



function createGrid() {
    for (i = 1; i < 17; i++) {
        const row = document.createElement('div');
        row.id = i;
        grid.appendChild(row).className = 'row';
        for (j = 1; j < 17; j++) {
            const div = document.createElement('div');
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            });
            row.appendChild(div).className = 'square';
        }
    }
}

function getNumber() {
    let n = prompt("Select the mumber of squares for your grid");

    document.getElementById('grid').outerHTML = '';

    const grid = document.createElement('div');
    container.appendChild(grid).id = 'grid' ;

    for (j = 1; j <= n; j++) {
        const row = document.createElement('div');
        row.id = j;
        grid.appendChild(row).className = 'row';
        for (k = 1; k <= n; k++) {
            const div = document.createElement('div');
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            });
            row.appendChild(div).className = 'square';
        }
    }
}