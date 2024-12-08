

function updateScore(score){
    let scoreElement = document.getElementById('score');

    let newScore = parseInt(scoreElement.getAttribute('value')) + score;

    scoreElement.innerHTML = newScore;
    scoreElement.setAttribute('value', newScore);
}

function checkPlay(player, bot){
    if(player == bot){
        return 0;
    }else if(player == "paper" && bot == "rock"){
        return 1;
    }else if(player == "paper" && bot == "scissors"){
        return -1;
    }else if(player == "rock" && bot == "paper"){
        return -1;
    }else if(player == "rock" && bot == "scissors"){
        return 1;
    }else if(player == "scissors" && bot == "rock"){
        return -1;
    }else if(player == "scissors" && bot == "paper"){
        return 1;
    }else{
        return null;
    }
}

function botChoice(options){

    return options[Math.floor(Math.random() * options.length)];

}

async function removeOption(option){
    console.log(option)
    let optionElement = document.getElementById(option);
    optionElement.classList.add('animate__animated');
    optionElement.classList.add('animate__backOutLeft');
}

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

function play(element){

    let options = ['paper', 'rock', 'scissors'];

    let playerOption = element.id;
    let botOption = botChoice(options);

    console.log(playerOption + " X " + botOption);

    updateScore(checkPlay(playerOption, botOption))

    for(i in options){
        if(options[i] != playerOption){
            removeOption(options[i]);
        }
    }

}