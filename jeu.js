const imageDe = document.querySelector(".imgDice");

function affiche_De() {
    let Dice = Math.floor((Math.random()*6) + 1);
    
    switch(Dice)
    {
        case  2 : (imageDe.src="src/de2.png");
         break;
        
        case  3 : (imageDe.src="src/de3.png");
         break;
        
        case  4 : (imageDe.src="src/de4.png");
         break;
        
        case  4 : (imageDe.src="src/de4.png");
         break;
        
        case  5 : (imageDe.src="src/de5.png");
         break;
        
        default:  (imageDe.src="src/de1.png");
    }

    return Dice;
}

/*function check_Regles(Dice) {
    if (Dice = 1) =>{
        return;
    } ;
}*/