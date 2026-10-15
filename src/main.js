import '../style/style.scss';
import './components/theme.js';
import './components/chat.js';
import './components/vocabulary.js';
import './components/homework.js';

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

// import {gsap} from "gsap";
//
// window.addEventListener('DOMContentLoaded', () => {
//     gsap.from('.dashboard__header', {
//         opacity: 0,
//         y: -30,
//         duration: 0.8,
//         ease: 'power2.out'
//     });
//
//     gsap.from('.dashboard__card', {
//         opacity: 0,
//         y: 40,
//         stagger: 0.2,
//         duration: 0.8,
//         ease: 'elastic.out(1, 0.75)',
//         delay: 0.3
//     });
//
//     gsap.from('.dashboard__vocab', {
//         opacity: 0,
//         scale: 0.95,
//         duration: 0.8,
//         ease: 'power1.out',
//         delay: 0.8
//     });
//
//     const todoItems = document.querySelectorAll('.homework__item');
//
//     todoItems.forEach(item => {
//         const checkbox = item.querySelector('.homework__checkbox');
//         const customCheck = item.querySelector('.homework__custom-checkbox');
//         const taskTitle = item.querySelector('.homework__task-title');
//
//         checkbox.addEventListener('change', () => {
//             if (checkbox.checked) {
//                 gsap.to(item, {
//                     x: 6,
//                     duration: 0.2,
//                     yoyo: true,
//                     repeat: 1,
//                     ease: 'power2.inOut'
//                 });
//
//                 gsap.fromTo(customCheck,
//                     { scale: 0.8 },
//                     { scale: 1.1, duration: 0.2, ease: 'power1.out' }
//                     )
//             } else {
//                 gsap.to(item, { x: 0, duration: 0.2, ease: 'power1.out' })
//             }
//         })
//     })
// })





