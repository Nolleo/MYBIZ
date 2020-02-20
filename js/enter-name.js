var customerName = prompt("Hello fellow ice cream lover! Please enter your name", "<enter YOUR NAME here>");
confirm("Are you ready for fresh COOL ice cream?"); 
if (customerName!= null) {

    document.getElementById("welcome").innerHTML =

    "Hello " + customerName + "! How are you today?";

}

document.write(customerName);