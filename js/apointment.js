const form = document.getElementById("appointment");
const name = document.getElementById("name");
const email = document.getElementById("email");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  display();
});

function display(){
  alert('appointment saved')
}
function validateInputs() {
  const nameval = name.value;
  const emailval = email.value;
  const sel = document.getElementById('selected').value;
  
  
  
 

  if (nameval === "") {
    alert("error: Name is empty");
    e.preventDefault();
  }

  if (emailval === "") {
    alert("error: Email adress is empty");
    e.preventDefault();
  }
  
  if (sel == '1') {
    alert('Select Appointment Type');
    e.preventDefault();
    return false;
  }
  
  



}
