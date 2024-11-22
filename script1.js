function getDate(my_date) {
let tableauDate = my_date.split("/")
let days = tableauDate[0]
let month = tableauDate[1]
let years = tableauDate[2]
isValideDay(days, month)
isValideMonth(month)
isValideYears(years)

console.log(tableauDate)
}

let daysMax = {
    "01": 31,
    "02": 28,
    "03": 31,
    "04": 30,
    "05": 31,
    "06": 30,
    "07": 31,
    "08": 31,
    "09": 30, 
    "10": 31,
    "11": 30,
    "12": 31,
}

function maxDayInMonth(month) {
    numberOfDaysMax = 0
    numberOfDaysMax = daysMax[month]
    numberOfDaysMax
    return numberOfDaysMax
}
console.log(maxDayInMonth(month))

function isValideDay(day, month) {
    let numberOfDaysMax = maxDayInMonth(month)
    if(day <= 0 || day >= numberOfDaysMax) {
        return false
    }  
    return day
}

function isValideMonth(month) {


    if(month <=0 || month >= 12) {
        month = false
    }  
    return month
}

function isValideYears(years) {
    if(years <=999 || years >= 9999) {
        years = false
    }  
    return years
}

console.log(getDate("10/11/2010"))