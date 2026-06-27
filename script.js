// script.js
// Function: createGrid
function createGrid(size) {
    container.innerHTML = ''

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `calc(100% / ${size} )`
        square.style.height = `calc(100% / ${size} )`
        square.dataset.index = i; // Store the index for reference
        
        square.addEventListener('mouseover', () => {
            // Generate a random color that's different from adjacent squares
            const randomColor = generateDistinctColor(square, size);
            square.style.backgroundColor = randomColor;
        })

        container.appendChild(square);
    }
}

// Function: generateRandomColor
function generateRandomColor() {
    // Generate a random hex color
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

// Function: generateDistinctColor
function generateDistinctColor(square, gridSize) {
    const index = parseInt(square.dataset.index);
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    
    // Get adjacent squares
    const adjacentColors = [];
    
    // Top square
    if (row > 0) {
        const topIndex = (row - 1) * gridSize + col;
        const topSquare = container.children[topIndex];
        if (topSquare && topSquare.style.backgroundColor) {
            adjacentColors.push(topSquare.style.backgroundColor);
        }
    }
    
    // Bottom square
    if (row < gridSize - 1) {
        const bottomIndex = (row + 1) * gridSize + col;
        const bottomSquare = container.children[bottomIndex];
        if (bottomSquare && bottomSquare.style.backgroundColor) {
            adjacentColors.push(bottomSquare.style.backgroundColor);
        }
    }
    
    // Left square
    if (col > 0) {
        const leftIndex = row * gridSize + (col - 1);
        const leftSquare = container.children[leftIndex];
        if (leftSquare && leftSquare.style.backgroundColor) {
            adjacentColors.push(leftSquare.style.backgroundColor);
        }
    }
    
    // Right square
    if (col < gridSize - 1) {
        const rightIndex = row * gridSize + (col + 1);
        const rightSquare = container.children[rightIndex];
        if (rightSquare && rightSquare.style.backgroundColor) {
            adjacentColors.push(rightSquare.style.backgroundColor);
        }
    }
    
    // If no adjacent squares have colors, just return a random color
    if (adjacentColors.length === 0) {
        return generateRandomColor();
    }
    
    // Try to generate a color that's different from adjacent ones
    let newColor;
    let attempts = 0;
    const maxAttempts = 10; // Limit attempts to avoid infinite loop
    
    do {
        newColor = generateRandomColor();
        attempts++;
    } while (adjacentColors.some(color => colorsAreSimilar(newColor, color)) && attempts < maxAttempts);
    
    return newColor;
}

// Function: colorsAreSimilar
function colorsAreSimilar(color1, color2, threshold = 50) {
    // Convert hex to RGB
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);
    
    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);
    
    // Calculate Euclidean distance between colors
    const distance = Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));
    
    return distance < threshold;
}

// Function: anon_11
() => {
            square.style.backgroundColor = 'black'
        }

// script.js
square = document.createElement('div')

// script.js
container = document.getElementById('container')

// script.js
newSize = prompt('Enter new grid size (max 100)')

// script.js
i = 0

// script.js
// Function: anon_22
() => {
    let newSize = prompt('Enter new grid size (max 100)')
    newSize = parseInt(newSize)

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100')
        return
    }

    createGrid(newSize)
}

// script.js
button = document.getElementById('resizeBtn')