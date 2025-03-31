function getFormvalue() {
    //Write your code here
	let firstname = document.getElementById("fname").value.trim();
	let lastname = document.getElementById('lname').value.trim();
	alert(`${firstname} ${lastname}`);
}
document.getElementById('form1').addEventListener('submit',getFormvalue);
