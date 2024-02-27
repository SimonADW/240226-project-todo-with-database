import { validateForm, validateDescription } from "./validateForm";

//	DOM CONTENT TARGETS
	// SIGN IN/UP SECTIONS
const signInButton = document.querySelector(".header__sign-in-button");
const signUpButton = document.querySelector(".header__signup-button");
const signInSection = document.querySelector(".sign-in-section");
const signUpSection = document.querySelector(".signup-section");
const closeButtons = document.querySelectorAll(".close-form-button");

	// TODO FORM SECTION
const titleInput = document.querySelector(".todo-title-input");
const dateInput = document.querySelector(".todo-date-input");
const descriptionInput = document.querySelector(".todo-description-input");
const submitTodoButton = document.querySelector(".submit-todo-button");
const charCounter = document.querySelector(".char-count");
		// ERRORS
const titleError = document.querySelector(".title-error");
const dateError = document.querySelector(".date-error");
const descriptionError = document.querySelector(".description-error");


// SIGN UP/IN EVENTLISTENERS

signInButton.addEventListener("click", ()=> {
	signInSection.style.display = "flex";
})

signUpButton.addEventListener("click", ()=> {
	signUpSection.style.display = "flex";
})

closeButtons.forEach((button)=>{
	button.addEventListener("click", (event)=> {
		event.preventDefault();
		event.currentTarget.parentElement.style.display = "none";
	});
});

// VALIDATE FORM

submitTodoButton.addEventListener("click", (event)=>{
	event.preventDefault();
	const {formErrorStatus} = validateForm(titleInput.value, dateInput.value, titleError, dateError);
	if (formErrorStatus()){
		return
	} else {
		console.log("Submitted")
	}
});

validateDescription(descriptionInput, descriptionError, charCounter);

