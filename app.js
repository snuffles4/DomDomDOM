document.addEventListener("DOMContentLoaded", function() {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square')
    button.appendChild(btnText);
    document.body.appendChild(button);
    let flexcontainer = document.createElement("div");
    flexcontainer.classList.add("container");
    document.body.appendChild(flexcontainer);
    let squarenumber = 1;

    button.addEventListener("click", () => {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.id = squarenumber;
        newSquare.innerText = squarenumber
        newSquare.addEventListener("click", function() {
            newSquare.style.backgroundColor = getRandomColor();
        });
        newSquare.addEventListener("dblclick", function() {
            if (newSquare.id % 2 === 0) {
                if (newSquare.nextSibling !== null) {
                    newSquare.nextSibling.remove();
                } else {
                    alert("Nothin there kiddo!")
                }
            } else {
                if (newSquare.previousSibling !== null) {
                    this.previousSibling.remove();
                } else {
                    alert("nothing there bud")
                }
            }
        })

        flexcontainer.appendChild(newSquare);
        squarenumber++;
    });

});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}