const imgURL = [
    "./source/img/Uniwersum/Postacie/Adonis4.jpg",
    "./source/img/Uniwersum/Postacie/Brom.jpg",
    "./source/img/Uniwersum/Postacie/Bulgerbass.jpg",
    "./source/img/Uniwersum/Postacie/dariel bermid.jpg",
    "./source/img/Uniwersum/Postacie/Ebendor.jpg",
    "./source/img/Uniwersum/Postacie/er' Garoth.jpg",
    "./source/img/Uniwersum/Postacie/hildebrand.jpg",
    "./source/img/Uniwersum/Postacie/Kirithor.jpg",
    "./source/img/Uniwersum/Postacie/Logan_Szkaratny_Mag.jpg",
    "./source/img/Uniwersum/Postacie/marstofeliusz.jpg",
    "./source/img/Uniwersum/Postacie/Nasir_Yadav2.jpg",
    "./source/img/Uniwersum/Postacie/Swen.jpg",
    "./source/img/Uniwersum/Postacie/Zigorok-Enraged2.jpg"
]

const names = [
    "Adonis4",
    "Brom",
    "Bulgerbass",
    "darien bermid",
    "Ebendor",
    "er' Garoth",
    "hildebrand",
    "Kirithor",
    "Logan - Szkarłatny Mag",
    "Malkolm",
    "Marstofeliusz",
    "Swen",
    "Zigorok"
]

let postac = document.querySelector('.postac img');
let nazwa = document.querySelector('.nazwa');


function postacDnia(year, month, day) {
    let dataToday = new Date(year, month - 1, day );
    let dataYastarday = new Date(year, month - 1, day - 1);

    let minutesToday = Math.floor(dataToday.getTime());
    let minutesYastarday = Math.floor(dataYastarday.getTime());

    let index = minutesToday % names.length ;
    let index2 = minutesYastarday % names.length ;

    let newIndex = index;
    for(let i = 0; index == index2; i++){
        newIndex++;
        postac.src = imgURL[newindex];
        nazwa.textContent = names[newindex];
    }

    postac.src = imgURL[index];
    nazwa.textContent = names[index];
}

let data = new Date();

postacDnia(data.getFullYear(), data.getMonth(), data.getDate())


