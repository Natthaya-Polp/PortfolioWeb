window.onload = pageLoad;

function pageLoad()
{
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() 
{
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย

    var password = document.forms["myForm"]["password"];
    var rePassword = document.forms["myForm"]["rePassword"];

    if (password.value != rePassword.value)
    {
        document.getElementById("errormsg").innerHTML = "Password don't match!";
        return false;
    }
}