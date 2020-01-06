document.getElementById("signIn").onclick = signIn;
function signIn() {

	var username = document.getElementById("username").value;
	if(username.length == 0){
		document.getElementById("username").style.border = "1px solid red";
		document.getElementById("usernameError").style.display = "inline";
	}

	var password = document.getElementById("password").value;
	if(password.length == 0){
		document.getElementById("password").style.border = "1px solid red";
		document.getElementById("passwordError").style.display = "inline";
	}
	if(password.length > 0 && username.length>0){


		var sendInfo = new Object();
		sendInfo.username = username;
		sendInfo.password = password;
		sendInfo.platform = "android",
		sendInfo.device_token = "android_device_token";

		var sendInfoSTR = JSON.stringify(sendInfo);
		console.log("sendInfoSTR : " ,sendInfoSTR);

		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}
		else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = respond;
		xmlhttp.open("POST", "http://polls.apiblueprint.org/user/login", true);
		xmlhttp.send(sendInfoSTR);

		function respond() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

				if(JSON.parse(xmlhttp.response) == 200){
					console.log("REGISTER SUCCESSFULLY");
				}
			}
			else{
				console.log("REGISTER FALID");
				document.getElementById("username").value = "";
				document.getElementById("password").value = "";
				document.getElementById("signInError").style.display = "inline";
			}

		}
			
	}
}

document.getElementById("username").onkeydown= function(){
	document.getElementById("username").style.border = "1px solid #e2e0e0";
	document.getElementById("usernameError").style.display = "none";
}
document.getElementById("password").onkeydown= function(){
	document.getElementById("password").style.border = "1px solid #e2e0e0";
	document.getElementById("passwordError").style.display = "none";
}


