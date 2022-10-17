function multiplayMatrix() {

    whichMatrixCreate("A");
    whichMatrixCreate("B");


    let hr = document.createElement("hr");

    let textABefore = document.createElement("p");
    textABefore.innerText = `Изначальная матрица A = `;

    let textAAfter = document.createElement("p");
    textAAfter.innerText = `Умножение AxB = `;

    console.log(matrixA)
    console.log(matrixB)


    let matrBefore = math.multiply(matrixA, matrixB);

    console.log(matrBefore)

    let tableTextAndMatrix = document.createElement("table");
    let trTextAndMatrix = document.createElement("tr");
    let td1TextAndMatrix = document.createElement("td");
    let td2TextAndMatrix = document.createElement("td");
    let td3TextAndMatrix = document.createElement("td");
    let td4TextAndMatrix = document.createElement("td");

    let tableBefore = createHtmlTableMatrix("A", matrixA);


    let tableAfter = document.createElement("table");
    for (let i = 0; i < rowA.value; i++) {
        let trElement = document.createElement("tr");
        tableAfter.appendChild(trElement);

        for (let j = 0; j < columnB.value; j++) {
            let tdElement = document.createElement("td");
            trElement.appendChild(tdElement);
            tdElement.innerHTML = `${matrBefore.get([i, j])}`;
        }
    }










    tableTextAndMatrix.appendChild(trTextAndMatrix);

    trTextAndMatrix.appendChild(td1TextAndMatrix);
    trTextAndMatrix.appendChild(td2TextAndMatrix);
    trTextAndMatrix.appendChild(td3TextAndMatrix);
    trTextAndMatrix.appendChild(td4TextAndMatrix);

    let parentDiv = document.getElementById("solutions");

    let div = document.createElement("div");
    div.setAttribute("class", "divSolutions");

    div.appendChild(tableTextAndMatrix);

    td1TextAndMatrix.appendChild(textABefore);
    td2TextAndMatrix.appendChild(tableBefore);

    td3TextAndMatrix.appendChild(textAAfter);
    td4TextAndMatrix.appendChild(tableAfter);

    div.prepend(hr);
    parentDiv.prepend(div);

}





