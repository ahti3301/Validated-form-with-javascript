const inputs = document.querySelectorAll("input");
const patterns = {
    fname: /^[a-z]{4,8}$/i,
    lname: /^[a-z]{4,8}$/i,
    email: /^([a-z\d-_\.]+)@([a-z\d\.-_]+)\.([a-z]{3})(\.[a-z]{3})?$/,
    password: /^[a-z\d@-_]{8,20}$/i,
    phone: /^[\d]{11}$/,
    code: /^[\d]{5}$/,
     
 }
const validate = (field,regex)=>{
    if (regex.test(field.value)){
        field.className = "valid"
    }else{
        field.className = "invalid"
    }

}


inputs.forEach((input)=>{
    input.addEventListener("keyup",(e)=>{
        validate(e.target,patterns[e.target.name])
       
        
    })
})
