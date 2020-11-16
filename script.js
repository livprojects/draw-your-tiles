const app = {
    init: () => {
        app.drawGrid();
    }, 

    drawGrid: () => {

        // Resets HTML when loaded //
        const grid = document.getElementById('central-grid'); grid.innerHTML = '';

        const tableContainer = document.createElement('table');

        for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
            const row = document.createElement('tr'); 

            for (let cellIndex = 0; cellIndex < 8; cellIndex++) {
                const cell = document.createElement('td');
                cell.classList.add('grid-cell');

                // Static size for now in CSS, will be dynamic later //


                row.appendChild(cell);

            }

            tableContainer.appendChild(row);
        }
        grid.appendChild(tableContainer);




    }
}

// Functions are called only when DOM is loaded 
document.addEventListener('DOMContentLoaded', app.init );
