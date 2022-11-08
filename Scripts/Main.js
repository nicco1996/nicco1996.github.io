const myImage = document.querySelector("img");

myImage.onclick = () => {			//this = is assigning the function to myImage.onclick
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "Images/gallina.jpg"){
		myImage.setAttribute("src", "Images/gallina2.png");
	} 
	else {
		myImage.setAttribute("src", "Images/gallina.jpg");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
	const myName = prompt("Please enter your name.");
	if (!myName){
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = `Loving galine is cool, right ${myName} ?`;
	}
}

if (!localStorage.getItem("name")){
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Loving galine is cool, right ${storedName} ?`;
}

myButton.onclick = () => {
	setUserName();
};