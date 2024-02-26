function validEmail(str) {
  //your JS code here.
	let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return pattern.test(email)
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
