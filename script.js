// script.js
// Function: generateRandomColor
function generateRandomColor() {
    // Generate vibrant, varied colors with good contrast
    const r = Math.floor(Math.random() * 200);
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);
    return `rgb(${r}, ${g}, ${b})`;
}

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
            square.style.backgroundColor = generateRandomColor()
        })

        container.appendChild(square);
    }
}

// script.js
newSize = prompt('Enter new grid size (max 100)')

// script.js
// Function: handleResize
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
square = document.createElement('div')

// script.js
container = document.getElementById('container')

// script.js
i = 0

// script.js
button = document.getElementById('resizeBtn')
button.addEventListener('click', handleResize)