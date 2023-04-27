export const convertDateToString = (date: string) => {
    const newDate = new Date(date);

    const formattedDate = newDate.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    return formattedDate;
}