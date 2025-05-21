const btn = document.getElementById("btn");
const bdy = document.getElementById("birthday");
const result =document.querySelector(".result");

function calculateAge() {
    const birthdayValue = bdy.value;
    if (birthdayValue=== "") {
        alert("please enter your birthday");
    }
    else {
        const age = getAge(birthdayValue);
        result.innerText = `Your Age is ${age} ${age >1 ? "years": "year"} old`;

    }
}
function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(
        month < 0 ||
        (month ===0 && currentDate.getDate() < birthdayDate.getDate())

    ) {
        age--;
    }
    return age;
}

btn.addEventListener("click",calculateAge);