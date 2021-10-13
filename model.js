function computerPlay() {
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

function playOnce(player_choice, computer_choice){
    return getStatement(getResult(player_choice, computer_choice), player_choice, computer_choice)
}

function getResult(player_choice, computer_choice) {
    player_choice = player_choice.toLowerCase()
    let result = ""
    switch (player_choice) {
        case "rock":
            if (computer_choice == "rock")
                result = "draw"
            else if (computer_choice == "paper")
                result = "lose"

            else
                result = "win"
            break

        case "paper":
            if (computer_choice == "rock")
                result = "win"
            else if (computer_choice == "paper")
                result = "draw"

            else
                result = "lose"
            break

        case "scissor":
            if (computer_choice == "rock")
                result = "lose"
            else if (computer_choice == "paper")
                result = "win"

            else
                result = "draw"
            break

        default:
            return "Please enter rock/paper/scissor only"
    }
    return result;
}

function getStatement(result, player_choice, computer_choice) {
    switch (result) {
        case "win":
            return `You win! ${player_choice} beat ${computer_choice}`

        case "lose":
            return `You lose! ${computer_choice} beat ${player_choice}`

        case "draw":
            return `You draw with computer! ${player_choice} and ${computer_choice} are the same`
    }
}

function game() {
    let round_result = ""
    let final_result = []
    for (let i = 0; i < 5; i++) {
        let cChoice = computerPlay();
        let pChoice = prompt("Enter rock/paper/scissor", "a")
        round_result = playOnce(pChoice, cChoice)
        final_result.push(getResult(pChoice, cChoice))
        console.log(round_result)
    }
    console.log(getScore(final_result))
}

function getScore(final_result){
    let result = 0
    for (let i = 0; i < final_result.length; i++){
        switch (final_result[i]) {
            case "win":
                result++
                break;
            
            case "lose":
                result--
                break;
        }
    }
    if (result > 0)
        return "The final winner is you! Congradulation!"
    else if (result < 0)
        return "The final winner is computer, lets try again"
    else
        return "The final result are draw, lets try again"
}
