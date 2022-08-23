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
