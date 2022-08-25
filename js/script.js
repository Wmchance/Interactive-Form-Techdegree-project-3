/*
'Name' section
*/
const nameField = document.getElementById('name');
nameField.focus();

/*
'Job role' section
*/
const jobRoleField = document.getElementById('title');
const otherJobField = document.getElementById('other-job-role');
otherJobField.type = 'hidden';
jobRoleField.addEventListener ('change', (e) => {

    if (e.target.value === 'other') {
        otherJobField.type = '';
    } else {
        otherJobField.type = 'hidden';
    }

})

/*
'T-shirt info' section 
*/
const designSelect = document.getElementById('design');
const colorSelect = document.getElementById('color');
const colorOptions = colorSelect.children;

colorSelect.disabled = true; //prevent user from selecting color prior to selecting a 'design'

designSelect.addEventListener('change', e => {
    colorSelect.disabled = false;

    for (let i=1; i<colorOptions.length; i++) {
        const designSelectValue = e.target.value;
        const optionThemes = colorOptions[i].getAttribute('data-theme');
        colorOptions[i].hidden = true;
        colorOptions[i].selected = false;
        //console.log(designSelectValue);
        //console.log(optionThemes); 

        if (designSelectValue === optionThemes) {
            colorOptions[i].hidden = false;
            colorOptions[i].selected = true; 
        }
    }
})

/*
'Register for Activities' section
*/
const regFieldSet = document.getElementById('activities');
const totalField = document.getElementById('activities-cost'); 
let totalCost = 0;
let totalActivities = 0;

regFieldSet.addEventListener('change', (e) => {

    const costAttribute = +(e.target.getAttribute('data-cost')); //+ is used to convert the string to a number. parseInt could be used instead. 
    // console.log(costAttribute);
    // console.log(typeof costAttribute);

    if (e.target.checked === true) {
        totalCost += costAttribute;
        totalActivities += 1;
    }   else {
        totalCost -= costAttribute;
        totalActivities -= 1;
    }
    // console.log(totalCost);
    // console.log(e.target.checked);

    totalField.innerHTML = (`Total: $${totalCost}`);
})

/*
'Payment info' Section
*/
const paymentMethod = document.getElementById('payment');
const creditCardPayment = document.getElementById('credit-card');
const paypalPayment = document.getElementById('paypal');
const bitcoinPayment = document.getElementById('bitcoin');

paypalPayment.hidden = true;
bitcoinPayment.hidden = true;
paymentMethod.children[1].setAttribute('selected', '');

paymentMethod.addEventListener('change', (e) => {

    const changeTarget = e.target.value; 
    for (let i=1; i<paymentMethod.length; i++) {
        if (changeTarget === paymentMethod.children[i].value) {
            document.getElementById(`${paymentMethod.children[i].value}`).hidden = false;
        } else {
            document.getElementById(`${paymentMethod.children[i].value}`).hidden = true;
        }
    }

})

/*
Form Validation section 
*/
//const nameField = document.getElementById('name');
//const regFieldSet = document.getElementById('activities');
const emailInput = document.getElementById('email');
const creditCardNumInput = document.getElementById('cc-num');
const zipCodeInput = document.getElementById('zip');
const cvvInput = document.getElementById('cvv');
const formElem = document.querySelector('form');

let nameIsValid;

formElem.addEventListener('submit', (e) => {
    //Name validation
    const nameFieldValue = nameField.value;
    nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameFieldValue); //regex from Treehouse Project Warm Up 'Form Input Validation - JS'
    if (nameIsValid === false) {
        e.preventDefault();
    }
    notValidIndication(nameField, nameIsValid);
    
    //Email validation
    const emailValue = emailInput.value;
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue); //regex from Treehouse Project Warm Up 'Form Input Validation - JS'
    if (emailIsValid === false) {
        e.preventDefault();
    }
    notValidIndication(emailInput, emailIsValid);

    //Activities selected validation & error indications
    if (totalActivities === 0) {
        e.preventDefault();
        regFieldSet.classList.add('not-valid');
        regFieldSet.classList.remove('valid');
        regFieldSet.lastElementChild.classList.remove('hint');
    } else {
        regFieldSet.classList.add('valid'); 
        regFieldSet.classList.remove('not-valid');
        regFieldSet.lastElementChild.classList.add('hint');
    }

    //Credit Card validation
    if (paymentMethod.value === 'credit-card') {
    
        //Credit Card number validation
        const creditCardNumValue = creditCardNumInput.value;
        const creditCardNumIsValid = /^[0-9]{13,16}$/.test(creditCardNumValue);
        if (creditCardNumIsValid === false) {
            e.preventDefault();
        }
        notValidIndication(creditCardNumInput, creditCardNumIsValid);

        //Zip code validation
        const zipCodeValue = zipCodeInput.value;
        const zipCodeIsValid = /^[0-9]{5}$/.test(zipCodeValue);
        if (zipCodeIsValid === false) {
            e.preventDefault();
        }
        notValidIndication(zipCodeInput, zipCodeIsValid);

        //CVV validation
        const cvvValue = cvvInput.value;
        const cvvIsValid = /^[0-9]{3}$/.test(cvvValue);
        if (cvvIsValid === false) {
            e.preventDefault();
        }
        notValidIndication(cvvInput, cvvIsValid);
    }

})

/*
Accessibility section 
*/

//Add visual focus indication to 'in focus' activities elements
const activitiesInput = document.querySelectorAll('input[type="checkbox"]');

for (let i=0; i<activitiesInput.length; i++) {
    activitiesInput[i].addEventListener('focus', (e) => {
        activitiesInput[i].parentElement.classList.add('focus');
    })

    activitiesInput[i].addEventListener('blur', (e) => {
        activitiesInput[i].parentElement.classList.remove('focus');
    })
}

//Add form input validation error indications - Function called in 'submit' event listener
const notValidIndication = function (inputName, isValid) {
    if (isValid === false) {
        inputName.parentElement.classList.add('not-valid'); 
        inputName.parentElement.classList.remove('valid');
        inputName.parentElement.lastElementChild.classList.remove('hint');
    } else {
        inputName.parentElement.classList.add('valid'); 
        inputName.parentElement.classList.remove('not-valid');
        inputName.parentElement.lastElementChild.classList.add('hint');
    }
}

/*
Prevent users from registering for conflicting activities
*/
//.getAttribute('data-theme')
//const activitiesInput = document.querySelectorAll('input[type="checkbox"]');
const activitiesDiv = document.getElementById('activities-box');

activitiesDiv.addEventListener('change', (e) => {
    if (e.target.checked === true) {
        for(let i=0; i<activitiesInput.length; i++) {
            if (e.target.getAttribute('name') !== activitiesInput[i].getAttribute('name')) {
                if (e.target.getAttribute('data-day-and-time') === activitiesInput[i].getAttribute('data-day-and-time')) {
                    activitiesInput[i].disabled = true; 
                    activitiesInput[i].parentElement.classList.add('disabled'); 
                }
            }
        }
    } else {
        for(let i=0; i<activitiesInput.length; i++) {
            if (e.target.getAttribute('name') !== activitiesInput[i].getAttribute('name')) {
                if (e.target.getAttribute('data-day-and-time') === activitiesInput[i].getAttribute('data-day-and-time')) {
                    activitiesInput[i].disabled = false; 
                    activitiesInput[i].parentElement.classList.remove('disabled'); 
                }
            }
        } 
    }
})

/*
Real-time error message
*/
//const emailInput = document.getElementById('email');
emailInput.addEventListener('keyup', (e) => {
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(e.target.value); //regex from Treehouse Project Warm Up 'Form Input Validation - JS'
    notValidIndication(emailInput, emailIsValid);
})
