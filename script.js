

function updateScore(score){
    let scoreElement = document.getElementById('score');
    scoreElement.innerHTML = score;
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

function playGame(){
    let player;
    let bot;


}