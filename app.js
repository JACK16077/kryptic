let textoUsuario = document.getElementById('valorUsuario');
let mensaje = document.getElementById('mensaje');
let btnCopiar = document.getElementById('btnCopiar');
let texto = textoUsuario.value;
mensaje.textContent;

function mostrarOcultar(){
    document.getElementById('mensajeInicial').style.display = 'none';
    mensaje.style.display = 'block';
    btnCopiar.style.display = 'block';
}

function encriptar(){
    texto = textoUsuario.value;
    if(texto.match(/[A-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜñÑ0-9]/)){
        alert('Ingresar solo letras minusculas y sin acentos');
        textoUsuario.value = '';
    } else {
        let newText = texto.replace(/[aeiou]/g, function(match) {
            switch(match) {
                case 'a': return 'ai';
                case 'e': return 'enter';
                case 'i': return 'imes';
                case 'o': return 'ober';
                case 'u': return 'ufat'
                default: return match;
                }
        });
        mensaje.textContent = newText;
        textoUsuario.value = '';
        mostrarOcultar();  
        }
}

function desencriptar(){
    texto = textoUsuario.value;
    if(texto.match(/[A-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜñÑ0-9]/)){
        alert('Ingresar solo letras minusculas y sin acentos');
        textoUsuario.value = '';
    } else {
        let reg = /ai|enter|imes|ober|ufat/g;
        let newText = texto.replace(reg, function(match) {
                switch(match) {
                    case 'ai': return 'a';
                    case 'enter': return 'e';
                    case 'imes': return 'i';
                    case 'ober': return 'o';
                    case 'ufat': return 'u'
                    default: return match;
                }
                });
                mostrarOcultar(); 
                textoUsuario.value = '';
                mensaje.textContent = newText;
        }
}

btnCopiar.addEventListener('click', async function(){
    try{
        await navigator.clipboard.writeText(mensaje.textContent);
        alert('Texto copiado al portapapeles')
    } catch(err){
        console.error('Error al copiar el texto: ', err);
    }
})

