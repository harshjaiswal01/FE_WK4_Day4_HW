function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'blue' ? 'green' : 'blue';
}

document.addEventListener('DOMContentLoaded', function() {
    const hoverButton = document.getElementById('hoverButton');
    const text = document.getElementById('text');
    const styleButton = document.getElementById('styleButton');
    const placeholderImage = document.getElementById('placeholderImage');
    const colorCycleButton = document.getElementById('colorCycleButton');

    hoverButton.addEventListener('mouseover', function() {
        hoverButton.style.backgroundColor = 'yellow';
        hoverButton.style.color = 'red';
    });

    hoverButton.addEventListener('mouseout', function() {
        hoverButton.style.backgroundColor = '';
        hoverButton.style.color = '';
    });

    styleButton.addEventListener('click', function() {
        text.style.fontSize = '24px';
        text.style.color = 'purple';
        text.style.fontWeight = 'bold';
    });

    placeholderImage.addEventListener('click', function() {
        placeholderImage.style.border = '5px solid black';
        placeholderImage.style.transform = 'rotate(15deg)';
    });

    const colors = ['red', 'blue', 'green'];
    let colorIndex = 0;

    colorCycleButton.addEventListener('click', function() {
        colorCycleButton.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
});
