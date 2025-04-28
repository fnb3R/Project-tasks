const box = document.getElementById('box');
const info = document.getElementById('info');
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let boxTop = box.offsetTop;
let boxLeft = box.offsetLeft;

upButton.addEventListener('click', () => moveBox(0, -10));
downButton.addEventListener('click', () => moveBox(0, 10));
leftButton.addEventListener('click', () => moveBox(-10, 0));
rightButton.addEventListener('click', () => moveBox(10, 0));

function moveBox(dx, dy) {
    boxTop += dy;
    boxLeft += dx;
    box.style.top = boxTop + 'px';
    box.style.left = boxLeft + 'px';
    checkCollision();
}

function checkCollision() {
    const boxRect = box.getBoundingClientRect();
    const topLine = document.getElementById('top-line').getBoundingClientRect();
    const leftLine = document.getElementById('left-line').getBoundingClientRect();
    const rightLine = document.getElementById('right-line').getBoundingClientRect();

    if (boxRect.top <= topLine.bottom && boxRect.bottom >= topLine.top &&
        boxRect.left < topLine.right && boxRect.right > topLine.left) {
        fireCustomEvent('Top Line');
    }

    if (boxRect.left <= leftLine.right && boxRect.right >= leftLine.left &&
        boxRect.top < leftLine.bottom && boxRect.bottom > leftLine.top) {
        fireCustomEvent('Left Line');
    }

    if (boxRect.right >= rightLine.left && boxRect.left <= rightLine.right &&
        boxRect.top < rightLine.bottom && boxRect.bottom > rightLine.top) {
        fireCustomEvent('Right Line');
    }
}

function fireCustomEvent(line) {
    const event = new CustomEvent('lineReached', {
        detail: { line }
    });
    document.dispatchEvent(event);
}

document.addEventListener('lineReached', function(e) {
    info.textContent = `Reached ${e.detail.line}!`;
});
