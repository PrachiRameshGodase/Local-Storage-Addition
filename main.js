const item=document.getElementById("item");

item.addEventListener('submit',onsubmit);
// making function
function onsubmit(e){
        e.preventDefault();
        const name=e.target.username.value;
        const email=e.target.emailId.value;

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
    


const myObj={
    name,
    email
};

let x=JSON.stringify(myObj);
localStorage.setItem("userDet",x);
}
