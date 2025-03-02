const postacie = [
    { imgUrl: "./source/img/Uniwersum/Postacie/Adonis4.jpg", name: "Adonis - Prawdziwa Elita" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Brom.jpg", name: "Brom - Opętany" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Bulgerbass.jpg", name: "Bülgerbass - Postrach Shekki" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Cosmos.png", name: "Cosmos - Astralny Smok" },
    { imgUrl: "./source/img/Uniwersum/Postacie/darien bermid.jpg", name: "Darien Bermid - Smokobójca" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Ebendor.jpg", name: "Ebendor - Wulkaniczny Tytan" },
    { imgUrl: "./source/img/Uniwersum/Postacie/er' Garoth.jpg", name: "er' Garoth" },
    { imgUrl: "./source/img/Uniwersum/Postacie/hildebrand.jpg", name: "Hildebrand - Upadły Mag" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Kirithor.jpg", name: "Kirithor Udor - Astralny Poszukiwacz" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Logan_Szkaratny_Mag.jpg", name: "Logan - Szkarłatny Mag" },
    { imgUrl: "./source/img/Uniwersum/Postacie/marstofeliusz.jpg", name: "Marstofeliusz - Władca Nak Sasoom" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Malkolm.jpg", name: "Malkolm - Kreator" },
    { imgUrl: "./source/img/Uniwersum/Postacie/rodrigo.png", name: "Rodrigo - Hochsztapler" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Swen.jpg", name: "Swen - Męczennik" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Xolgothan.png", name: "Xolgothan - Kosmiczny Niszczyciel" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Zigorok-Enraged2.jpg", name: "Zigorok - Pradawny Demon" },
    { imgUrl: "./source/img/Uniwersum/Postacie/Logan_Szkaratny_Mag.jpg", name: "Logan - Szkarłatny Mag" }
    
];
let postac = document.querySelector('.postac img');
let nazwa = document.querySelector('.nazwa');


function postacDnia(year, month, day) {
    let dataToday = new Date(year, month - 1, day);
    let dataYastarday = new Date(year, month - 1, day - 1);

    let minutesToday = Math.floor(dataToday.getTime());
    let minutesYastarday = Math.floor(dataYastarday.getTime());

    let index = minutesToday % postacie.length;
    let index2 = minutesYastarday % postacie.length;


    let newIndex = index;
    for (let i = 0; index == index2; i++) {
        newIndex++;
        postac.src = postacie[newIndex].imgUrl;
        nazwa.textContent = postacie[newIndex].name;
    }

    postac.src = postacie[index].imgUrl;
    nazwa.textContent = postacie[index].name;
}

let data = new Date();

postacDnia(data.getFullYear(), data.getMonth(), data.getDate());