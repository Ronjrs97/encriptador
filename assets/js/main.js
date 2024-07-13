function encript() {
  var texto = document.getElementById("inputtext").value;

  esvalid = valida(texto);

  if (esvalid) {

    const textoEncrip = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("textresult").value=textoEncrip;
    document.getElementById("inputtext").value="";

    document.getElementById("nonetex").style.display = "none";
    document.getElementById("yestext").style.display = "flex";

  } else {
    alert(
      "El texto ingresado no es valido, Solo letras minúsculas y sin acentos"
    );
  }
};

function descrip(){
  var texto = document.getElementById("inputtext").value;
  esvalid = valida(texto);

  if (esvalid) {
    const textoDcrip = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("inputtext").value="";
    document.getElementById("textresult").value=textoDcrip;

    document.getElementById("nonetex").style.display = "none";
    document.getElementById("yestext").style.display = "flex";

  } else {
    alert(
      "El texto ingresado no es valido, Solo letras minúsculas y sin acentos"
    );
  }

};

function copy(){
  document.getElementById("textresult").select();
  navigator.clipboard.writeText(document.getElementById("textresult").value)
}

function valida(texto) {  
  const acept = /^[a-z \s]+$/;
  const esValido = acept.test(texto);
  return esValido? true : false;
};
