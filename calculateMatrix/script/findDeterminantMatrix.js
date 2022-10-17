function findDeterminantMatrix(matr, which){
    whichMatrixCreate(which);
    let determinant = math.det(matr);
    alert(`Определитель матрицы: ${determinant}`);
}