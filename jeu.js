// Sélecteurs //
const imageDe = document.querySelector(".imgDice");
const scoreTour = document.querySelector(".roundScore");
const scoreJ1 = document.querySelector(".scoreJ1");
const scoreJ2 = document.querySelector(".scoreJ2");
const newgame = document.querySelector("#newgame");
const garder = document.querySelector("#garder");
const launch = document.querySelector("#launch");
const exit = document.querySelector("#exit");



class Joueur {
    constructor (id, tour) {
        this.id = id;
        this.tour = tour;
        this.score = 0;
    }
}

const joueur1 = new Joueur("Joueur 1", false);
const joueur2 = new Joueur("Joueur 2", false);

let player ;
let scoreEncours = 0;
let nbreLancer = 0;

launch.addEventListener('click', lancer, false) 

function lancer() {
    if (nbreLancer == 0){ 
        player = joueur1;
        player.tour = true;
    } 
    nbreLancer++; 
   
    Dice = Math.floor((Math.random()*6) + 1);
    console.log(player);
    affiche_De();
    checkRules(Dice)   
    console.log("L'encours : " + scoreEncours);

    function affiche_De(){    
        switch(Dice) {
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
        };
        };

    function checkRules() {
    
        if (Dice !== 1) {
        scoreEncours += Dice;
        scoreTour.textContent = `${scoreEncours}`;
        }
    
        else {
        alert("Dommage "+ `${player.id}` + " !!")
        changerJoueur();
        }
    }
}

function changerJoueur(){
    player.tour = false;
    scoreEncours = 0;
    scoreTour.textContent = "En attente du lancer";
    if(player.id == "Joueur 1"){
        player = joueur2;
        player.tour = true;
    }
    else {
        player = joueur1;
        player.tour = true;
    }
}   
garder.addEventListener('click', keep, false)

function checkWin(score) {
    if (score >= 100) 
    alert("Bravo " + `${player.id}` + " vous avez gagné!!")
}

function keep() {
    // 'score du tour' vers 'score du joueur actif' //    
    if (player.id == "Joueur 1") {
        joueur1.score += scoreEncours;
        scoreJ1.textContent = `${joueur1.score}`;
        checkWin(joueur1.score);
        changerJoueur();
    }

    else {
        joueur2.score += scoreEncours;
        scoreJ2.textContent = `${joueur2.score}`; 
        checkWin(joueur2.score);
        changerJoueur();
    }   
    console.log("score Joueur 1: " + joueur1.score);
    console.log("score Joueur 2: " + joueur2.score);
}

newgame.addEventListener('click', function (){document.location.reload(),false});
