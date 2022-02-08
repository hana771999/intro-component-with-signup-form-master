const form = document.getElementById("form")



form.addEventListener("submit", e =>{
    e.preventDefault();
    
    const first = form["firstname"].value;
    const last = form["lastname"].value;
    const email = form["email"].value;
    const password = form["password"].value;
    
    if(first === ""){
        addErrorTo("firstname" ,"First Name cannot be empty")
        
    }else{
        removeErrorFrom("firstname")
    }
    if(last === ""){
        addErrorTo("lastname" ,"Last Name  cannot be empty")
        
    }else{
        removeErrorFrom("lastname" )
    }
    if(email === ""){
        addErrorTo("email","Email cannot be empty")
        
    }else{
        removeErrorFrom("email")
    }
    // if(isValid(email) === ""){
    //     addErrorTo("email","Looks like this is not an email")
        
    // }else{
    //     removeErrorFrom("email")
    // }
    if(password === ""){
        addErrorTo("password","Password cannot be empty")
        
    }else{
        removeErrorFrom("password")
    }
    // alert(first + last +  email + password)
})

function addErrorTo( field , message){
    const formControl = form[field].parentNode;
    formControl.classList.add("error");

    const small =  formControl.querySelector("small");
        small.innerText = message;
        small.style.opacity = "1";
    const Img =   formControl.querySelector("img")
    Img.style.opacity = "1"

}
function removeErrorFrom(field){
    const formControl = form[field].parentNode;
    formControl.classList.remove("error");
    
    const small = formControl.querySelector("small")
    // small.innerText = message;
    small.style.opacity = "0"
    const Img = formControl.querySelector("img")
    Img.style.opacity = "0";

}
function  isValid(){

}

