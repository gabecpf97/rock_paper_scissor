let computerPlay = function() {
    let randomNum = Math.floor(Math.random() * 10 + 1) % 3
    switch (randomNum) {
        case 0:
            return "rock"
        
        case 1:
            return "paper"

        case 2:
            return "scissor"
    }
}

let playOnce = function (player_choice, computer_choice) {
    player_choice = player_choice.tolowerCase()
    let result = ""
    switch (player_choice) {
        case "rock":
            if (computer_choice == "rock")
                result = "draw"
            else if (computer_choice == "paper")
                result = "lose"
            else
                result = "win"
            break;
        
        case "paper":
            if (computer_choice == "rock")
                result = "win"
            else if (computer_choice == "paper")
                result = "draw"
            else
                result = "lose"
            break;

        case "scissor":
            if (computer_choice == "rock")
                result = "lsoe"
            else if (computer_choice == "paper")
                result = "win"
            else
                result = "draw"
            break;
    }
    return getResult(result, player_choice, computer_choice)
}

let getResult = function(result, player_choice, computer_choice){
    switch (result) {
        case "win":
            return `You win! ${player_choice} beat ${computer_choice}`

        case "lose":
            return `You lose! ${computer_choice} beat ${player_choice}`

        case "draw":
            return `You draw with computer! ${player_choice} and ${computer_choice} are the same`
    }
}