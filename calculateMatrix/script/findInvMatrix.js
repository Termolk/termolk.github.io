function findInvMatrix(matrix, which) {
    whichMatrixCreate(which);
    createHtmlDivSolutionMatrix(which, matrix, math.inv(matrix), "Обратная матрица");
}