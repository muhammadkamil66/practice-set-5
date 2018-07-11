// let sentence= "";
// for(let numb = 1; numb <= 1000; numb++){
// 	if (numb%2 === 0) 
// {
// 	sentence= sentence + "" + numb + ", ";
// }
// }
// 	console.log(sentence);



let answer = "";
for (let i = 1 ; i <= 1000 ; i++ ) {
    if (i % 2 === 0 ) {
        if (i !== 2) { // so the ", " does not appear before the first number
            answer += ", ";
        }
        answer += i;
    }
}
console.log(answer);