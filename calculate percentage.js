const getPercentage = (val, total) => {
    let percentage = 0;
    percentage = Math.round((val / total) * 100);
    return percentage;
};