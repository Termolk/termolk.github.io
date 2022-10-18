function findInvMatrix(matrix, which) {
    whichMatrixCreate(which);
    let determinant = math.det(matrix);

    if (determinant === 0){
        alert("Детерминант матрицы не может быть равен нулю");
        return;
    }

    createHtmlDivSolutionMatrix(which, matrix, math.inv(matrix), "Обратная матрица");
}