let weight = document.getElementById("weight");
let feet = document.getElementById("feet");
let inch = document.getElementById("inch");
let button = document.getElementById("button");
let result = document.getElementById("result");
let level = document.getElementById("level");
let body = document.getElementById("body");


button.addEventListener("click", () => {
	 let height = Number((feet.value * 12)) + Number(inch.value);
	 let heightMeters = height * 0.0254;
	 let bmi = ((weight.value) / (Math.pow(heightMeters, 2)));

	 if(bmi <= 18.5){
	 	result.innerText = "Your BMI is : " + bmi.toFixed(2);
	 	level.innerText = "You are a Underweight person!!!";
	 	body.style.background = 'orange';
	 }

	 if(bmi > 18.5 && bmi <= 24.9){
	 	result.innerText = "Your BMI is : " + bmi.toFixed(2);
	 	level.innerText = "Congrats!!Your weight is normal..";
	 	body.style.background = 'green';
	 }

	 if(bmi >= 25 && bmi <= 29.9){
	 	result.innerText = "Your BMI is : " + bmi.toFixed(2);
	 	level.innerText = "Eat less,excercise more.You are a OverWeight person.";
	 	body.style.background = '#ff3232';
	 }

	 if(bmi >= 30){
	 	result.innerText = "Your BMI is : " + bmi.toFixed(2);
	 	level.innerText = "Obesity.Man Go to gym and have some mercy on food...";
	 	body.style.background = 'red';
	 }
});
