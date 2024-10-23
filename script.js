const container = document.querySelector('.container');
container.style.height = "800px";
container.style.width = "800px";

const sizeButton = document.querySelector('.sizing');
let size = 16;
drawPad(size);


sizeButton.addEventListener("click", () => {
    size = prompt("Enter pad side dimensions (>= 2 or <= 100): ");
    size = parseInt(size, 10);

    if (!Number.isInteger(size) || size < 2 || size > 100){
        console.log('default size');
        size = 16;
    };
    drawPad(size);
});

function drawPad(size){
    container.innerHTML = '';
    const squareSize = 800/size;
    for(i = 0; i < size * size; i++){
        const childDiv = document.createElement('div');
        childDiv.classList.add('child');
        childDiv.style.height = `${squareSize}px`;
        childDiv.style.width = `${squareSize}px`;
        childDiv.style.outline = "2px solid black";
        childDiv.addEventListener("mouseover", () => {
            childDiv.style.backgroundColor = "black";
        });
        container.appendChild(childDiv);
    }
};