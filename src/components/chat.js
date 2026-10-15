const chatSendBtn = document.querySelector('.teacher-chat__send-btn');

function createChat () {
    const chatWindow = document.querySelector('.teacher-chat__window');
    const chatInput = document.querySelector('.teacher-chat__input');

        const messageText = chatInput.value.trim();
        const now = new Date();
        const nowHours = now.getHours();
        const nowMinutes = now.getMinutes();
        let timeFormat = 'AM';
        let timesOfDays = nowHours % 12;

        if (timesOfDays >= 12) {
            timeFormat = 'PM';
        }

        if (timesOfDays === 0) timesOfDays = 12;

        const nowHoursString = nowHours.toString().padStart(2, '0');
        const nowMinutesString = nowMinutes.toString().padStart(2, '0');

        if (messageText !== '') {
            const newMessage = document.createElement('div');
            newMessage.classList.add('teacher-chat__msg', 'teacher-chat__msg--student');

            const newMessageText = document.createElement('p');
            newMessageText.classList.add('teacher-chat__text');
            newMessageText.textContent = messageText;

            const newMessageTime = document.createElement('span');
            newMessageTime.classList.add('teacher-chat__time');
            newMessageTime.textContent = `${nowHoursString}:${nowMinutesString} ${timeFormat}`;

            newMessage.appendChild(newMessageText);
            newMessage.appendChild(newMessageTime);
            chatWindow.appendChild(newMessage);

            chatInput.value = '';
        }
}

chatSendBtn.addEventListener('click', () => createChat());

export { createChat };
