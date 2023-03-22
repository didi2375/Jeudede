// Sélecteurs //
const imageDe = document.querySelector(".imgDice");
const scoreTourJ1 = document.querySelector("#scoreTourJ1");
const scoreTourJ2 = document.querySelector("#scoreTourJ2");
const scoreJ1 = document.querySelector("#scoreJ1");
const scoreJ2 = document.querySelector("#scoreJ2");
const newgame = document.querySelector("#new-game-btn");
const garder = document.querySelector("#keep-btn1");
const launch = document.querySelector("#roll-btn1");
const displayJ1 = document.querySelector("#joueur1");
const displayJ2 = document.querySelector("#joueur2");




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

function afficheJoueurActif() {
    displayJ1.classList.toggle("activePlayer");
    displayJ2.classList.toggle("activePlayer");
    player.id == "Joueur 1" ? scoreTourJ1.textContent = `${scoreEncours}` : scoreTourJ2.textContent = `${scoreEncours}`;   
}


function lancer() {
    if (nbreLancer == 0){ 
        player = joueur1;
        player.tour = true;
        displayJ1.classList.toggle("activePlayer");
    } 
    nbreLancer++;    
    let Dice = Math.floor((Math.random()*6) + 1);
    affiche_De();
    function affiche_De(){    
        imageDe.src="src/D6_"+`${Dice}`+".png";
        }
    checkRules(Dice);
    
    function checkRules() {    
        if (Dice !== 1) {
        scoreEncours += Dice;
           player.id == "Joueur 1" ? scoreTourJ1.textContent = `${scoreEncours}` : scoreTourJ2.textContent = `${scoreEncours}`;                
        }else {
            changerJoueur();
        }
    }
}



function changerJoueur(){
    player.tour = false;
    scoreEncours = 0;
    if(player.id == "Joueur 1"){
        scoreTourJ1.textContent = "En attente du lancer";
        player = joueur2;
        player.tour = true;
        afficheJoueurActif();
    }
    else {
        scoreTourJ2.textContent = "En attente du lancer";
        player = joueur1;
        player.tour = true;
        afficheJoueurActif();
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
}

newgame.addEventListener('click', nouveauJeu, false);

function nouveauJeu() {
    alert("Démarrer une nouvelle partie ??");
    Location.reload(true);
}
