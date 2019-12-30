

let quest = confirm('you wanna play? Let`s play')
if (quest === false){
    alert('so go and fuck yourself')
} else {
    let stageMultiplay = 8;
    let moneyMultiplay = 1;
    let attempt = 3;
    let stagePrize;
    let allPrize = 0;
    let one = 1;
    let two = 2;
    let three = 3;
    let eight = 8;
    let mOne = -1;
    let userChoise;
    let number = Math.floor(Math.random() * (stageMultiplay + 1));
    const first = 100;
    const second = 50;
    const third = 25;

    for (let i = 0; i < three; i++) {
        stagePrize = first * moneyMultiplay;
        switch (attempt){
            case two : stagePrize = parseInt(second * moneyMultiplay);
             break;
            case one : stagePrize = parseInt(third * moneyMultiplay); 
             break;
             default : break;
        }
        userChoise = +prompt(`enter the gate \nAtempt left: ${attempt}\nyour prize: ${allPrize}
Possible prize on current attempt ${stagePrize}`);
        if (userChoise === number){
            switch(attempt){
                case three : allPrize += first * moneyMultiplay;
                break;
                case two : allPrize += parseInt(second * moneyMultiplay);
                break;
                case one : allPrize += parseInt(third * moneyMultiplay);
                break;
                default : break;
            }
            quest = confirm('congrats, want to continue?')
            if (quest === false) {
                alert(`thank you for a game. You prize is ${allPrize}`);
                quest = confirm(' wanna Play again?');
                if (quest === false ){
                    break;
                } else {
                    number = Math.floor(Math.random() * (stageMultiplay + 1));
                    allPrize = 0;
                    i = mOne;
                    stageMultiplay = eight + two * two;
                    moneyMultiplay = 1;
                    attempt = three;
                    continue;
                }
            } else {
                number = Math.floor(Math.random() * (stageMultiplay + 1));
                i = mOne;
                attempt = three;
                stageMultiplay = eight;
                moneyMultiplay *= 1;
                continue;
            }
        } else {
            attempt -= 1;
            if (attempt === 0){
                alert('thank you')
                quest = confirm('paly again?')
                if (quest === true) {
                    number = Math.floor(Math.random() * (stageMultiplay + 1));
                    allPrize = 0;
                    stageMultiplay = eight + two * two;
                    moneyMultiplay = 1;
                    attempt = three;
                    continue;
                } else{
                    break;
                }
            }
        }
    }
}