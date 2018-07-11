function print(){
	let startNumb = parseInt(document.querySelector("#start").value);
	let stopNumb = parseInt(document.querySelector("#stop").value);
	// let body = document.querySelector("body");
	
	// body.innerHTML = "<input type='number' min='0' id='numb1' placeholder='minimum'> <input type='number' max='100' id='numb2' placeholder='maximum'> <button onclick='print()'> print </button> "
	for (let i = startNumb; i <= stopNumb; i ++){
	// body.innerHTML += "<p>" + i + "</p>" ;
	console.log(i);



	}
	
}