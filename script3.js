let button = document.querySelector('.header-title');

button.addEventListener('click', function (){

var e = document.getElementById("education");
var f = document.getElementById("family");

var total = 500;

if(e.value == "undergrad"){
	total *= 1.5;
}
else if(e.value == "college"){
	total *= 1.2;
} else if(e.value == "highschool"){
	total *= 1.05;
} else{
	total *= 0.9;
} 
if(f.value == "veryrich"){
	total *= 2;
}
else if(f.value == "rich"){
	total *= 1.5;
} else{
	total *= 1.2;
} 
if(document.getElementById('young').checked) { 
    total*=1.5;
} 
else if(document.getElementById('normal').checked) { 
	total*=1.2;
} 
else { 
    total *= 0.95;
} 
if(document.getElementById('dombra').checked == true) { 
    total += 100;
} 
if(document.getElementById('cook').checked == true) { 
	total += 200;
}  
if(document.getElementById('character').checked == true) { 
	total += 150;
}
if(document.getElementById('sings').checked == true){ 
    total += 100;
}

if(document.getElementById('parentgossip').checked == true) { 
    total*=0.85;
} 
if(document.getElementById('charactergossip').checked == true) { 
	total*=0.9;
} 
if(document.getElementById('persongossip').checked == true) { 
    total -= 200;
} 
var output = res.textContent;
res.textContent = '$' + total + '$';
});

