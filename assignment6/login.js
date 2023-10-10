window.onload = loginLoad;

const windowSearch = window.location.search;

const urlParams = new URLSearchParams(windowSearch);
const regisUsername = urlParams.get('username');
const regisPassword = urlParams.get('password');

function loginLoad()
{
	var loginInput = document.getElementById("myLogin");
	loginInput.onsubmit = checkLogin;
}

function checkLogin()
{
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	

    var loginUsername = document.forms["myLogin"]["username"];
	var loginPassword = document.forms["myLogin"]["password"];
	
	if(loginUsername.value == regisUsername)
    {
        if(loginPassword.value == regisPassword)
        {
            alert("Login Successful!");
		    return true;
        }
        else
        {
            alert("Password is not correct. Please try again.");
		    return false;
        }
    }
    else
    {
        alert("Unknown username. Please try again.");
		return false;
    }
}

			