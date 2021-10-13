let computerPlay = function() {
    let randomNum = Math.floor(Math.random() * 10 + 1) % 3
    switch (randomNum) {
        case 0:
            return "Rock"
        
        case 1:
            return "Paper"

        case 2:
            return "Scissor"
    }
}