// alert('test')   //test whether ur connected or not by giving a alert


function validate(){
    let f=false
    //validation f=true,,f=false
    //name field

    let name=$('.name-field').val()
    console.log(name)

    if (name==''||name==undefined){
        $('.name-field-msg').html('name is required!!').
        addClass('text-danger')

    }

    else {
        $('.name-field-msg').html('ok !!').
        removeClass('text-danger').
        addClass('text-success')
        f=f==false?false:true
    }

    //email validation

    let email =$('.email-field').val()
    console.log(email)
    let exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email==''||email==undefined)
    {
        $('.email-field-msg').html('email is required').
        addClass('text-danger')
        f=false
    }

    else if(exp.test(email)==false)
    {
        $('.email-field-msg').html('invcalid email. email must be in corrrect format(example@goo.com').addClass('text-danger')
        f=false

    }

    else{
        $('.email-field-msg').html('okkk').removeClass('text-danger').addClass('text-success')
    }
///password validation

let pass=$('.password-field').val()

let exp1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

if(pass== ''||pass==undefined)
{
    $('.password-field-msg').html('password is required').
    addClass('text-danger')
    f=false
}


else if(exp1.test(pass)==false)
{
    $('.password-field-msg').html('invcalid password it must be in form atleast 1 captal ').addClass('text-danger')
    f=false

}

else{
    $('.password-field-msg').html('okkk').removeClass('text-danger').addClass('text-success')
}



///phone validation

let phone=$('.phone-field').val()

// let phome1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$

if(phone== ''||phone==undefined)
{
    $('.phone-field-msg').html('phone is required').
    addClass('text-danger')
    f=false
}


else if(phone.length==10)
{
    $('.phone-field-msg').html('okkk').removeClass('text-danger').addClass('text-success')

}

else{
    $('.phone-field-msg').html('phone number is in valid itb must be 10 digits').addClass('text-danger')
}


    // f=false
    console.log(f)
    return f
}