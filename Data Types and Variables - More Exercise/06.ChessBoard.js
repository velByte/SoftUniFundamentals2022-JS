function solve(n) {

    let color = 0;

    let test = false;
    let getInnerDivConten = (iteration) => {
        let result = "";
        for (let i = 0; i < iteration; i++) {
            let currentColor = color % 2 !== 0 ? "white" : "black"
            let span = "    <span class=\"" + currentColor + "\"></span>";
            if (i != iteration - 1) {
                span += "\n";
                color++
            } else if (iteration % 2 !== 0) {
                color++
            }
            result += span
        }
        return result;
    }

    let createDiv = (iteration) => {
        let result = "";
        for (let i = 0; i < iteration; i++) {
            let div = "  <div>\n" + getInnerDivConten(iteration) + "\n" + "  </div>"

            result += div;
            if (i != iteration - 1) result += "\n"
        }
        return result;
    }

    let output = "<div class=\"chessboard\">" + "\n" + createDiv(n) + "\n" + "</div>"

    console.log(output);



    // let output =
    //     `<div> class="chessboard">
    //     ${createDiv(n)}
    // </div>`
    // console.log(output);
}
solve(6); 