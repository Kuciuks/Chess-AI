//evaluates the board for AI player and return the score;
function evaluateBoard(chess_board){
    //store piece values
    const values = {
        "P": 100,
        "N": 300,
        "B": 300,
        "R": 500,
        "Q": 900,
        "K": 20000
    }

    //store mapped out positional values
    const pawnScore= [
        0  ,0  ,0   ,0   ,0   ,0   ,0  ,0,
        10, 10, 10, 10, 0, 0, 10, 10,
        5, 5, 5, 5, 50, 0, 0, 5,
        0, 0, 0, 0, 0, 0, 0, 0,
        -5, -5, -5, -5, -5, -10, 0, -5,
        -10, -10, -10, -10, 0, 0, -10, -10,
        -15, -15, -15, -15, -15, -15, -15, -15,
        0  ,0  ,0   ,0   ,0   ,0   ,0  ,0
    ]

    const knightScore = [
        -20, -15, -10, -10, -10, -10, -15, -20,
        -15, -5, 0, 0, 0, 0, -5, -15,
        -10, 0, 5, 5, 5, 5, 0, -10,
        -10, 0, 5, 10, 10, 5, 0, -10,
        -10, 0, 5, 10, 10, 5, 0, -10,
        -10, 0, 5, 5, 5, 5, 0, -10,
        -15, -5, 0, 0, 0, 0, -5, -15,
        -20, -15, -10, -10, -10, -10, -15, -20
    ];

      const bishopScore = [
        -10, -5, -5, -5, -5, -5, -5, -10,
        -5, 0, 0, 0, 0, 0, 0, -5,
        -5, 0, 5, 5, 5, 5, 0, -5,
        -5, 5, 5, 10, 10, 5, 5, -5,
        -5, 0, 10, 10, 10, 10, 0, -5,
        -5, 10, 10, 10, 10, 10, 10, -5,
        -5, 5, 0, 0, 0, 0, 5, -5,
        -10, -5, -5, -5, -5, -5, -5, -10
    ];
      
      const rookScore = [
        0, 0, 0, 0, 0, 0, 0, 0,
        5, 10, 10, 10, 10, 10, 10, 5,
        -5, 0, 0, 0, 0, 0, 0, -5,
        -5, 0, 0, 0, 0, 0, 0, -5,
        -5, 0, 0, 0, 0, 0, 0, -5,
        -5, 0, 0, 0, 0, 0, 0, -5,
        -5, 0, 0, 0, 0, 0, 0, -5,
        0, 0, 0, 5, 5, 0, 0, 0
    ];
      
      const queenScore = [
        -20,-10,-10, -5, -5,-10,-10,-20,
        -10,  0,  0,  0,  0,  0,  0,-10,
        -10,  0,  5,  5,  5,  5,  0,-10,
         -5,  0,  5,  5,  5,  5,  0, -5,
          0,  0,  5,  5,  5,  5,  0, -5,
        -10,  5,  5,  5,  5,  5,  0,-10,
        -10,  0,  5,  0,  0,  0,  0,-10,
        -20,-10,-10, -5, -5,-10,-10,-20
    ];

    const kingScore = [
        20, 30, 10, 0, 0, 10, 30, 20,
        20, 20, 0, 0, 0, 0, 20, 20,
        -10, -20, -20, -20, -20, -20, -20, -10,
        -20, -30, -30, -40, -40, -30, -30, -20,
        -30, -40, -40, -50, -50, -40, -40, -30,
        -30, -40, -40, -50, -50, -40, -40, -30,
        -30, -40, -40, -50, -50, -40, -40, -30,
        -30, -40, -40, -50, -50, -40, -40, -30
    ]

    let score = 0;

    //gets a piece and alters the score accordingly
    chess_board.forEach(tile =>{
        let index = chess_board.indexOf(tile);
        let piece = document.getElementById(tile).innerText[2];
        let innTxt = document.getElementById(tile).innerText;
        let pieceValue = values[piece];

        //if piece = white ( minus score )
        if(document.getElementById(tile).innerText[0]=="W"){
            score-= pieceValue;
        }
        
        //if piece = black ( plus score ), gets positional value ( plus score )
        if(document.getElementById(tile).innerText[0]=="B"){
            score+= pieceValue;
            if(innTxt == "B-Pawn"){
                score += pawnScore[index];
            }
            if(innTxt == "B-Night"){
                score += knightScore[index];
            }
            if(innTxt == "B-Rook"){
                score += rookScore[index];
            }
            if(innTxt == "B-Bishop"){
                score += bishopScore[index];
            }
            if(innTxt == "B-Queen"){
                score += queenScore[index];
            }
            if(innTxt == "B-King"){
                score += kingScore[index];
            }
        }
    })
    return score;
}

export default evaluateBoard