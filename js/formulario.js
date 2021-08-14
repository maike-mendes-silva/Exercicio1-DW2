function validarCampo() {

    let form = document.forms["formContato"];
    let ret = true;

    let msgErro = document.getElementById("msgErro_nome");
    msgErro.innerHTML = "";
    var nome = new String( form.nomesobrenome.value );

    if(  nome.length < 4){
        msgErro.innerHTML = msgErro.innerHTML + "Preencha o campo nome corretamente!<br>";
        form.nomesobrenome.focus();
        ret = false;
    }

    let msgErro2 = document.getElementById("msgErro_email"); 
    msgErro2.innerHTML = "";

    if (form.email.value.indexOf(".") == -1 ||
        form.email.value.indexOf("@") == -1 ||
        form.email.value.indexOf(".") - form.email.value.indexOf("@") == 1) {
        msgErro2.innerHTML = msgErro2.innerHTML + "Preencha o campo e-mail corretamente! <br>";
        form.email.focus();
        ret = false;
    }

    let msgErro3 = document.getElementById("msgErro_telefone");
    msgErro3.innerHTML = "";

    if( form.telefone.value.trim() == ""){
        msgErro3.innerHTML = msgErro3.innerHTML + "Preencha o campo telefone corretamente! <br>";
        form.email.focus();
        ret = false;
    }

    let msgErro4 = document.getElementById("msgErro_mensagem"); 
    msgErro4.innerHTML = "";

    if( form.mensagem.value.trim() == ""){
        msgErro4.innerHTML = msgErro4.innerHTML + "Preencha o campo mensagem com alguma mensagem!<br>";
        form.email.focus();
        ret = false;
    }

    if(ret){
        alert("Recado Enviado!");
    }

    return ret;
}