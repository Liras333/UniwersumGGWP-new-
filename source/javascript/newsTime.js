let dates = document.querySelectorAll(".data");
let today = new Date();



dates.forEach((date) => {
    let arrDate = date.textContent.split(".");
    let dataObj = new Date(arrDate[2],arrDate[1] - 1, arrDate[0]);
    let roznica = today.getTime() - dataObj.getTime();

    
    date.innerHTML += "<i> ~ " + Math.trunc(roznica / (24*60*60*1000)) + " dni temu</i>";
})

console.log(dates)
