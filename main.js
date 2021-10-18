function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  function validation(){
    console.log("validation");
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let purpose = document.getElementById("purpose").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.style.padding="10px";
    if(name.length<4)
    {
        text = "Please Enter Valid Name";
        errorMessage.innerHTML = text;
        return false;
    }
    if(isNaN(phone)||phone.length!=10)
    {
        text = "Please Enter valid Phone Number"
        errorMessage.innerHTML = text;
        return false;
    }
    if(email.indexOf('@') == -1)
    {
        text = "Please Enter Valid Email";
        errorMessage.innerHTML = text;
        return false;
    }
    if(purpose.length == 0)
    {
        text = "Please Enter a purpose";
        errorMessage.innerHTML = text;
        return false;
    }
    if(message.length == 0)
    {
        text = "Please Enter the message to be sent";
        errorMessage.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully");
    return true;
}