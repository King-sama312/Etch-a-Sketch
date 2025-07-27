const container = document.getElementById('container');


function createGrid(size) {
    container.innerHTML = ''

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `calc(100% / ${size} )`
        square.style.height = `calc(100% / ${size} )`
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
        })

        container.appendChild(square);
    }
}

createGrid(16)

const button = document.getElementById('resizeBtn')
button.addEventListener('click', () => {
    let newSize = prompt('Enter new grid size (max 100)')
    newSize = parseInt(newSize)

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100')
        return
    }

    createGrid(newSize)
})