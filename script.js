// script.js

// Function: createGrid
function createGrid(size) {
    container.innerHTML = ''

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `calc(100% / ${size} )`
        square.style.height = `calc(100% / ${size} )`
        
        square.addEventListener('mouseover', () => {
            let newColor = getRandomColor();
            
            // Check adjacent squares and ensure color variety
            const allSquares = document.querySelectorAll('.grid-square');
            const squareIndex = Array.from(allSquares).indexOf(square);
            const gridSize = Math.sqrt(allSquares.length);
            
            // Check top, bottom, left, and right squares if they exist
            const adjacentIndices = [
                squareIndex - gridSize, // top
                squareIndex + gridSize, // bottom
                squareIndex - 1, // left
                squareIndex + 1  // right
            ];
            
            for (const adjIndex of adjacentIndices) {
                if (adjIndex >= 0 && adjIndex < allSquares.length) {
                    const adjSquare = allSquares[adjIndex];
                    const adjColor = adjSquare.style.backgroundColor;
                    
                    // Skip if adjacent square has no color yet
                    if (!adjColor) continue;
                    
                    // Regenerate color if too similar to adjacent square
                    if (isColorSimilar(newColor, adjColor)) {
                        newColor = getRandomColor();
                    }
                }
            }
            
            square.style.backgroundColor = newColor;
        })

        container.appendChild(square);
    }
}

// Function: getRandomColor
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function: isColorSimilar
function isColorSimilar(color1, color2, threshold = 50) {
    // Convert hex to RGB
    const r1 = parseInt(color1.substr(1, 2), 16);
    const g1 = parseInt(color1.substr(3, 2), 16);
    const b1 = parseInt(color1.substr(5, 2), 16);
    
    const r2 = parseInt(color2.substr(1, 2), 16);
    const g2 = parseInt(color2.substr(3, 2), 16);
    const b2 = parseInt(color2.substr(5, 2), 16);
    
    // Calculate Euclidean distance between colors
    const distance = Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2));
    
    return distance < threshold;
}

// Function: handleResize
function handleResize() {
    let newSize = prompt('Enter new grid size (max 100)')
    newSize = parseInt(newSize)

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100')
        return
    }

    createGrid(newSize)
}

// Initialize variables
const container = document.getElementById('container')
const button = document.getElementById('resizeBtn')

// Set up event listeners
button.addEventListener('click', handleResize)

// Create initial grid
createGrid(16)