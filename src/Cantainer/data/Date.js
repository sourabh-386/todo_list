const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let x=new Date()
let User_day=weekday[x.getDay()];

let User_time=`${x.getHours()} : ${x.getMinutes()}`

let User_date=`${x.getDay()}-${x.getMonth()}-${x.getFullYear()}`

export {User_date,User_time,User_day};