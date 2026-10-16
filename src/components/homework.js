const options = document.querySelectorAll('.homework__answer-option');
options.forEach(option => {
    const radio = option.querySelector('input[type="radio"]');
    const radioValue = radio.value;

    radio.addEventListener('change', () => {
        options.forEach(optionItem => optionItem.classList.remove('success', 'error'));

        if (radioValue === 'camping') {
            option.classList.add('success');
        } else option.classList.add('error');
    })

})
