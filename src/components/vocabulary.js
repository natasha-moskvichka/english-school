const vocabTrainerBtnPrev = document.getElementById('vocabPrev');
const vocabTrainerBtnNext = document.getElementById('vocabNext');
const flipCardFront = document.querySelector('.flip-card__front');
const flipCardBack = document.querySelector('.flip-card__back');
const flipCard = document.querySelector('.flip-card');
const plug = flipCardFront.querySelector('span');
console.log(plug)

const words = [
    { en: 'To delay', ru: 'задерживать (рейс)' },
    { en: 'In advance', ru: 'заранее, заблаговременно' },
    { en: 'Reasonable', ru: 'разумный, приемлемый' },
    { en: 'Anxiety', ru: 'тревога, беспокойство' }
];

let currentIndex = 0;

function updateCard() {
    if (words.length === 0) {
        plug.textContent = 'No words for today';

    } else if (words.length > 1) {
        vocabTrainerBtnPrev.classList.remove('disabled');
        vocabTrainerBtnNext.classList.remove('disabled');
        const currentWord = words[currentIndex];
        flipCardFront.textContent = currentWord.en;
        flipCardBack.textContent = currentWord.ru;
        flipCard.classList.remove('is-flipped');
    }
}

vocabTrainerBtnNext.addEventListener('click', () => {
    currentIndex += 1;
    if (currentIndex === words.length) {
        currentIndex = 0;
    }
    updateCard();
});

vocabTrainerBtnPrev.addEventListener('click', () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = words.length - 1;
    }
    updateCard();
});

flipCard.addEventListener('click', () => {
    flipCard.classList.toggle('is-flipped');
})

updateCard();

export {updateCard};
