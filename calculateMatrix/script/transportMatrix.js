function transportMatrix(matrix, which) {
     whichMatrixCreate(which);
     createHtmlDivSolutionMatrix(which, matrix, math.transpose(matrix), "Транспонированная матрица");
}





