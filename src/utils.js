export const DateBuilder = (d) =>{
    let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let Months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let day = days[d.getDay()];
    let Month = Months[d.getMonth()];
    let fecha = new Date()
    let day2 = fecha.getDate();
    let hours = fecha.getHours();
    let minutes = fecha.getMinutes();
    let Year = fecha.getFullYear();
    
    if(minutes < 10){
        minutes = "0" + minutes;
    }

    return `${day}, ${Month} ${day2}, ${Year} at ${hours}:${minutes}`
}

export const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const ArrayDays = []
export const ArrayYears = []

const Days = () =>{

    for (let i = 1; i < 32; i++) {
        ArrayDays.push(i)
    }
}
Days()
const Years = () =>{
    for (let i = 2020; i > 1904; i--) {
        ArrayYears.push(i)
    }
}
Years();
