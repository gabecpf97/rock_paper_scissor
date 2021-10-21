/**
 * This is a model file for a Rock Paper Scissor game that
 * a player can play with a computer for 5 games each time
 * @author Gabriel Chau
 * @version Oct 13 2021
 */

/**
 * Uses random function in Math to general result for either
 * rock, paper or scissor
 * @returns the choice of the computer in String
 */
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 10 + 1) % 3;
    switch (randomNum) {
        case 0:
            return "rock";

        case 1:
            return "paper";

        case 2:
            return "scissor";
    }
}

/**
 * Function that calles getResult and getStatement to general final result
 * @param {*} player_choice     palyer's choice
 * @param {*} computer_choice   computer's choice
 * @returns the game's result statement in String
 */
function playOnce(player_choice, computer_choice){
    return getStatement(getResult(player_choice, computer_choice), 
            player_choice, computer_choice);
}

/**
 * Function that use the user's input for switch statement to compare with
 * computer result to generate result of win, lose or draw the return it
 * @param {*} player_choice     player's choice
 * @param {*} computer_choice   computer's choice
 * @returns the result of the game in String
 */
function getResult(player_choice, computer_choice) {
    player_choice = player_choice.toLowerCase();
    let result = "";
    switch (player_choice) {
        case "rock":
            if (computer_choice == "rock")
                result = "draw";
            else if (computer_choice == "paper")
                result = "lose";

            else
                result = "win";
            break;

        case "paper":
            if (computer_choice == "rock")
                result = "win";
            else if (computer_choice == "paper")
                result = "draw";

            else
                result = "lose";
            break;

        case "scissor":
            if (computer_choice == "rock")
                result = "lose";
            else if (computer_choice == "paper")
                result = "win";

            else
                result = "draw";
            break;

        default:
            return "Please enter rock/paper/scissor only";
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
            return `You win! ${player_choice} beat ${computer_choice}`;

        case "lose":
            return `You lose! ${computer_choice} beat ${player_choice}`;

        case "draw":
            return `You draw! ${player_choice} and ${computer_choice} are the same`;
    }
}

/** 
 * Function that play the game 5 time and console log the result of each game 
 * and the final result of the game
 * Takes no aragument
*/
function game(player_choice) {
    let round_result = "";
    let final_result = "";
    let cChoice = computerPlay();
    round_result = playOnce(player_choice, cChoice);
    final_result = getResult(player_choice, cChoice);
    return [round_result, final_result];
}

/**
 * Helper function that get the final score of the 5 games and reutrn
 * the final result statement of the games
 * @param {*} final_result  array that stored 5 games' result
 * @returns String of final result statement
 */
function getScore(final_result){
    let result = 0;
    for (let i = 0; i < final_result.length; i++){
        switch (final_result[i]) {
            case "win":
                result++;
                break;
            
            case "lose":
                result--;
                break;
        }
    }
    if (result > 0)
        return "The final winner is you! Congradulation!";
    else if (result < 0)
        return "The final winner is computer, lets try again";
    else
        return "The final result are draw, lets try again";
}

/**
 * the following code will add event listener to the button
 * and allow the program to track the score of player and
 * allow user to play until they will 5 times
 */

/**
 * get button and <p> from the html file
 */
const butts = document.querySelectorAll('button');
const display_text = document.querySelector('.text');
const display_result = document.querySelector('.result');
const display_fin = document.querySelector('.fin');

// counter array for scores
let cnt = [0, 0, 0];

/**
 * add click listener to buttons and call game() to play once
 * then display result and score.
 */
butts.forEach(butt => {
    butt.addEventListener('click', (e) => {
        let result = game(e.target.className);
        display_text.textContent=  result[0];
        display_result.textContent = showCurScore(result[1]);
        if (cnt[0] >= 5){
            display_fin.textContent = 
                "You have win 5 times, the game will reset now";
            cnt = [0, 0, 0];
        } else {
            display_fin.textContent = "";
        }
    });
});

/**
 * Helper function that store each round's result to the array
 * @param {*} result current round result
 * @returns String that display current score
 */
function showCurScore(result) {
    switch (result){
        case 'win':
            cnt[0]++;
            break;
        
        case 'lose':
            cnt[1]++;
            break;
        
        case 'draw':
            cnt[2]++;
            break;
    }
    return `Win: ${cnt[0]}, Lose: ${cnt[1]}, Draw:${cnt[2]}`;
}
