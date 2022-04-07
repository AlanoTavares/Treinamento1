
var pagouAlmoco = document.getElementById("inputAlmoco");
var email = document.getElementById("inputEmail");

function MostrarAlerta() {
    alert("Formulario enviado com sucesso!" + pagouAlmoco.value + email.value);
    
}

function LimparCampos(){
    document.getElementById("inputAlmoco").value ="";
    document.getElementById("inputEmail").value ="";
}