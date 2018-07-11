function print(){
	let startnumber = parseInt(document.querySelector("#start").value);
	let stopnumber = parseInt(document.querySelector("#stop").value);
	let jumpnumber = parseInt(document.querySelector("#jump").value);

	for(let i = startnumber; i <= stopnumber; i += jumpnumber){
		console.log(i);
	}
}