let currentResults = 0;
let entriesArray = [];

function objectFunction(operation, enteredNum, currentResults) {
	const objectRef = {
		operation,
		enteredNum,
		currentResults,
	};
	entriesArray.push(objectRef);
	console.log(entriesArray);
}

function addNumbers() {
	const enteredNum = parseInt(userInput.value);
	const enteredDescription = `${currentResults} + ${enteredNum}`;
	currentResults = currentResults + enteredNum;
	outputResult(currentResults, enteredDescription);

	objectFunction("ADD", enteredNum, currentResults);
}
function subtractNumber() {
	const enteredNum = parseInt(userInput.value);
	const enteredDescription = `${currentResults} - ${enteredNum}`;
	currentResults = currentResults - enteredNum;
	outputResult(currentResults, enteredDescription);
	objectFunction("Subtract", enteredNum, currentResults);
}
function multiplyNumbers() {
	const enteredNum = parseInt(userInput.value);
	const enteredDescription = `${currentResults} * ${enteredNum}`;
	currentResults = currentResults * enteredNum;
	outputResult(currentResults, enteredDescription);
	objectFunction("Multiply", enteredNum, currentResults);
}
function divideNumbers() {
	const enteredNum = parseInt(userInput.value);
	const enteredDescription = `${currentResults} / ${enteredNum}`;
	currentResults = currentResults / enteredNum;
	outputResult(currentResults, enteredDescription);
	objectFunction("Division", enteredNum, currentResults);
}
addBtn.addEventListener("click", addNumbers);
subtractBtn.addEventListener("click", subtractNumber);

multiplyBtn.addEventListener("click", multiplyNumbers);
divideBtn.addEventListener("click", divideNumbers);
