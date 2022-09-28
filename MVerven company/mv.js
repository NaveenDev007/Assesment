function createAccount(){  
    var n= document.getElementById("first_name").value; 
    var a= document.getElementById("last_name").value; 
    var v= document.getElementById("age").value; 
    var k= document.getElementById("mobileNumber").value; 
    var e= document.getElementById("email").value;  
    var p= document.getElementById("password").value;  
    var cp= document.getElementById("confirm_password").value;  
    //Code for password validation  
            var letters = /^[A-Za-z]+$/;  
            var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
    //other validations required code  
    if(n==''||e==''||p==''||cp==''||a==''||v==Number||k==Number){  
    alert("Enter each details correctly");  
    }  
    else if(!letters.test(n))  
            {  
                alert('Name is incorrect must contain alphabets only');  
            }
    else if(!letters.test(a))  
            {  
                alert('Name is incorrect must contain alphabets only');  
            }  
    else if (!email_val.test(e))  
            {  
                alert('Invalid email format please enter valid email id');  
            }  
    else if(p!=cp)  
    {  
    alert("Passwords not matching");  
    }  
    else if(document.getElementById("password").value.length > 12)  
    {  
    alert("Password maximum length is 12");  
    }  
    else if(document.getElementById("password").value.length < 6)  
    {  
    alert("Password minimum length is 6");  
    }  
    else{  
    alert("Your account has been created successfully...😉");  
    }  
    };
    //password
    const imag=document.querySelector('.PasswordImg');
    imag.addEventListener('click',document.getElementById.toggle('password')); 