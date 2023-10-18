const form=document.getElementById("gameForm");

function retrieveFormValue(event){
	event.preventDefault();
	const 
	gameName=form.querySelector('[name="gameName"]'),
	gameSumbit=form.querySelector('[name="gameRating"]'),
	gameScore=form.querySelector('[name="gameScore"]');
	const values={
		
		gameName: gameName.value,
		gameSumbit: gameSumbit.value,
		gameScore: gameScore.value
	};
	console.log("sriptweb",values);
}
form.addEventListener('sumbit',retrieveFormValue);