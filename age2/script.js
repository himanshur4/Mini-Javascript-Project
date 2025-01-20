let dateInput = document.getElementById("dob");
let today = new Date();
dateInput.max = today.toISOString().split("T")[0];
function calculateAge() {
    let dob = new Date(dateInput.value);
    let bday = dob.getDate();
    let bmonth = dob.getMonth();
    let byear = dob.getFullYear();

    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let y, m, d;
    let dm = function daysInMonth(byear, bmonth) {
        return new Date(byear, bmonth, 0).getDate();
    }
    if (bmonth > month) {
        y = year - byear - 1;
        m = 12 - bmonth + month;
        if (bday > day) {
            m = m - 1;
            d = dm - bday + day;
        } else {
            d = day - bday;
        }
    }
    if (bmonth < month) {
        y = year - byear;
        m = month - bmonth;
        if (bday > day) {
            m = m - 1;
            d = dm - bday + day;
        }
        else {

            d = day - bday;
        }
    } if (bmonth == month) {
        if (bday > day) {
            y = year - byear - 1;
            m = 11;
            d = dm - bday + day;
        } else {
            y = year - byear;
            m = 0;
            d = day - bday;
        }
    }
    document.getElementById("result").innerHTML=`<h2>Your age is:<br> <span>${y} </span>years, <span id="month">${m} </span>months, <span id="days">${d}
                </span>days</h2>`;
}