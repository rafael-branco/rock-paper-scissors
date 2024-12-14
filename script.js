

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

function moveElement(option){
    // document.getElementById(option).style.transform = 'translateX(50%)';

}

async function removeOption(option){
    console.log(option)
    let optionElement = document.getElementById(option);
    optionElement.classList.add('animate__animated');
    optionElement.classList.add('animate__backOutLeft');
    await sleep(4000);
    optionElement.remove();
    
}

function addBotOption(option){
    let optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.id = option;
    optionElement.classList.add('animate__animated');
    optionElement.classList.add('animate__backInRight');


    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', `/images/${option}.png`);
    
    optionElement.appendChild(imgElement);

    document.getElementById('game-board').appendChild(optionElement);
}

function addVersusSymbol(){

    let versus = document.createElement('div');
    versus.className = 'versus';
    versus.id = 'versus';
    versus.classList.add('animate__animated');
    versus.classList.add('animate__backInUp');

    let pElement = document.createElement('p');
    pElement.className = 'display-4';
    pElement.textContent = 'X';

    versus.appendChild(pElement);

    document.getElementById('game-board').appendChild(versus);

}

function removeOnClick(options){
    for (let i = 0; i < options.length; i++) {
        document.getElementById(options[i]).removeAttribute('onclick');
    }
}

function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

async function clearBoard(){
    let elements = document.querySelectorAll('#game-board > *');
    for (let i = 0; i < elements.length; i++) {
        
        elements[i].classList.add('animate__animated');
        elements[i].classList.add('animate__backOutLeft');

    }
    
    await sleep(2000);

    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
}

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}

function restartBoard(options){

    for (const option of options) {
        
        let optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.id = option;
        optionElement.classList.add('animate__animated');
        optionElement.classList.add('animate__bounceInUp');

        optionElement.setAttribute('alt', capitalize(option));
        optionElement.setAttribute('onclick', "play(this)");
    
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', `/images/${option}.png`);
        
        optionElement.appendChild(imgElement);
    
        document.getElementById('game-board').appendChild(optionElement);
        
    }
}


async function play(element){

    let options = ['rock', 'paper', 'scissors'];

    let playerOption = element.id;
    let botOption = botChoice(options);

    console.log(playerOption + " X " + botOption);

    removeOnClick(options);

    updateScore(checkPlay(playerOption, botOption));

    for(i in options){
        if(options[i] != playerOption){
            removeOption(options[i]);
        }
    }

    moveElement(playerOption);

    addVersusSymbol();

    addBotOption(botOption);


    await sleep(5000);

    await clearBoard();

    restartBoard(options);

}