const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#btn-check");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

function showMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.textContent = message;
}

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i = i + 1) {
    var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    console.log(amountToBeReturned[i], noOfNotes);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].textContent = numberOfNotes;
  }
} 
function hideMessage() {
  errorMessage.style.display = "none";
}
checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if(billAmount.value===""||cashGiven.value===""){
    showMessage("Both the fields are mandatory");
  }
  else{
     if(Number(billAmount.value) > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
          const amountToBeReturned = cashGiven.value - billAmount.value;
          calculateChange(amountToBeReturned);
        } else {
          showMessage(
            "The cash provided should atleast be equal to the bill amount"
          );
        }
      }
       else {
        showMessage("The bill amount should be greater than 0");
      }
 }});
