box = document.getElementById("box")
box.style.backgroundColor  = "rgba(255, 255, 25, 1)"

function onClick(event){
    box = document.getElementById("box")
    randomColors = ["red", "orange", "lightblue", "blue", "green"]
    idx = Math.floor(Math.random() * randomColors.length)

    box.style.backgroundColor = randomColors[idx]
}

box.addEventListener("click", onClick)