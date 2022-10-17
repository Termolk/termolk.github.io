// В функцию передается матрица. На выход возвращается html таблица,
// в которой выводится сама матрица
function createHtmlTableMatrix(which, matr) {
    let row
    let column

    if (which == "A") {
         row = rowA
         column = columnA
    }

    if (which == "B") {
        row = rowB
        column = columnB
    }

    let tableElement = document.createElement("table");
    for (let i = 0; i < row.value; i++) {
        let trElement = document.createElement("tr");
        tableElement.appendChild(trElement);

        for (let j = 0; j < column.value; j++) {
            let tdElement = document.createElement("td");
            trElement.appendChild(tdElement);
            tdElement.innerHTML = `${Math.round(matr.get([i, j]))}`;
        }
    }
    return tableElement;
}