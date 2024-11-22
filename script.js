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

function isValideDay(day, month) {
    let numberOfDaysMax = maxDayInMonth(month)
    if(day <= 0 || day >= numberOfDaysMax) {
        return false
    }
    return day  
}

function isValideMonth(month) {
    if(month <=0 || month >= 12) {
        return false
    }
    return month  
}

function isValideYears(years) {
    if(years <=999 || years >= 9999) {
        return false
    }
    return years  
}

function getDayFromDate(my_date,month) {
    let tableauDate = my_date.split("/")
    let day = tableauDate[0]
    isValideDay(day,month)
    return day   
}

function getMonthFromDate(my_date) {
    let tableauDate = my_date.split("/")
    let month = tableauDate[1]
    isValideMonth(month)
    return month
}

function getYearsFromDate(my_date) {
    let tableauDate = my_date.split("/")
    let years = tableauDate[2]
    isValideYears(years)
    return years
}

function maxDayInMonth(month) {
    numberOfDaysMax = 0
    numberOfDaysMax = daysMax[month]
    return numberOfDaysMax
}

function isValideDate(date) {
    let month = getMonthFromDate(date)
    console.log(month)
    let day = getDayFromDate(date,month)
    console.log(day)
    let years = getYearsFromDate(date)
    console.log(years)
}
isValideDate("11/23/2024")

// Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui indique 
// si la date est un palindrome. Si la date est invalide, retourner false.
// Exemple de date palindrome: 11/02/2011. Les caractères / ne sont pas pris en compte.

// function isPalindrome(my_date) {
// // separe tableaudate avec les espaces
// isValideDate(my_date)
// let tableauDate = my_date.split("")
// // console.log(tableauDate)
// const reversed = tableauDate.reverse()
// // console.log(reversed)

// // // si tableaudate[0]===tableaudate[] return vrai
// // // si years[1]===month[0] 
//     if(tableauDate === reversed) {
//         console.log("c'est une date palindrome")
//     }else{
//         console.log("ce n'est pas une date palindrome")
//     }

// // // si date palindrome, renvoie vrai
// // // sinon renvoie faux
// }
// isPalindrome("22/11/2024")