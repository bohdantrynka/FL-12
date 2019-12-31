const isLeapYear = min => {
    min = parseInt(min);
    const fullDays = Math.floor(min / 1440);
    const fullHours = Math.floor((min - fullDays * 1440) / 60);
    const minutes = min - (fullHours * 60) - (fullDays * 1440);
    return `${fullDays} day(s) ${fullHours} hour(s) ${minutes} minute(s).`;
}
isLeapYear('2020-01-15');