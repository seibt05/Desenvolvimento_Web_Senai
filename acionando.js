function validarEmail(email){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function validarCPF(cpf){
    const regexCPF = /^\d{11}$/;
    return regexCPF.test(cpf.replace(/[^\d]/g, ''));
}

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    const emailOuCpf = document.getElementsByName("username")[0].value;

    if(validarEmail(emailOuCpf) || validarCPF(emailOuCpf)){
        const loginValido = true;

        if(loginValido){
            window.location.href = "home.html";
        }
    }else{
        alert("E-mail ou CPF inválidos.")
    }
})
