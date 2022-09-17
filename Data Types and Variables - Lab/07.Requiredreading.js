solve = (pageCount, pagesPerHour, daysCount) => {

    let hoursTotalReading = pageCount / pagesPerHour;
    let needetHourProDay = hoursTotalReading / daysCount;
    console.log(needetHourProDay);
}

solve(212, 20, 2)