const calendar = document.getElementById('calendar');

const drawBlankCalendar = () => {
    for( let i = 0; i < 35; i++) {
        const day = document.createElement('div');
        day.classList.add('day'); //adding the class to the element

        const dayText = document.createElement('p');
        dayText.classList.add('day-text');


        const dayNumber = document.createElement('p');
        dayNumber.classList.add('day-number');

        const eventName = document.createElement('p');
        eventName.classList.add('event-name');

        day.appendChild(dayText);
        day.appendChild(dayNumber);
        day.appendChild(eventName);

        calendar.appendChild(day);

    }
};
