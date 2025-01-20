let dateInput = document.getElementById("dob");
let today = new Date();
dateInput.max = today.toISOString().split("T")[0];
function ageCalculate() {
    let dob = new Date(dateInput.value);
    let bday = dob.getDate();
    let bmonth = dob.getMonth()+1;
    let byear = dob.getFullYear();

    let day = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();
    let y, m, d;
   
    y=year-byear;
    if (bmonth <= month) {
       m=month-bmonth;
    }
    else{
        y=y-1;
        m=12-bmonth+month;
    }
    if (bday <= day) {
        d=day-bday;
    }
    else{
        m=m-1;
        d=daysInMonth(byear, bmonth)+day-bday;
    }
    
    document.getElementById("result").innerHTML=`<h2>Your age is:<br> <span>${y} </span>years, <span id="month">${m} </span>months, <span id="days">${d}
                </span>days</h2>`;
}
function daysInMonth(byear, bmonth) {
    return new Date(byear, bmonth, 0).getDate();
}
