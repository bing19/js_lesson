window.onload = function(e) {

	document.body.addEventListener ('click', function() {
		console.log(1);
	});

	
	document.body.addEventListener ('click', function() {
		console.log(3);
	});



	
	var res;
	var position;



	// Самое большое число из Трех
	// if(number1 > number2 && number1 > number3){
	// 	res = number1;
	// } else if (number2 > number3 && number2 > number1){
	// 	res = number2;
	// } else {
	// 	res = number3;
	// }

	// Самое большое число из Трех


	// Среднее число из Трех
	document.body.addEventListener ('click', function() {
		
		do {
			var number1 = +prompt("Введите первое число");
			var number2 = +prompt("Введите второе число");
			var number3 = +prompt("Введите третье число");
			if((number1 == number2) || (number2 == number3) || (number1 == number3)) {
				alert("Вы ввели два одинаковых числа");
			}
		} while((number1 == number2) || (number2 == number3) || (number1 == number3));



		if((number1 > number2 && number1 < number3) || (number1 > number3 && number1 < number2)) {
			position = number1; 

		} else {
				if((number2 > number1 && number2 < number3) || (number2 > number3 && number2 < number1)) {
					position = number2;
				} else {
					position = number3;
				}
		} 



		console.log(position);
	});
}



	var num1;
	var num2;
	var num;
	function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min)) + min;
	}	


	for(var i = 0; i < 10; i++) {
		num1 = getRandomInt(10, 20);
		num2 = getRandomInt(10, 20);
		num = +prompt("Сколько будет умножить " + num1 + " на " + num2);
		
		if(num == num1 * num2) {
			console.log("Правильно");
		} else {
				console.log("Неверно");
			}

	} 

