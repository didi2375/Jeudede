const imageDe = document.querySelector(".imgDice");
const scoreTour = document.querySelector(".roundScore");
const scoreJ1 = document.querySelector(".scoreJ1");
const scoreJ2 = document.querySelector(".scoreJ2");
const newgame = document.querySelector("#newgame");
const garder = document.querySelector("#garder");
const launch = document.querySelector("#launch");





launch.addEventListener('click', lancer)

function lancer() { 
    let Dice = Math.floor((Math.random()*6) + 1);

    affiche_De(Dice);

    function affiche_De();{    
        switch(i)
        {
            case  2 : (imageDe.src="src/D6_2.png");
            break;
        
            case  3 : (imageDe.src="src/D6_3.png");
            break;
        
            case  4 : (imageDe.src="src/D6_4.png");
            break;
        
            case  5 : (imageDe.src="src/D6_5.png");
            break;
        
            case  6 : (imageDe.src="src/D6_6.png");
            break;
        
            default:  (imageDe.src="src/D6_1.png");
        }
    };
    
    if (Dice = 1) {
        garder.setAttribute(disabled = "true");
    // Changement de joueur //
    }
}



garder.addEventListener('click', keep)

function keep() {
    // score du tour vers score du joueur actif //
}

