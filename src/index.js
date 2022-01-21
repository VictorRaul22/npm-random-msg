const messages=[
    "oscar",
    "Ana",
    "Nicolay",
    "Yesica",
    "Carolina",
    "Diego",
];

const randomMsg=()=>{
    const message=messages[Math.floor(Math.random()*messages.length)];
    console.log(message)
}
module.exports={ randomMsg };