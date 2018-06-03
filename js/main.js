document.getElementById("loginBtn").addEventListener("click",()=>{
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if(username && password){
        fetch("https://maps.googleapis.com/maps/api/geocode/json?address=KMITL")
            .then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })

    } else {
        alert("Username or Password is Empty!")
    }
})