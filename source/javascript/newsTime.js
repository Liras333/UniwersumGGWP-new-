const dates = document.querySelectorAll(".data");
let today = new Date();

dates.forEach((date) => {
    const arrDate = date.textContent.split(".");
    let dataObj = new Date(arrDate[2],arrDate[1] - 1, arrDate[0]);
    let roznica = today.getTime() - dataObj.getTime();
    
    let daysAgo = Math.trunc(roznica / (24*60*60*1000))

    switch(daysAgo) {
        case 0:
            date.innerHTML += "<i> ~ dzisiaj</i>";
            break;
        case 1: 
            date.innerHTML += "<i> ~ wczoraj</i>";
            break;
        default:
            date.innerHTML += "<i> ~ " + daysAgo + " dni temu</i>";
    }
})

//