// todo list: add the error message below the textfield, and the styling part
console.log("conneected");
// dom elementns
const model=document.querySelector(".model");
const name=document.querySelector("#surname");
const firstname=document.querySelector("#firstname");
const email=document.querySelector("#email");
const msg=document.querySelector("#subject");
const form=document.querySelector("form");
const phone=document.querySelector("#phone");
const modelButton=document.querySelector(".modelbutton");
const overlay=document.querySelector(".overlay");
const hidden=document.querySelector(".hidden");
const body=document.querySelector("body");
// regular expression
let validEmail=/^[A-Za-z0-9\._\-]+@[$A-Za-z0-9\-]+\.[$A-Za-z0-9\-]+$/
const validName=/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/;
let validPhone=/^[0-9]+$/;
// validate the function
form.setAttribute("novalidate",true);
form.onsubmit=sumbitForm;
// it is better to use onsubmit rather than onclick
// submit the form, you could use press the enter rather than click
// the button
function sumbitForm(event){
    // not refresh the page
    event.preventDefault();
    // if all input pass regex test, then print the console and load 
    // the model
    // let test=inputValid(validName,name);
    // let test1=inputValid(validEmail,email);
    // console.log(test,test1);
    if(inputValid(validName,name)&&inputValid(validEmail,email)&&isEmpty(msg.value)&&inputValid(validName,firstname)&&(inputValid(validPhone,phone)||!isEmpty(phone.value))){
        console.log(
        `name: ${name.value}\n Email: ${email.value}`
        )
        console.log(model);
        model.style.display="block"
        openModel();

    }else{
        console.log("The input is invalid");
    }
    
}
function inputValid(regex,input){
    return regex.test(input.value);
    
}
function isEmpty(input){
    return input.trim().length;
}
modelButton.onclick=function(){
    model.style.display="none";
    closeModel();
}

function openModel(){
    body.classList.add("model-active");
    overlay.classList.remove("hidden");
    model.classList.remove("hidden");
    // document.querySelector(".overlay").style.display="block";
}

function closeModel(){
    body.classList.remove("model-active");
    overlay.classList.add("hidden");
    model.classList.add("hidden");
}



