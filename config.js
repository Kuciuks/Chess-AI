function config() {
    // Store pieces WHITE/BLACK
    let black_pieces = [];
    let white_pieces = [];

    // Store all possible moves
    let all_piece_moves = [];

    // Store chess board
    let chess_board = [];

    // Control depth, ply
    let depth = 3;

    // Store alpha beta initial values
    let alpha = -Infinity;
    let beta = Infinity;

    let checkedBoardCount = 0;

    let pieceNameMemAI = [];
    let pieceNameMemHU = [];
    let count = 0;

    let moveCount = 0;
    let moveStorage = [];

    // Store turn value
    let toggle = 3;

    // Store player selection
    let selection = null;
    let selected_letter = "";

    // Return an object containing the properties
    return {
        black_pieces,
        white_pieces,
        all_piece_moves,
        chess_board,
        depth,
        alpha,
        beta,
        checkedBoardCount,
        pieceNameMemAI,
        pieceNameMemHU,
        count,
        moveCount,
        moveStorage,
        toggle,
        selection,
        selected_letter
    };
}

export default config;
