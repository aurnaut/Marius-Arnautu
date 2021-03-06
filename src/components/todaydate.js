import React from "react";

const TodayDate = () => {

  const getWeekDay = (date) => {
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = date.getDay();

    return weekDays[day];
  }

  const getMonthName = (date) => {
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = date.getMonth(); 

    return monthNames[month];
  }

  let currentDate = new Date();
  let namedDay = getWeekDay(currentDate);
  let numberedDay = currentDate.getDate();
  let namedMonth = getMonthName(currentDate);
  let year = currentDate.getFullYear();

  return (
    <span className="todays-date">
      {namedDay}, {numberedDay} {namedMonth} {year}
    </span>
  )
}

export default TodayDate;