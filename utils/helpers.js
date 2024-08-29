
module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    /*
     ? TODO: Create a custom helper 'format_date' that takes in a timestamp,
     ? adds five years to the date, and formats it as M/D/YYYY
    */
  
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        // ? We add five years to the 'year' value to calculate the end date
        new Date(date).getFullYear() + 5
      }`;
     }
  };