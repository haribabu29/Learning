console.log("Starting....");
const submitButton = document.getElementById("submit");
const clipperButton = document.getElementById("clipboard");
const passwordLengEl = document.getElementById("length");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const passwordEl = document.getElementById("password");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumbers,
    symbols: getRandomSymbol
}
clipperButton.addEventListener("click", function(){
    const textarea = document.createElement('textarea');
	const password = passwordEl.value;

	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});
submitButton.addEventListener("click", function(){
    const passwordlength = +passwordLengEl.value;
    const hasUpperCase = upperCaseEl.checked;
    const hasLowerCase = lowerCaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSymbols = symbolsEl.checked;
    // Generate Password
    generatePassword(hasUpperCase, hasLowerCase, hasNumbers, hasSymbols, passwordlength);
});
function generatePassword(upper, lower, number, symbols, pswdLength){
    let generatePswd = '';

    const typesArr = [{upper},{lower},{number},{symbols}].filter(item => Object.values(item)[0]);

    for(let i=0; i<pswdLength; i++){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatePswd += randomFunc[funcName]();
        });
    }
    passwordEl.value = generatePswd.slice(0, pswdLength);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor((Math.random() * 26) + 65));
}
function getRandomLower(){
    return String.fromCharCode(Math.floor((Math.random() * 26) + 97));
}
function getRandomNumbers(){
    return String.fromCharCode(Math.floor((Math.random() * 10) + 48));
}
function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}
