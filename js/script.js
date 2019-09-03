//Interactive functions for about icon
function changeImage()
{
	document.images["aboutButton"].src= "img/aboutHover.jpg";
	return true;
}
function changeImageBack()
{
 	document.images["aboutButton"].src = "img/about.jpg";
 	return true;
}
function handleMDown()
{
 	document.images["aboutButton"].src = "img/aboutClick.jpg";
 	return true;
}
function handleMUp()
{
 	changeImage();
 	return true;
}

//Interactive functions for project icon
function changeImage2()
{
	document.images["projectButton"].src= "img/projectHover.jpg";
	return true;
}
function changeImageBack2()
{
	document.images["projectButton"].src= "img/project.jpg";
 	return true;
}
function handleMDown2()
{
 	document.images["projectButton"].src = "img/projectClick.jpg";
 	return true;
}
function handleMUp2()
{
 	changeImage2();
 	return true;
}

//Interactive functions for contact icon
function changeImage3()
{
	document.images["contactButton"].src= "img/contactHover.jpg";
	return true;
}
function changeImageBack3()
{
	document.images["contactButton"].src= "img/contact.jpg";
 	return true;
}
function handleMDown3()
{
 	document.images["contactButton"].src = "img/contactClick.jpg";
 	return true;
}
function handleMUp3()
{
 	changeImage3();
 	return true;
}

function sendFunction() {
	//Set a variable for the message box.
	var messageInputvalue = document.getElementById("messageInput").value;
	//If the message box is not blank, then call following function.
if (messageInputvalue != "") {
	//Send a message to user that the message has been sent.
	alert("Thank you for sending your message to us. We will reply to you as soon as possible!");
	} else {
	alert("Please enter your message!");//If message box is empty, send this notice to user.
	}
}

