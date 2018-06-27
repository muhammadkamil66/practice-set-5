function print(){
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	let body = document.querySelector("body");
	
	body.innerHTML = "<input type='number' min='0' id='numb1' placeholder='minimum'> <input type='number' max='100' id='numb2' placeholder='maximum'> <button onclick='print()'> print </button> "
	for (let i = numb1; i <= numb2; i ++){
	body.innerHTML += "<p>" + i + "</p>" ;



	}
	
}