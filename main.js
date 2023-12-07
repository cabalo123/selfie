let reconhecerVoz = window.webkitSpeechRecognition;
let reconhecer = new reconhecerVoz();
let textarea = document.getElementById("textarea");

function iniciar() {
    textarea.innerHTML = ""
    reconhercer.start();
}

reconhecer.onresult = function(evento) {
console.log(evento);
let conter = evento.results[0][0].trascript;
textarea.innerHTML = conter_transcricao;

if(conter_transcricao=="selfie");

speak();

}

function speak(){
let computerFalar = window.speechSynthesis;
texto_para_falar = "Tirando sua selfie em 5 segundos, Prepare-se!";

let utterThis = new SpeechSynthesisUtterance(texto_para_falar);

computadorFalr.speak(utterThis);

WebKitCSSMatrix.attach(camera);

setTimeout(function(){
tirarfoto();
salvar();




},5000)


}

camera = getElementById("camera");
Webcam.set({

width : 360,
height:250,
image_format,
jpeg_quality:90

})



