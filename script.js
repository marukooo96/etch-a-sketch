// const container = document.getElementById('container');
// const div = document.createElement('div');
// container.appendChild(div).className = 'grid';

const container = document.getElementById('container');
createGrid();



function createGrid() {
    for (i = 1; i < 17; i++) {
        const row = document.createElement('div');
        row.id = i;
        container.appendChild(row).className = 'row';
        for (j = 1; j < 17; j++) {
            const div = document.createElement('div');
            row.appendChild(div).className = 'grid';
        }
    }
}