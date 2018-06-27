let sentence= "";
for(let numb = 1; numb <= 1000; numb++){
	if (numb%2 === 0) 
{
	sentence= sentence + "" + numb + ", ";
}
}
	console.log(sentence);