const ins = document.querySelectorAll(".grid");
let currentPlayer = 'X'; // 'X' starts the game
var x=0;
const djsdjssd = [
    //orizontal lines
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    //vertiacal lines
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];

ins.forEach(grid => {
    grid.addEventListener('click', clicked);
});

function clicked(event) {
    const selected = event.currentTarget;

    // Check if the grid is already occupied
    

    const im = document.createElement('img');
    if (currentPlayer === 'X') {
        im.src = 'Screenshot 2024-06-24 035821.png'; 
        im.style.width = '150px';
        im.style.height = '150px';
        im.style.mixBlendMode="color-burn"
        currentPlayer = 'O';
        x+=1;

    } 
    
    
    
    else {
        im.src = 'aaa.png';
        im.style.width = '150px';
        im.style.height = '150px';
         im.style.mixBlendMode="color-burn"
        currentPlayer = 'X';
        x+=1;
    }
    if (selected.querySelector('img')) { //inorder to prevent overlapping and prevent user to not click on same grid
        return; 
    }
    selected.appendChild(im);

    // Check for a winner
    Rules();
    console.log(x)
}

function Rules() {
    for (const combination of djsdjssd) {
        const [a, b, c] = combination;
        const cellA = document.querySelector(`[data-row="${a[0]}"][data-col="${a[1]}"] img`);
        const cellB = document.querySelector(`[data-row="${b[0]}"][data-col="${b[1]}"] img`);//this three lines helps in slecting which player has acheived the straight line pattern
        const cellC = document.querySelector(`[data-row="${c[0]}"][data-col="${c[1]}"] img`);

        if (cellA && cellB && cellC) {
            if (cellA.src === cellB.src && cellB.src === cellC.src) {
                alert(`${currentPlayer === 'X' ? 'O' : 'X'} wins!`);
                //to stp the game
                ins.forEach(grid => grid.removeEventListener('click', clicked));
                break;
            }
            
            if(x==9){
                alert("Its a draw!!!!")
                ins.forEach(grid => grid.removeEventListener('click', clicked));
                break;
            }
        }
    }
}
