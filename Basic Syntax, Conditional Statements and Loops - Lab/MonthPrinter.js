function monthPrinter(index) {
    index = Number(index);
    index = index - 1;
    let months = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];

    return months[index] === undefined ? "Error!" : months[index];
}