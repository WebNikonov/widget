
const addZero = (n) => n<10 ? `0${n}` : n;

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

    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());

    console.log(hours, ":" , minutes);
  

    return {dayOfMonth, month, year,  hours, minutes, dayOfWeek};
};