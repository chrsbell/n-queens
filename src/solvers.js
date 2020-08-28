/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// input: board size
// output: a matrix solution

window.placeRook = function(board) {
  // try placing a rook on next available spot
  for (var i = 0; i < board.attributes.n; i++) {
    for (var j = 0; j < board.attributes.n; j++) {

      // if a rook is placed successfully, recurse
      if (!(board.hasRowConflictAt(i) || board.hasColConflictAt(j) )) {
        board.togglePiece(i, j);
      } // [1, 0, 0, 0, 0]
      if (board.hasRowConflictAt(i) || board.hasColConflictAt(j) ) {
        board.togglePiece(i, j);
      }

    }
  }
  //if (!board.hasAnyRooksConflicts()) {
  // otherwise return
  return board;
  //}
};



window.findNRooksSolution = function(n) {
  var solution = undefined;
  //arr = Array.from(Array(n), (x) => Array.from(Array(n), x=> x = 0 ) );
  /// n = 6;
  //debugger;
  var arr = new Board({n: n});

  // arr = window.placeRook(arr);

  console.log(arr);

  //arr.attributes[1][1] = 1;

  // create an empty mat
  // iterate over matrix
  //console.log(arr, '<====!!');

  //arr.eachElenent(function(x, i, j) { console.log(x, 'from CB!!!!'); x[i][j] = 1;console.log(x, 'after from CB!!!!'); });

  // window.Board.hasRowConflictAt();


  //console.log(arr, '<====!!');
  //console.log(arr.hasColConflictAt());



  // check if there are any conflicts at posit
  //arr.attributes.forEach(x => x.forEach(function(y) { if (!(hasRowConflictAt(x) |//| hasColConflictAt(y))) { arr.attributes[x][y] = 1; } } ) );

  var solution = window.placeRook(arr).rows(); //fixmeion
  // if there aren't any conflicts, place rook



  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
