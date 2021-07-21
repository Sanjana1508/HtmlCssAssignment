function validate(){
    var name=document.forms["contactForm"]["name"].value;
    var email=document.forms["contactForm"]["email"].value;
    var phone=document.forms["contactForm"]["phone"].value;
    var textarea=document.forms["contactForm"]["feedback"].value;
    var emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneRegex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    var nameError=document.getElementById("nameError");
    var emailError=document.getElementById("emailError");
    var phoneError=document.getElementById("phoneError");
    var textareaError = document.getElementById("textareaError");
    nameError.innerHTML="";
    emailError.innerHTML="";
    phoneError.innerHTML="";
    textareaError.innerHTML="";

    var isError=false;
    if(name==="" || name===null){
     nameError.innerHTML="Name is required";
     isError=true;
    }
    if(email==="" || email===null){
        emailError.innerHTML="Email is required"; 
       isError=true;
    }
    else if(!email.match(emailRegex)){
       emailError.innerHTML="Please enter email in correct format"; 
       isError=true;
       
    }
    if(phone==="" || phone===null){
        phoneError.innerHTML="Phone Number is Required";
        isError=true;
    }
   else if(!phone.match(phoneRegex)){
        phoneError.innerHTML="Please enter phone number in correct format";
        isError=true;
    }
    if(textarea==="" || textarea===null){
        textareaError.innerHTML="Feedback is required";
        isError=true;
    }
    if(isError){
        return false;
    }
    else{
        nameError.innerHTML="";
        emailError.innerHTML="";
        phoneError.innerHTML="";
        textareaError.innerHTML="";
    }
}
