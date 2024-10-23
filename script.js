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
        container.appendChild(row).className = 'row';
        for (j = 1; j < 17; j++) {
            const div = document.createElement('div');
            row.appendChild(div).className = 'grid';
        }
    }
}

function getNumber() {
    let number = prompt("Select the mumber of squares for your grid");
}