import { reduceBalance } from "./balance.js";

const mockLessons = [
    {
        id: 1,
        subject: "Starter: First Steps in English",
        startDate: "2026-10-10T14:00:00",
        durationMinutes: 60
    },
    {
        id: 2,
        subject: "Grammar: Present Perfect vs Past Simple",
        startDate: "2026-10-13T12:00:00",
        durationMinutes: 90
    },
    {
        id: 3,
        subject: "Vocabulary: Travel and Food",
        startDate: "2026-10-16T18:30:00",
        durationMinutes: 60
    },
    {
        id: 4,
        subject: "Speaking Club: Career & Success",
        startDate: "2026-10-17T11:00:00",
        durationMinutes: 90
    },
    {
        id: 5,
        subject: "Phonetics: Perfect British Accent",
        startDate: "2026-10-19T10:00:00",
        durationMinutes: 60
    },
    {
        id: 6,
        subject: "Test",
        startDate: "2026-10-16T16:00:00",
        durationMinutes: 60
    }
];

const pastLessonsContainer = document.getElementById('pastLessonsContainer');
const upcomingLessonsContainer = document.getElementById('upcomingLessonsContainer');

const currentTime = new Date().getTime();

mockLessons.forEach(lesson => {
    const lessonDate = new Date(lesson.startDate);
    const startTime = lesson.startDate;
    const startTimeMs = new Date(startTime).getTime();
    const durationMs = lesson.durationMinutes * 60 * 1000;

    const endTimeMs = startTimeMs + durationMs;

    const card = document.createElement('div');
    card.classList.add('schedule__item');

    const cardDateInfo = document.createElement('div');
    cardDateInfo.classList.add('schedule__date');

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('schedule__info');

    const cardDate = document.createElement('div');
    cardDate.classList.add('schedule__day');

    const cardMonth = document.createElement('div');
    cardMonth.classList.add('schedule__month');
    cardMonth.textContent = lessonDate.toLocaleString('en-US', {month: 'short'});

    const cardDay = document.createElement('div');
    cardDay.classList.add('schedule__day');
    cardDay.textContent = lessonDate.getDate();

    const text = document.createElement('p');
    text.classList.add('schedule__subject');
    text.textContent = lesson.subject;

    cardDateInfo.appendChild(cardDay);
    cardDateInfo.appendChild(cardMonth);
    card.appendChild(cardDateInfo);
    cardInfo.appendChild(text);
    card.appendChild(cardInfo);

    if (currentTime < endTimeMs) {
        card.classList.add('schedule__item--next');
        upcomingLessonsContainer.appendChild(card);

        if (currentTime >= startTimeMs) {
            const button = document.createElement('a');
            button.classList.add('schedule__action-btn', 'schedule__action-btn--blue');
            button.textContent = 'Join';
            button.href = 'https://natasha-moskvichka.github.io/english-school/';
            button.target = '_blank';
            card.appendChild(button);
            reduceBalance();
        }

        else {
            const button = document.createElement('button');
            button.classList.add('schedule__action-btn');
            button.textContent = 'Soon';
            button.disabled = true;
            card.appendChild(button);
        }
    }
    else if (currentTime >= endTimeMs) {
        const button = document.createElement('button');
        button.classList.add('schedule__action-btn');
        card.classList.add('schedule__item--past');
        button.classList.add('schedule__action-btn--disabled');
        button.textContent = 'Done';
        button.disabled = true;
        card.appendChild(button);
        pastLessonsContainer.appendChild(card);
        reduceBalance();
    }

})


