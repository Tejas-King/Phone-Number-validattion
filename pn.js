console.log("hi bro");
let number=document.getElementById("number")
// let btn=document.getElementById("btn")
function phonenumber_validation(){
    if(number==""){
        console.log("invalid number");
    }
else(number==number.length<10){
    console.log("submited");
}
}
document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM content to load
    var submitButton = document.getElementById('btn');

    // Add click event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Perform your custom submission logic here
        alert('Form submitted successfully!');
        // You can add more code here, such as sending data via AJAX or navigating to another page
    });
});