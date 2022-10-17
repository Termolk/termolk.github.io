function multiplyMatrixForNumber(matrix, which) {
    whichMatrixCreate(which);
    let num = document.getElementById(`multiplyMatrixForNumber${which}`).value;
    createHtmlDivSolutionMatrix(which, matrix, math.multiply(matrix, num), `Результат:   ${num} * `);
}