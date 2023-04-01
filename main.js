const item=document.getElementById("item");
const usersList=document.getElementById("users");
const username=document.getElementById("item1");
const emailId=document.getElementById("item2");

item.addEventListener('submit',onsubmit);
// making function
function onsubmit(e){
        e.preventDefault();
        const name=e.target.username.value;
        const email=e.target.emailId.value;
//add in local storage
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
    

//create new variable for creating string like stru
        const myObj={
            name,
            email
        };
        let x=JSON.stringify(myObj);
        localStorage.setItem("userDet",x);

//create new element store data
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(`${username.value} : ${emailId.value}`));
        usersList.appendChild(li);
        
//create fields
        username.value="";
        emailId.value="";


    }
