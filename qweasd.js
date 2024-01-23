let fs = require('fs');
const readlineSync = require('readline-sync');
let mem = new Array();
let stack = new Array();
let ip = 0;
inText = fs.readFileSync('prog.spml');
inText = inText.toString();
mem = inText.split(/ |\r\n/);
mem.push("exit");
while (mem[ip] != "exit"){
	switch (mem[ip]) {
		case 'input':
			mem[parseInt(mem[ip+1])] = readlineSync.question('Введите число: ');
			ip+=2;
			break;
		case 'set':
			mem[parseInt(mem[ip+1])] = parseInt(mem[ip+2]);
			ip+=3;
			break;
		case 'add':
			mem[parseInt(mem[ip+3])] = mem[parseInt(mem[ip+1])] + mem[parseInt(mem[ip+2])];
			ip +=4;
			break;
		case 'divc':
			mem[parseInt(mem[ip+3])] = mem[parseInt(mem[ip+1])] % mem[parseInt(mem[ip+2])];
			ip +=4;
			break;
		case 'div':
			mem[parseInt(mem[ip+3])] = mem[parseInt(mem[ip+1])] / mem[parseInt(mem[ip+2])];
			ip +=4;
			break;
		case 'mult':
			mem[parseInt(mem[ip+3])] = mem[parseInt(mem[ip+1])] * mem[parseInt(mem[ip+2])];
			ip +=4;
			break;
		case 'sub':
			mem[parseInt(mem[ip+3])] = mem[parseInt(mem[ip+1])] - mem[parseInt(mem[ip+2])];
			ip +=4;
			break;
		case 'output':
			console.log(mem[mem[ip+1]]);
			ip+=2;
			break;
		case 'assignment':
			mem[parseInt(mem[ip+1])] = mem[parseInt(mem[ip+2])];
			ip += 3;
			break;
		case 'loop':
			if (stack[stack.lentgh -1] != ip || stack.lentgh == 0){
				stack.push(ip);
			}
			if (mem[parseInt(mem[ip+1])] == 0){
				while (mem[ip] != "endloop"){
					ip+=1;
				}
				stack.pop();
				ip+=1
				
				break;
			}
			ip+=2;
			break;
		case 'endloop':
			ip = stack[stack.length - 1];
			break;
	}
}
