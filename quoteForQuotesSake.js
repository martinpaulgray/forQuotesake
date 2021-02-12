
let randNum = Math.floor(Math.random()*12)+1;

let randPnum = Math.floor(Math.random()*3)+1;

let randQnum = Math.floor(Math.random()*5)+1;


let person = [];
let quote = [];

const bruceQuote = ["Showing off is the fool's idea of glory.", "As you think, so shall you become.", "Mistakes are always forgivable, if one has the courage to admit them.", "If you spend too much time thinking about a thing, you'll never get it done.", "Do not pray for an easy life, pray for the strength to endure a difficult one.", "The key to immortality is first living a life worth remembering."];

const nelsonQuote = ["Do not judge me by my successes, judge me by how many times I fell down and got back up again.", "I learned that courage was not the absence of fear, but the triumph over it.", "The brave man is not he who does not feel afraid, but he who conquers that fear.", "Education is the most powerful weapon which you can use to change the world.", "I like friends who have independent minds because they tend to make you see problems from all angles.", "It always seems impossible until it's done.", "Real leaders must be ready to sacrifice all for the freedom of their people."];

const grouchoQuote = ["I'm not crazy about reality, but it's still the only place to get a decent meal.", "Next time I see you, remind me not to talk to you.", "A black cat crossing your path signifies that the animal is going somewhere.", "Those are my principles, and if you don't like them... well, I have others.", "I intend to live forever, or die trying.", "No man goes before his time - unless the boss leaves early."];



switch (randPnum){
	case 1 : person = 'Bruce Lee';
	console.log('Look out for the number: ' + randNum + ' today! And also consider ' + person + ' who once said: ' + bruceQuote[randQnum]);
	break;
	case 2 : person = 'Nelson Mandela'
	console.log('Look out for the number: ' + randNum + ' today! And also consider ' + person + ' who once said: ' + nelsonQuote[randQnum]);
	break;
	case 3 : person = 'Grouch Marx';
	console.log('Look out for the number: ' + randNum + ' today! And also consider ' + person + ' who once said: ' + grouchoQuote[randQnum]);
	break;
	default : person = 'Nobody';
};


