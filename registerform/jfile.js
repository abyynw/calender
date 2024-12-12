function validate() {
    const uname = document.getElementById('unameid').value;
    const email = document.getElementById('emailid').value;
    const pass = document.getElementById('passid').value;
    const cpass = document.getElementById('cpassid').value;
    const mobile = document.getElementById('mobid').value;

	const emailexp=/[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{3,3}$/;
	const mobilexp=/^\d{10}$/;
	
    if (uname === "" || email === "" || pass === "" || cpass === "" || mobile === "") {
        alert("All fields are mandatory");
        return false;
    } 
	else if( !emailexp.test(email))
	{
		alert("Email format is invalid...");
		return false;
	}
	else if(pass.length<8)
	{
		alert("Password should be atleast 8 characters long....");
		return false;
	}
	else if(pass != cpass)
	{
		alert("Passwords are not matching....");
		return false;
	}
	else if(!mobilexp.test(mobile))
	{
		alert("Mobile number format is invalid...");
		return false;
	}
	else {
        alert("Registration successful.");
        return true;
    }
}
 