export function getDateDetails() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDate = new Date();
    const day = daysOfWeek[currentDate.getDay()];
    const date = currentDate.getDate();
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return { day, date, month, year };
}
