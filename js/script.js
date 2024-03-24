let slider = document.getElementById('slider');
let button = document.getElementById('button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$-_";
let novaSenha = "";

sizePassword.innerHTML = slider.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for (i = 0,n = charset.length; i < slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));

    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
    document.getElementById('sucess').innerHTML = "Senha copiada com sucesso";
    
}
