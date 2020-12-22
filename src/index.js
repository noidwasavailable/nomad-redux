const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const output = document.getElementById("countOutput");

let count = 0;

const updateText = () => {
	output.innerText = count;
};

const handleAdd = () => {
	count++;
	updateText();
};
const handleSubtract = () => {
	count--;
	updateText();
};

updateText();
addButton.addEventListener("click", handleAdd);
subtractButton.addEventListener("click", handleSubtract);
