const validateSignUp = (emailInput, passwordInput, emailError, passwordError) => {
	let errorState = false;
	// passwordError.innerHTML = "Please provide a password <br>(Min 6 digits):";
	if(!emailInput && !passwordInput) {
		errorState = true;
		emailError.style.visibility = "visible";
		passwordError.style.visibility = "visible";
	} else if (!emailInput) {
		errorState = true;
		emailError.style.visibility = "visible";
		passwordError.style.visibility = "hidden";
	} else if (!passwordInput) {
		errorState = true;
		emailError.style.visibility = "hidden";
		passwordError.style.visibility = "visible";
	} else {
		errorState = false;
		emailError.style.visibility = "hidden";
		passwordError.style.visibility = "hidden";
	}
	
	const signInErrorStatus = ()=> {
		return errorState
	}

	return { signInErrorStatus }
}

export { validateSignUp }