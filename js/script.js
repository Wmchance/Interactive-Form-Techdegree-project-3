//'Name' section
const nameField = document.getElementById('name');
nameField.focus();

//'Job role' section
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

//'T-shirt info' section 
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
