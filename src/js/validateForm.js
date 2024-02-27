
const validateForm = (titleInput, dateInput, titleError, dateError)=> {
	let errors = {
		errorStatus: false,
		titleError: "Please enter a title",
		dateError: "Please set a due date"
	}
	
	titleError.textContent = errors.titleError
	dateError.textContent = errors.dateError
	
	if (!titleInput && !dateInput) {
		errors.errorStatus = true;
		titleError.style.visibility = "visible"
		dateError.style.visibility = "visible"
		
	} else if (!titleInput) {
		errors.errorStatus = true;
		titleError.style.visibility = "visible"
		dateError.style.visibility = "hidden"
	} else if (!dateInput) {
		errors.errorStatus = true;
		dateError.style.visibility = "visible"
		dateError.style.visibility = "visible"
		titleError.style.visibility = "hidden"
	} else {
		errors.errorStatus = false;
		dateError.style.visibility = "hidden"
		titleError.style.visibility = "hidden"
	}

	const formErrorStatus = () => {
		return errors.errorStatus;
	}
	return {formErrorStatus}
};

const validateDescription = (descInput, descError, descCounter)=> {
	descInput.addEventListener("input", ()=> {
		descCounter.textContent = `Characters: ${descInput.value.length}`;

		if(descInput.value.length >= 100){
			descError.textContent = "Max characters reached ⚠️"
			descError.style.visibility = "visible";
		} else {
			// descCounter.textContent = `Characters: 0`;
			descError.style.visibility = "hidden";
		};
	});

	descInput.addEventListener("keydown", (event)=>{
		if(descInput.value.length >= 100 && event.key !== "Backspace") {
			event.preventDefault();
		};
	});

}

export {validateForm, validateDescription}
