const container = document.getElementById('container');
createGrid();

const buttonCreate = document.getElementById('create');
buttonCreate.addEventListener('click', function(){
    getNumber();
});

const buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', function(){
    clearGrid();
});



function createGrid() {
    const size = 500 / 16;

    for (i = 1; i < 17; i++) {
        const row = document.createElement('div');
        row.id = i;
        grid.appendChild(row).className = 'row';
        for (j = 1; j < 17; j++) {
            const cell = document.createElement('div');
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'black';
            });

            cell.style.width = size + 'px';
            cell.style.height = size + 'px';
            row.appendChild(cell).className = 'cell';
        }
    }
}

function getNumber() {
    let n = prompt("Select the mumber of cells for your grid");

    if (n < 1 || n > 100) {
        return alert("Please, insert a number between 1 and 100");
    }

    document.getElementById('grid').outerHTML = '';

    const grid = document.createElement('div');
    container.appendChild(grid).id = 'grid' ;

    const size = 500 / n;

    for (j = 1; j <= n; j++) {
        const row = document.createElement('div');
        row.id = j;
        grid.appendChild(row).className = 'row';
        for (k = 1; k <= n; k++) {
            const cell = document.createElement('div');
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'black';
            });

            cell.style.width = size + 'px';
            cell.style.height = size + 'px';
            row.appendChild(cell).className = 'cell';
        }
    }
}

function clearGrid() {

}