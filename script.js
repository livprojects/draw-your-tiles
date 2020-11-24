const app = {
    init: () => {
        app.drawGrid();
        app.createForm();

    },

    drawGrid: (gridSize = 6, cellSize = 20) => {
console.log(gridSize);        // Resets HTML when loaded //
        const grid = document.getElementById('central-grid');
        grid.innerHTML = '';

        const tableContainer = document.createElement('table');

        for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
            const row = document.createElement('tr');

            for (let cellIndex = 0; cellIndex < gridSize; cellIndex++) {
                const cell = document.createElement('td');
                cell.classList.add('grid-cell');

                cell.style.width = cellSize + 'px';
                cell.style.height = cellSize + 'px';

                // Static size for now in CSS, will be dynamic later //

                // thanks to cellSize

                row.appendChild(cell);

            }

            tableContainer.appendChild(row);
        }
        grid.appendChild(tableContainer);


    },
    createForm: () => {
        const form = document.getElementById('picker-form-id');

        app.gridSize = document.createElement('input');
        app.gridSize.type = 'number';
        app.gridSize.id = 'gridsize';
        app.gridSize.classList.add = 'picker-gridsize';
        app.gridSize.min = 1;
        app.gridSize.max = 10;
        app.gridSize.name = "gridSize";
        app.gridSize.placeholder = "Nombre de cellules (par rangée)";
        form.appendChild(app.gridSize);

        app.cellSize = document.createElement('input');
        app.cellSize.type = 'number';
        app.cellSize.id = 'cellsize';
        app.cellSize.classList.add = 'picker-cellsize';
        app.cellSize.min = 1;
        app.cellSize.max = 15;
        app.cellSize.name = "cellSize";
        app.cellSize.placeholder = "Taille d'une cellule (en pixels)";
        form.appendChild(app.cellSize);

        app.submitButton = document.createElement('button');
        app.submitButton.type = 'submit';
        app.submitButton.id = 'submitButton';
        app.submitButton.textContent = "Valider";
        form.appendChild(app.submitButton);

        form.addEventListener('submit', app.resizeGrid);

    },
    resizeGrid: (event) => {
        event.preventDefault();
        console.log('coucou');

        app.drawGrid(app.gridSize.value, app.cellSize.value);
    }
}

// Functions are called only when DOM is loaded 
document.addEventListener('DOMContentLoaded', app.init);