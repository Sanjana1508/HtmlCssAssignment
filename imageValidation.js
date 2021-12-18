function validateAddImage(){
    var url=document.forms["addImageForm"]["addUrl"].value;
    var name=document.forms["addImageForm"]["addName"].value;
    var info=document.forms["addImageForm"]["addInfo"].value;
    var date=document.forms["addImageForm"]["addDate"].value;
    var urlRegex = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+
    '(\\#[-a-z\\d_]*)?$','i'); 
   var dateRegex = /(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]201[4-9]|20[2-9][0-9]/;
    var urlError=document.getElementById("urlAddError");
    var nameError=document.getElementById("nameAddError");
    var infoError=document.getElementById("infoAddError");
    var dateError=document.getElementById("dateAddError");
    urlError.innerHTML="";
    nameError.innerHTML="";
    infoError.innerHTML="";
    dateError.innerHTML="";
    var isError=false;
    if(url==="" || url===null){
        urlError.innerHTML="URL is required";
        isError=true;
    }
    else if(!url.match(urlRegex)){
        urlError.innerHTML="Enter valid image URL";
        isError=true;
    }
    if(name==="" || name===null){
        nameError.innerHTML="Name is required";
        isError=true;
    }
    if(info==="" || info===null){
        infoError.innerHTML="Information is required";
        isError=true;
    }
    if(!date.match(dateRegex)){
        dateError.innerHTML="Enter valid date";
        isError=true;
    }
    else if(isFutureDate(date)){
        dateError.innerHTML="Entered date is a future date";
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
function isFutureDate(enteredDate){
    var today = new Date(),
    enteredDate = enteredDate.split("/")[0].split("-");
    var date=new Date();
    date.setDate(enteredDate[2]);
    date.setFullYear(enteredDate[0]);
    date.setMonth(enteredDate[1]-1);

    if(today<date){
        return true;
    }
    else
    return false;
}

