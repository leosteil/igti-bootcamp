window.addEventListener('load', start);

var globalNames = ['leonardo', 'pedro', 'débora'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start() {
	inputName = document.querySelector('#inputName');
	
	preventFormSubmit();
	activateInput();
	render();
}

function preventFormSubmit() {
	function handleFormSubmit(event) {
		event.preventDefault();
	}

	var form = document.querySelector('form');
	form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
	function insertName(name) {
		globalNames.push(name);
	}

	function updateName (name) {
		console.log(name);
		console.log(currentIndex);
		globalNames[currentIndex] = name;
		clearInput();
	}


	function handleTyping(event) {
		if(event.key === 'Enter') {
			if (isEditing) {
				updateName(event.target.value)
			} else {
				insertName(event.target.value)
			}

			render();

			isEditing = false;
		}
	}


	inputName.focus();
	inputName.addEventListener('keyup', handleTyping);
}

function render() {
	function createDeleteButton(index) {
		console.log(index);
		function deleteName() {
			globalNames.splice(index, 1);
			render();
		}

		var button = document.createElement('button');
		button.textContent = 'x';
		button.classList.add('deleteButton');

		button.addEventListener('click', deleteName);

		return button;
	}
	

	function createSpan(name, index) {
		function editName() {
			inputName.value = name;
			inputName.focus();
			isEditing = true;
			currentIndex = index;
		}

		var span = document.createElement('span');
		span.textContent = name;
		span.classList.add('clickable');

		span.addEventListener('click', editName);

		return span;
	}

	var divNames = document.querySelector('#names');
	divNames.innerHTML = '';

	var ul = document.createElement('ul');

	globalNames.forEach((element, i) => {
		var li = document.createElement('li');

		var button = createDeleteButton(i);
		var span = createSpan(element, i);
		
		li.appendChild(button);
		li.appendChild(span);
		ul.appendChild(li);
	});

	divNames.appendChild(ul);
	clearInput();
}

function clearInput() {
	inputName.value = '';
	inputName.focus();
}