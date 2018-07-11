let y;
let x = 10;
let d = "";

for(let v = 1; v <= 8; v++){
	for(y = 0; y < 5; y++){

		x++;
		d = d + x + (y<4? " ~ " : "");
	}

	x = 10 * v;
	console.log(d);
	d = "";
	x += 10;
}