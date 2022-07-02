window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    // const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.getElementById('reset');
    // const announcer = document.querySelector('.announcer');

    // let board = ['', '', '', '', '', '', '', '', ''];
    // let currentPlayer = 'X';
    // let isGameActive = true;


    // const winningConditions = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6],
    // ];

    // function handleResultValidation() {
    //     let roundWon = false;
    //     for (let i = 0; i <= 7; i++) {
    //         const wc = winningConditions[i];
    //         const a = board[wc[0]];
    //         const b = board[wc[1]];
    //         const c = board[wc[2]];
    //         if (a === '' || b === '' || c === '') {
    //             continue;
    //         }
    //         if (a === b && b === c) {
    //             roundWon = true;
    //             break;
    //         }
    //     }

    //     if (roundWon) {
    //         //announce(currentPlayer === 'X' ? 'X' : 'O');

    //         if (currentPlayer === 'X'){
    //             announce('X')
    //         }
    //         else{
    //             announce('O')
    //         }

    //         isGameActive = false;
    //         return;
    //     }

    //     if (!board.includes('')){
    //         announce('D');
    //     }
    // }

    // const announce = (type) => {
    //     switch(type){
    //         case 'O':
    //             announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
    //             break;
    //         case 'X':
    //             announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
    //             break;
    //         case 'D':
    //             announcer.innerText = 'Draw';
    //     }
    //     announcer.classList.remove('hide');
    // };

    // const isClickable = (tile) => {
    //     if (tile.innerText === 'X' || tile.innerText === 'O'){
    //         return false;
    //     }
    //     return true;

        //return (!(tile.innerText === 'X' || tile.innerText === 'O'));
    // };

    // const updateBoard =  (index) => {
    //     board[index] = currentPlayer;
    // }

    // const changePlayer = () => {
    //     // playerDisplay.classList.remove(`player${currentPlayer}`);
        // currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        // playerDisplay.innerText = currentPlayer;
        // playerDisplay.classList.add(`player${currentPlayer}`);

        // playerDisplay.classList.remove('player'+currentPlayer);
        // currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        // playerDisplay.innerText = currentPlayer;
        // playerDisplay.classList.add('player'+currentPlayer);

    //     if (currentPlayer === 'X'){
    //         playerDisplay.classList.remove('playerX');
    //         currentPlayer = 'O';
    //         playerDisplay.innerText = 'O';
    //         playerDisplay.classList.add('playerO');
    //     }
    //     else{
    //         playerDisplay.classList.remove('playerO');
    //         currentPlayer = 'X';
    //         playerDisplay.innerText = 'X';
    //         playerDisplay.classList.add('playerX');
    //     }
    // }

    const fill = (tile, index) => {
        resetBoard();
        let row_index = [];
        let col_index = [];
        let legalTiles = [];
        /* 1D
        let nR = [i-2, i-1, i-2, i-1,i+1, i+2, i+1, i+2 ];
        let nC = [ i-1, i-2, i+1, i+2 ,  i-1, i-2, i+1, i+2]; */
        
        //2D
        let r = Math.floor(index/8);
        let c = index % 8;

        let KS= [
            [r - 2, c - 1],
            [r - 1, c - 2],
            [r - 2, c + 1],
            [r - 1, c + 2],
            
            [r + 2, c - 1],
            [r + 1, c - 2],
            [r + 2, c + 1],
            [r + 1, c + 2],
          ];

        for(let i = 0 ; i<8 ; i++){
            q1 = r*8 + i;
            q2 = i*8 + c;

        //     legalTiles.push(q1);
        //     legalTiles.push(q2);
        //    d = r-i;
        //    if ((c+d) >=0 &&  (c+d) <8) {
        //     legalTiles.push(i*8 + c + d);
        //    }

        //    if ((c-d) >=0 &&  (c-d) <8) {
        //     legalTiles.push(i*8 + c - d);
        //    }

           for (let i=0; i<8; i++){
            if(KS[i][0] >=0 && KS[i][0] < 8 && KS[i][1] >=0 && KS[i][1] < 8){
                legalTiles.push(KS[i][0] * 8 + KS[i][1] );
            }
           }           
        }
         console.log(legalTiles);
         
         legalTiles.forEach((p) => {
            tiles[p].classList.remove('black');
            tiles[p].classList.remove('white');
            
            tiles[p].classList.add('green');
        });
        
         tile.classList.remove('black');
         tile.classList.remove('white');
         tile.classList.remove('green');
         tile.classList.add('blue');       
    }
    
    const resetBoard = () => {
        // let x = 0;
        tiles.forEach(tile =>{
            tile.innerText = '';
            
            tile.classList.remove('green');
            tile.classList.remove('blue');
        });

        tiles.forEach((tile, index) =>{
            let r = Math.floor(index/8);
            let c = index % 8;

            if((r+c) % 2 == 0) {
                tile.classList.add('white');
            }
            else{
                tile.classList.add('black');


            }
            
        });

    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => fill(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);   
});