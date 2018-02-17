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
        let AiDice = Math.floor((Math.random() * 6) + 1);
        dicesAI.push(AiDice);
    }

    //showing player dices
    for (let i = 1; i <= dicesPlayer.length; i++) {
        document.getElementById('_' + i).innerHTML = dicesPlayer[i-1];
    }

    //showing AI dices
    for (let i = 1; i <= dicesPlayer.length; i++) {
        document.getElementById('_$' + i).innerHTML = dicesAI[i-1];
    }

    document.getElementById('roll').setAttribute('disabled', 'disabled');
    setClickable();

    //this is optional for making different reRolls
    let reRolls = document.getElementById('reRollsQuantity').value;
    if(reRolls <= 0) document.getElementById('reRoll').setAttribute('disabled', 'disabled');
    document.getElementById('reRollsQuantity').setAttribute('disabled', 'disabled');
}

//making dices clickable
function setClickable() {
    for(let i = 1; i <= dicesPlayer.length; i++) {
        document.getElementById('_' + i).addEventListener('click', forRollDice);
    }
}

//mark dices
function forRollDice() {
    if(this.classList.contains('forRoll')){
        this.classList.remove('forRoll');
    }else {
        this.classList.add('forRoll');
    }
}

function reRoll() {
    //this is optional for making different reRolls
    let reRolls = document.getElementById('reRollsQuantity').value;
    if(reRolls > 0) {
        let reRolledDicesPosition = [];
        for (let i = 1; i <= 5; i++) {
            //getting markedDice
            if (document.getElementById('_' + i).classList.contains('forRoll')) {
                reRolledDicesPosition.push(i);
            }
        }

        if (reRolledDicesPosition.length > 0) {
            //new rolls
            let newRoll = [];
            for (let i = 0; i < reRolledDicesPosition.length; i++) {
                let newDiceRoll = Math.floor((Math.random() * 6) + 1);
                newRoll.push(newDiceRoll);
            }

            //replacing marked dices with new rolls
            for (let i = 0; i < reRolledDicesPosition.length; i++) {
                dicesPlayer.splice(reRolledDicesPosition[i] - 1, 1, newRoll[i]);
            }

            //showing new rolls - should be replaced with Tisho's function
            for (let i = 1; i <= dicesPlayer.length; i++) {
                document.getElementById('_' + i).innerHTML = dicesPlayer[i - 1];
                document.getElementById('_' + i).classList.remove('forRoll');
            }

        }
    }
    --reRolls;
    if(reRolls === 0) {
        document.getElementById('reRoll').setAttribute('disabled', 'disabled');
    }
    document.getElementById('reRollsQuantity').value = reRolls;
}
