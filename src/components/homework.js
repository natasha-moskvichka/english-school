
const options = document.querySelectorAll('.homework__answer-option');
console.log(options);
options.forEach(option => {
    const radio = option.querySelector('input[type="radio"]');
    const radioValue = radio.value;
    console.log(radioValue)
})

