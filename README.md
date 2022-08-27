# Interactive-Form-Techdegree-project-3

<strong>Real-time error messaging has been added to the Email input field.</strong> <br>
-A 'Keyup' event listner has been used to check the current input against the regex validation. <br>
-If the current input is not vaild, the 'notValidIndication' function is called, and the error message and indicators are shown.

<strong>Real-time error messaging and Conditional error messaging have been added to the Credit Card Number input field.</strong> <br>
-A 'Keyup' event listner has been used to check the current input against the regex validation. <br>
-If the current input does not contain the correct amount of numbers, the 'notValidIndication' function is called, and the error message and indicators are shown. <br>
-If the current input contains letters, the innerText of the error message is updated to read 'Credit card number cannot contain letters,' the 'notValidIndication' function is called, and the updated error message and indicators are shown. Once all letters have been removed, the error message is reverted to the original message of 'Credit card number must be between 13 - 16 digits' <br>

<strong>Real-time error messaging and Conditional error messaging have been added to the Zip Code input field.</strong> <br>
-A 'Keyup' event listner has been used to check the current input against the regex validation. <br>
-If the current input does not contain the correct amount of numbers, the 'notValidIndication' function is called, and the error message and indicators are shown. <br>
-If the current input contains letters, the innerText of the error message is updated to read 'Zip code cannot contain letters,' the 'notValidIndication' function is called, and the updated error message and indicators are shown. Once all letters have been removed, the error message is reverted to the original message of 'Zip Code must be 5 digits' <br>

<strong>Real-time error messaging and Conditional error messaging have been added to the CVV input field.</strong> <br>
-A 'Keyup' event listner has been used to check the current input against the regex validation. <br>
-If the current input does not contain the correct amount of numbers, the 'notValidIndication' function is called, and the error message and indicators are shown. <br>
-If the current input contains letters, the innerText of the error message is updated to read 'CVV cannot contain letters,' the 'notValidIndication' function is called, and the updated error message and indicators are shown. Once all letters have been removed, the error message is reverted to the original message of 'CVV must be 3 digits' <br>
