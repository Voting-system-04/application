var form = document.getElementById('myform').addEventListener('submit',e =>{
e.preventDefault();
var u_username = document.getElementById('username').value;
var u_password = document.getElementById('vid').value;
var formData = new FormData();
formData.append("username",u_username);
formData.append("u_password",u_password);
fetch('http://voting-back.atwebpages.com/index.php',{
    method:'POST',
    body:formData
}).then(response => response.text()).then(response =>{
    if(JSON.parse( response)[0].message==="success"){
        location.href="showdata.html";
    }
    else{
        console.log("not");
    }

})
.catch(err => console.log(err));
})