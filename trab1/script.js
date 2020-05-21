window.addEventListener('load', start);

function start() {
	var inputRed = document.querySelector('#input-red');
	inputRed.addEventListener('change', changeInputValue);

	var inputGreen = document.querySelector('#input-green');
	inputGreen.addEventListener('change', changeInputValue);

	var inputBlue = document.querySelector('#input-blue');
	inputBlue.addEventListener('change', changeInputValue);
}

function changeInputValue() {
	switch (this.name) {
		case 'red':
			document.querySelector('#value-red').value = this.value;
			break;
		case 'green':
			document.querySelector('#value-green').value = this.value;
			break;
		case 'blue':
			document.querySelector('#value-blue').value = this.value;
			break;
	}

	changeColor();
}

function changeColor() {
	var redValue = document.querySelector('#value-red').value;
	var greenValue = document.querySelector('#value-green').value;
	var blueValue = document.querySelector('#value-blue').value;

	var div = document.querySelector('#div-cor');
	div.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}