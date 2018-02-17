let dicesPlayer = [];
let dicesAI = [];

function roll() {
    //setting player dices
    for (let i = 0; i < 5; i++) {
        let currentDice = Math.floor((Math.random() * 6) + 1);
        dicesPlayer.push(currentDice);
    }

    //setting AI dices
    for (let i = 0; i < 5; i++) {
        let currentDice = Math.floor((Math.random() * 6) + 1);
        dicesAI.push(currentDice);
    }

    //showing player dices
    for (let i = 1; i <= dicesPlayer.length; i++) {
        document.getElementById('_' + i).innerHTML = dicesPlayer[i-1];
    }

    //showing AI dices
    for (let i = 1; i <= dicesPlayer.length; i++) {
        document.getElementById('_$' + i).innerHTML = dicesPlayer[i-1];
    }
    document.getElementById('roll').setAttribute('disabled', 'disabled');
    setClickable();
}

//making dices clickable
function setClickable() {
    for (let i = 1; i <= dices.length; i++) {
        document.getElementById('_' + i).addEventListener('click', lockDice());
    }
}

function lockDice() {
    for (let i = 1; i <= dices.length; i++) {
        let currentElement = document.getElementById('_' + i);
        if(currentElement.classList.contains('locked')){
            currentElement.classList.remove('locked');
        }else {
            currentElement.classList.add('locked');
        }
    }
}
