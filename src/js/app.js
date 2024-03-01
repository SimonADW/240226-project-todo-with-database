import { firebaseConfig } from "./firebase.config";

import {initializeApp} from "firebase/app";

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";


initializeApp(firebaseConfig);



//	DOM CONTENT TARGETS
	// SIGN IN/UP SECTIONS
const signInButton = document.querySelector(".header__sign-in-button");
const signUpButton = document.querySelector(".header__signup-button");
const signInSection = document.querySelector(".sign-in-section");
const signUpSection = document.querySelector(".signup-section");
const signOutUserButton = document.querySelector(".header__signout-button");
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

const landingSection = document.querySelector(".landing-section");


// SIGN UP/IN EVENTLISTENERS

signInButton.addEventListener("click", ()=> {
	signUpSection.style.display = "none";	
	signInSection.style.display = "flex";
	landingSection.style.display = "none";
})

signUpButton.addEventListener("click", ()=> {
	signInSection.style.display = "none";	
	signUpSection.style.display = "flex";
	landingSection.style.display = "none";
})

closeButtons.forEach((button)=>{
	button.addEventListener("click", (event)=> {
		event.preventDefault();
		event.currentTarget.parentElement.style.display = "none";
		checkUserStatus();
	});
});

// VALIDATE FORM

import { validateForm, validateDescription } from "./validateForm";

submitTodoButton.addEventListener("click", (event)=>{
	event.preventDefault();
	const {formErrorStatus} = validateForm(titleInput.value, dateInput.value, titleError, dateError);
	if (formErrorStatus()){
		return
	} else {
		console.log("Submitted");
	}
});

validateDescription(descriptionInput, descriptionError, charCounter);


// AUTHENTICATION ---------------------------------------------------

const authService = getAuth();

// SIGN UP USERS

import { validateSignUp } from "./validateSignUp";

const signUpEmail = document.querySelector(".signup-form__email");
const signUpPassword = document.querySelector(".signup-form__password");
const signUpEmailError = document.querySelector(".signup-form__email-error");
const signUpPasswordError = document.querySelector(".signup-form__password-error");
const signUpSubmitButton = document.querySelector(".signup-submit-button");

const signUpUser = ()=> {
	const userEmail = signUpEmail.value;
	const userPassword = signUpPassword.value;
	const { signInErrorStatus } = validateSignUp(userEmail, userPassword, signUpEmailError, signUpPasswordError)
	if (signInErrorStatus()) {
		return
	} else {
		createUserWithEmailAndPassword(authService, userEmail, userPassword)
		.then((cred)=>{
			console.log(cred);
			console.log("Account created!");
			signUpSection.style.display = "none";
			signInButton.style.display = "none";
			signUpButton.style.display = "none";
			signOutUserButton.style.display = "block";

		})
		.catch((error)=> {
			console.log(error.message);
			signUpPasswordError.textContent = error.message;
			signUpPasswordError.style.visibility = "visible";
		})
	}
}

signUpSubmitButton.addEventListener("click", (event)=> {
	event.preventDefault();
	signUpUser();
	
});

// SIGN IN USERS

import { validateSignIn } from "./validateSignIn";


const signInEmail = document.querySelector(".sign-in-form__email");
const signInPassword = document.querySelector(".sign-in-form__password");
const signInEmailError = document.querySelector(".sign-in-form__email-error");
const signInPasswordError = document.querySelector(".sign-in-form__password-error");
const signInSubmitButton = document.querySelector(".sign-in-submit-button");

signInSubmitButton.addEventListener("click", (event)=> {
	event.preventDefault();
	const userEmail = signInEmail.value;
	const userPassword = signInPassword.value;
	const { signInErrorStatus } = validateSignIn(userEmail, userPassword, signInEmailError, signInPasswordError);
	if (signInErrorStatus()) {
		return
	} else {
		signInWithEmailAndPassword(authService, userEmail, userPassword)
		.then(()=> {
			console.log("Signed in ✔︎");				
			signInSection.style.display = "none";	
			signInButton.style.display = "none";
			signUpButton.style.display = "none";
			signOutUserButton.style.display = "block";
			
		})
		.catch((error)=> {
			console.log(error.message);
			signInPasswordError.textContent = "Wrong password";
			signInPasswordError.style.visibility = "visible";			
			});


	}
});
	
// SIGN OUT USERS

const signOutUser = ()=> {
	signOut(authService)
	.then(()=> {
		console.log("Signed out 👋");
		signOutUserButton.style.display = "none";
		signInButton.style.display = "block";
		signUpButton.style.display = "block";
		
	})
	.catch((error)=> console.log(error.message));
}

signOutUserButton.addEventListener("click", ()=> {
	signOutUser();
})

// CHECK USER AUTH-STATUS
function checkUserStatus() {	
	const addTodoSection = document.querySelector(".add-todo-section");
	const displayTodoSection = document.querySelector(".display-todos-section");
	

	onAuthStateChanged(authService, (user)=> {
		if(user) {
			addTodoSection.style.display = "flex";
			displayTodoSection.style.display = "block";
			landingSection.style.display = "none";
		} else {	
			addTodoSection.style.display = "none";
			displayTodoSection.style.display = "none";
			landingSection.style.display = "block";
		};
	});
};

checkUserStatus();





