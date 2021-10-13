/**
 * Uses random function in Math to general result for either
 * rock, paper or scissor
 * @returns the choice of the computer in String
 */
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

/**
 * Function that calles getResult and getStatement to general final result
 * @param {*} player_choice     palyer's choice
 * @param {*} computer_choice   computer's choice
 * @returns the game's result statement in String
 */
function playOnce(player_choice, computer_choice){
    return getStatement(getResult(player_choice, computer_choice), player_choice, computer_choice)
}

/**
 * Function that use the user's input for switch statement to compare with
 * computer result to generate result of win, lose or draw the return it
 * @param {*} player_choice     player's choice
 * @param {*} computer_choice   computer's choice
 * @returns the result of the game in String
 */
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

/**
 * Helper function that return the result statement
 * @param {*} result    each game's result
 * @param {*} player_choice     the player's choice
 * @param {*} computer_choice   the computer's choice
 * @returns string of result statement
 */
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

/** 
 * Function that play the game 5 time and console log the result of each game 
 * and the final result of the game
 * Takes no aragument
*/
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

/**
 * Helper function that get the final score of the 5 games and reutrn
 * the final result statement of the games
 * @param {*} final_result  array that stored 5 games' result
 * @returns String of final result statement
 */
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
