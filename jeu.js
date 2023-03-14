// Sélecteurs //
const imageDe = document.querySelector(".imgDice");
const scoreTour = document.querySelector(".roundScore");
const scoreJ1 = document.querySelector(".scoreJ1");
const scoreJ2 = document.querySelector(".scoreJ2");
const newgame = document.querySelector("#newgame");
const garder = document.querySelector("#garder");
const launch = document.querySelector("#launch");
const displayJ1 = document.querySelector(".joueur1");
const displayJ2 = document.querySelector(".joueur2");




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
    displayJ1.classList.toggle("joueurActif");
    displayJ2.classList.toggle("joueurActif");    
}
function lancer() {
    if (nbreLancer == 0){ 
        player = joueur1;
        player.tour = true;
        displayJ1.classList.toggle("joueurActif");
    } 
    nbreLancer++; 
   
    Dice = Math.floor((Math.random()*6) + 1);
    affiche_De();
    checkRules(Dice)

    function affiche_De(){    
        imageDe.src="src/D6_"+`${Dice}`+".png";
        };

    function checkRules() {
    
        if (Dice !== 1) {
        scoreEncours += Dice;
        scoreTour.textContent = `${scoreEncours}`;
        }
    
        else {
        setTimeout (alert("Dommage "+ `${player.id}` + " !!"), 1500);
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
        afficheJoueurActif();


    }
    else {
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
    console.log("score Joueur 1: " + joueur1.score);
    console.log("score Joueur 2: " + joueur2.score);
}

newgame.addEventListener('click', nouveauJeu, false);

function nouveauJeu() {
    alert("Démarrer une nouvelle partie ??");
}
