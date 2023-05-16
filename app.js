let turn = "X";

let gameover = false;

const change = () => {
    return turn === "X" ? "0" : "X";
}

const winner = () => {
    let btext = document.getElementsByClassName("box-text");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if ((btext[e[0]].innerText === btext[e[1]].innerText) && (btext[e[2]].innerText === btext[e[1]].innerText) && (btext[e[1]].innerText !== "")) {
            document.querySelector(".text").innerText = btext[e[0]].innerText + " won";
            gameover = true;
        }
    })
}

const boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".box-text");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = change();
            winner();
            if (!gameover) {
                document.getElementsByClassName("text")[0].innerText = `Turn for ${turn}`;
            }
        }
    })
})

const resetbtn = document.getElementById("reset");

resetbtn.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".box-text");

    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })

    turn = "X";
    gameover = false;
    document.getElementsByClassName("text")[0].innerText = `Turn for ${turn}`;

})