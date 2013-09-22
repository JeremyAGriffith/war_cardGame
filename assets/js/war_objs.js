function Player () {
	this.score = 0;
	this.deck = [];

	this.draw_card = function(){
		// console.log("val "+this.deck[0].val);
		if (this.deck.length){
			this.score--;
			return this.deck.shift();
		}else{
			return null;
		}
		// this.score--;
		// return this.deck.shift();
	};
	this.add_card = function(card){
		this.deck.push(card);
		this.score++;
	};
}

// num is a # between 1 & 52
function Card (num) {
	this.suit = Math.floor((num-1) / 13);
	this.val = num - (13 * this.suit) + 1;
}

function blank_card(player_name) {
	$(player_name+' .field').append("<div class='card blank'></div>");
}

function create_card(num, suit) {
	var card_num, card_suit, color;
	switch (num){
		case 14:
			card_num = "A";
			break;
		case 11:
			card_num = "J";
			break;
		case 12:
			card_num = "Q";
			break;
		case 13:
			card_num = "K";
			break;
		default:
			card_num = num;
			break;
	}
	switch (suit){
		case 1:
			card_suit = "♥";
			color = "red";
			break;
		case 2:
			card_suit = "♦";
			color = "red";
			break;
		case 3:
			card_suit = "♣";
			color = "black";
			break;
		default:
			card_suit = "♠";
			color = "black";
			break;
	}

	return "<div class='card'><p class='left "+color+"'>"+card_num+"</p>"+
			"<p class='suit "+color+"'>"+card_suit+"</p>"+
			"<p class='bottom right "+color+"'>"+card_num+"</p></div>";
}