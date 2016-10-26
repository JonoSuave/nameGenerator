var boyGenderChecked = document.getElementById('boy').checked;
var girlGenderChecked = document.getElementById("girl").checked;
document.body.style.backgroundColor = 'lightgreen';

function generateName(){
	var lName = document.getElementById("last-name").value;
	var boyArray = ['Jono', 'Cool Breeze','SliceyJ','Rodrigo','Spinnaker','Tuilolo','Blake','Leonard','Yahoo','Woohoo'];
	var girlArray = ['Katie','Sarah','Tasha','Kirstin','JQuellin','Lucy','Your Momma','Sugar','Yup','Jammima'];
	var firstRandomNumber = Math.floor(Math.random()*10);
	var secondRandomNumber = Math.floor(Math.random()*9);
	var boyGenderChecked = document.getElementById('boy').checked;
	var girlGenderChecked = document.getElementById("girl").checked;
	var firstName;
	var middleName;
	if (!lName){
		alert("Where is your family's honor?");
		return;
	}
	if (boyGenderChecked){
		firstName = boyArray[firstRandomNumber];
		var index = boyArray.indexOf(firstName);
		boyArray.splice(index,1);
		middleName = boyArray[secondRandomNumber];
	}
	else if(girlGenderChecked){
		firstName = girlArray[firstRandomNumber];
		middleName = girlArray[secondRandomNumber];
	}
	else{
		alert("Please specify gender");
		return;
	}
	var fullName = document.getElementById("baby-name");
	fullName.innerText = firstName + " " + middleName + " " + lName;
}

function genderColor(){
var boyGenderChecked = document.getElementById('boy').checked;
var girlGenderChecked = document.getElementById("girl").checked;
	if(boyGenderChecked){
	document.body.style.backgroundColor= "#d6e1f0";
	}
	else if(girlGenderChecked){
	document.body.style.backgroundColor= 'lightyellow';
	}
document.getElementById("baby-name").innerText = " ";
// Each time a radio button is clicked the baby name is cleared
}