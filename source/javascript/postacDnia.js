const postacie = [
    { imgUrl: "./source/img/Uniwersum/Postacie/Adonis4.jpg", name: "Adonisx`" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Brom.jpg", name: "Brom" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Bulgerbass.jpg", name: "Bulgerbass" },
    { imgUrl: "./source/img/Uniwersum/Postacie/darien bermid.jpg", name: "darien bermid" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Ebendor.jpg", name: "Ebendor" },
    { imgUrl: "./source/img/Uniwersum/Postacie/er' Garoth.jpg", name: "er' Garoth" },
    { imgUrl: "./source/img/Uniwersum/Postacie/hildebrand.jpg", name: "hildebrand" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Kirithor.jpg", name: "Kirithor" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Logan_Szkaratny_Mag.jpg", name: "Logan - Szkarłatny Mag" },
    { imgUrl: "./source/img/Uniwersum/Postacie/marstofeliusz.jpg", name: "Marstofeliusz" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Malkolm.jpg", name: "Malkolm" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Swen.jpg", name: "Swen" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Zigorok-Enraged2.jpg", name: "Zigorok" },
];

let postac = document.querySelector('.postac img');
let nazwa = document.querySelector('.nazwa');


function postacDnia(year, month, day) {
    let dataToday = new Date(year, month - 1, day );
    let dataYastarday = new Date(year, month - 1, day - 1);

    let minutesToday = Math.floor(dataToday.getTime());
    let minutesYastarday = Math.floor(dataYastarday.getTime());

    let index = minutesToday % postacie.length;
    let index2 = minutesYastarday % postacie.length;

    let newIndex = index;
    for (let i = 0; index == index2; i++) {
        newIndex++;
        postac.src = postacie[newindex].imgUrl;
        nazwa.textContent = postacie[newindex].name;
    }

    postac.src = postacie[index].imgUrl;
    nazwa.textContent = postacie[index].name;
}

let data = new Date();

postacDnia(data.getFullYear(), data.getMonth(), data.getDate());