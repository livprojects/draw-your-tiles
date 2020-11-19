const app = {
    init: () => {
        app.drawGrid();

        const formsubmit = document.getElementById('submitButton');
        formsubmit.addEventListener('submit', app.changeGrid);
    }, 

    drawGrid: (gridSize = 6, cellSize) => {

        // Resets HTML when loaded //
        const grid = document.getElementById('central-grid'); grid.innerHTML = '';

        const tableContainer = document.createElement('table');

        for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
            const row = document.createElement('tr'); 

            for (let cellIndex = 0; cellIndex < gridSize; cellIndex++) {
                const cell = document.createElement('td');
                cell.classList.add('grid-cell');

                // Static size for now in CSS, will be dynamic later //

                // thanks to cellSize

                row.appendChild(cell);

            }

            tableContainer.appendChild(row);
        }
        grid.appendChild(tableContainer);




    }, 
    changeGrid: () => {
        console.log('Coucou');
    }
}

// Functions are called only when DOM is loaded 
document.addEventListener('DOMContentLoaded', app.init );
