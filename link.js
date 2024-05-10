document.addEventListener('DOMContentLoaded', function () {
    const shapes = document.querySelector('.profile');
    const numShapes = 6;

    for (let i = 0; i < numShapes; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.backgroundColor = getRandomColor();
        shape.style.width = getRandomSize() + 'px';
        shape.style.height = getRandomSize() + 'px';
        shape.style.top = getRandomPosition() + '%';
        shape.style.left = getRandomPosition() + '%';
        shapes.appendChild(shape);
    }
});

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function getRandomSize() {
    return Math.floor(Math.random() * 100) + 50; // Taille aléatoire entre 50 et 150 pixels
}

function getRandomPosition() {
    return Math.floor(Math.random() * 101); // Position aléatoire entre 0% et 100%
}