function submit() {
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // finding bdy details
    let Bdydate = document.getElementById("datevalue").value;
    let Bdymonth = document.getElementById("monthvalue").value;
    let Bdyyear = document.getElementById("yearvalue").value;

    // finding currnt date details
    let currntdate = new Date();
    let curDate = currntdate.getDate();
    let curMonth = currntdate.getMonth() + 1;
    let curYear = currntdate.getFullYear();
    console.log(new Date().getMonth())

    if (isNaN(Bdydate)) {
        showmsg("please enter valid date");
        return false;
    }
    if (Bdydate <= 0) {
        showmsg("Date cannot be zero or less than zero")
        return false;
    }
    if (Bdydate == "" || Bdydate > months[Bdymonth - 1]) {
        showmsg("Please provide valid date with respect to month");
        return false;
    }
    if (isNaN(Bdymonth)) {
        showmsg("please enter valid month");
        return false;
    }
    if (Bdymonth <= 0) {
        showmsg("Month cannot be zero or less than zero")
        return false;
    }
    if (Bdymonth == "" || Bdymonth > 12) {
        showmsg("Please provide month value in the range from 1 to 12")
        return false;
    }
    if (isNaN(Bdyyear)) {
        showmsg("please enter valid year");
        return false;
    }
    if (Bdyyear <= 0) {
        showmsg("year cannot be zero or less than zero")
        return false;
    }
    if (Bdyyear > curYear) {
        showmsg("Please provide valid year")
        return false;
    }
    if (Bdyyear == "" || Bdyyear.length < 4) {
        showmsg("Please provide year in the format YYYY");
        return false;
    }


    if (curDate < Bdydate) {
        curDate += months[Bdymonth - 1];
        curMonth--;
        if (curMonth < Bdymonth) {
            curMonth += 12;
            curYear--
        }
    }
    else if (curMonth < Bdymonth) {
        curMonth += 12;
        curYear--;
    }
    curDate -= Bdydate;
    curMonth -= Bdymonth;
    curYear -= Bdyyear;
    showmsg(`Your age is ${curYear} years ${curMonth} months and ${curDate} days`);
}
function showmsg(msg) {
    let msgElem = document.querySelector(".msg")
    msgElem.innerHTML = msg;
}
