
const GRID_SIZE = 5;

const DIRECTIONS = ["up", "right", "down", "left"];

// Robot's initial position and direction
let robot = {
    x: 0,
    y: 0,
    direction: 0 // Index in the DIRECTIONS array (0 = NORTH)
};

// Function to create the grid
function createGrid() {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';
    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (row === robot.y && col === robot.x) {
                cell.classList.add('robot');
                // Create an img element for the SVG
                const img = document.createElement('img');
                img.src = `${DIRECTIONS[robot.direction]}.svg`;
                img.alt = DIRECTIONS[robot.direction];
                img.classList.add('direction-arrow');
                cell.appendChild(img);
            }
            gridElement.appendChild(cell);
        }
    }
}

// Function to rotate the robot counter-clockwise
function rotateLeft() {
    robot.direction = (robot.direction + 3) % 4;
    createGrid();
}

// Function to rotate the robot clockwise
function rotateRight() {
    robot.direction = (robot.direction + 1) % 4;
    createGrid();
}

// Function to move the robot forward in the direction it is facing
function moveForward() {
    switch (DIRECTIONS[robot.direction]) {
        case 'up':
            if (robot.y > 0) robot.y--;
            break;
        case 'right':
            if (robot.x < GRID_SIZE - 1) robot.x++;
            break;
        case 'down':
            if (robot.y < GRID_SIZE - 1) robot.y++;
            break;
        case 'left':
            if (robot.x > 0) robot.x--;
            break;
    }
    createGrid();
}

window.onload = createGrid;
