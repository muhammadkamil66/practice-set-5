// let sentence= "";
// for(let numb = 1; numb <= 1000; numb++){
// 	sentence= sentence + "" + numb + ", ";
// }

// 	console.log(sentence);



let answer = "";
for (let i = 1 ; i <= 1000 ; i++ ) {
    if (i !== 1) { // so the ", " does not appear before the first number
        answer += ", ";
    }
    answer += i;
}
console.log(answer);