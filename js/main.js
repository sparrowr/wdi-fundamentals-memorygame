console.log("Up and running!");

var cards = ["queen","queen","king","king"]; 
var cardsInPlay = []; 


var checkForMatch(){
 	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			console.log("you found a match!");
		}else{
			console.log("sorry, try again."); 
		}
	}	
}; 

var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId]); 
	cardsInPlay.push(cards[cardId]); 
	checkForMatch(); 
};

flipCard(0); 
flipCard(2); 