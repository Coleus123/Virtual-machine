let fs = require('fs');

let mem = new Array();
let ip = 0;
inText = fs.readFileSync('prog.spml');
inText = inText.toString();
mem = inText.split(/ |\r\n/);
mem.push("exit");
while (mem[ip] != "exit"){
	switch (mem[ip]) {
		case 'set':
			mem[parseInt(mem[ip+1])] = parseInt(mem[ip+2]);
			ip+=3;
			break;
		case 'output':
			console.log(mem[mem[ip+1]]);
			ip+=2;
			break;
		case 'nok':
			mem[parseInt(mem[ip+3])] = mem[parseInt(mem[ip+1])];
			mem[parseInt(mem[ip+4])] = mem[parseInt(mem[ip+2])];
			while (mem[parseInt(mem[ip+3])] != mem[parseInt(mem[ip+4])]){
				if (mem[parseInt(mem[ip+3])] > mem[parseInt(mem[ip+4])])
				{
				mem[parseInt(mem[ip+3])] = mem[parseInt(mem[ip+3])] - mem[parseInt(mem[ip+4])];
				}
				else {
					mem[parseInt(mem[ip+4])] = mem[parseInt(mem[ip+4])] - mem[parseInt(mem[ip+3])];
				}
			}
			mem[parseInt(mem[ip+4])] = (mem[parseInt(mem[ip+1])] * mem[parseInt(mem[ip+2])]) / mem[parseInt(mem[ip+3])];
			ip += 5;
			break;
		case 'fib':
			mem[parseInt(mem[ip+1])] = 0;
			mem[parseInt(mem[ip+2])] = 1;
			mem[parseInt(mem[ip+4])]-=1;
			while (mem[parseInt(mem[ip+4])] > 0){
				mem[parseInt(mem[ip+3])] = mem[parseInt(mem[ip+2])];
				mem[parseInt(mem[ip+2])] = mem[parseInt(mem[ip+2])] + mem[parseInt(mem[ip+1])];
				mem[parseInt(mem[ip+1])] = mem[parseInt(mem[ip+3])];
				mem[parseInt(mem[ip+4])]-=1;
			}
			ip+=5;
			break;
	}
}