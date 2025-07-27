const container = document.getElementById('container');

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    container.appendChild(square);
}

const squares = document.querySelectorAll(".grid-square")

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black'
    })

    square.addEventListener('mousedown', (event) => {
        if (event.button === 0) {
            square.style.backgroundColor = 'transparent'
        }

    })
})