const api = "https://randomuser.me/api/"
let userdata = {}

function updateUser(){
    const userimg = document.querySelector("#user-image")
    const userid = document.querySelector("#user-id")
    userimg.src = userdata.picture.large
    userid.textContent = `${userdata.name.first} ${userdata.name.last}`
}
function updateinfo(attr){
    const info = document.querySelector("#info")
    const h3 = document.querySelector("h3")
    const p = document.querySelector("p")
    switch(attr){
        case "age":
        h3.textContent = "Age"
        p.textContent = userdata.dob.age
        break;
        case "email":
        h3.textContent = "Email"
        p.textContent = userdata.email
        break;
        case "phone":
        h3.textContent = "Phone"
        p.textContent = userdata.phone
        break;
    }
    info.style.display = "block"
}
const btn = document.querySelectorAll("button")
btn.forEach(button=>{
    button.addEventListener("click",()=>{
        const attr = button.getAttribute("data-attr")
        updateinfo(attr)
    })
})
const newuser = document.querySelector("#getUser")
newuser.addEventListener("click",()=>{
    fetch(api)
    .then(response => response.json())
    .then(data =>{
        userdata = data.results[0]
        updateUser()
        document.querySelector("#info").style.display = "none"
    })
})
//initialcall
fetch(api)
.then(response => response.json())
.then(data => {
    userdata = data.results[0]
    updateUser()
})