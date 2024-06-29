
    const container = document.querySelector('.container');
    const resetBtn = document.querySelector('.reset-btn');
    const changeGridBtn = document.querySelector('.btn');
    let gridSize = 16; // Default grid size

    // Function to create the grid
    function createGrid(size) {
        // Remove existing grid
        container.innerHTML = '';

        // Calculate square size
        const squareSize = 640 / size;

        // Create new grid
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);

            square.addEventListener('mouseenter', function() {
                square.classList.add('active');
            });
        }
    }

    // Function to change the grid
    function changeGrid() {
        createGrid(gridSize);
    }

    // Event listener for change grid size button
    changeGridBtn.addEventListener('click', function() {
        let newSize = prompt("Enter number of squares per side (max 100):");

        // Validate newSize input
        newSize = parseInt(newSize);
        if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
            alert("Please enter a valid number between 1 and 100.");
            return;
        }

        gridSize = newSize; // Update gridSize
        changeGrid(); // Change the grid with new size
    });

    // Event listener for reset button
    resetBtn.addEventListener('click', function() {
        const squares = document.querySelectorAll('.square');
        squares.forEach(sq => sq.classList.remove('active'));
    });

    // Initial grid creation with default size
    changeGrid();

