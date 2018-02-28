console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage:"images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage:"images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts", 
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}]; 

var cardsInPlay = []; 


var checkForMatch = function(){
 	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			console.log("you found a match!");
		}else{
			console.log("sorry, try again."); 
		}
	}	
}; 

var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId].rank); 
	cardsInPlay.push(cards[cardId].rank); 
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage); 
	checkForMatch(); 
};

flipCard(0); 
flipCard(2); 