export const getCurrentDateTime = () => {
    const months = [
        'янв',
        'фев',
        'март',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'оки',
        'ноя',
        'дек',
    ];

    const weekdays = [
        'воскресение',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
    ];


    const date = new Date();

    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = weekdays[date.getDay()];
    
    const weeeeeekday = date.getDay();
    console.log('weeeeeekday: ', weeeeeekday);

    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (minutes < 10) {
        hours = `0${minutes}`;
    }

    console.log(dayOfWeek)

    return {dayOfMonth, month, year,  hours, minutes, dayOfWeek};
};