let sudoku = [];

let checkSudoku = [1,2,3,4,5,6,7,8,9];
  for (let i = 0; i < 8; i++) {
      if (typeof checkSudoku[i] === "number" && checkSudoku[i] !== checkSudoku[i+1] && checkSudoku[i] !== checkSudoku[i+2] && checkSudoku[i] !== checkSudoku[i+3] && checkSudoku[i] !== checkSudoku[i+4] && checkSudoku[i] !== checkSudoku[i+5] && checkSudoku[i] !== checkSudoku[i+6] && checkSudoku[i] !== checkSudoku[i+7] && checkSudoku[i] !== checkSudoku[i+8]) {
        sudoku.push();
      } else {
        sudoku.push(1);
        }
  }



for (let s = 0; s < 9; s++) {
		if (typeof sudoku[s] === "number") {
			console.log("false");
			break
		} else {
			console.log("true");
			break
			}
}
