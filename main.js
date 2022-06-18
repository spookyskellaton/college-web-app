var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0] [0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    if(Content=="selfie")
    {
    
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id="selfie1";
        take_snapshot();
        speak_data = "Taking your Selfie in 10 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
        save();
    }, 5000);
    setTimeout(function()
    {
        img_id="selfie2";
        take_snapshot();
        speak_data = "Taking your Selfie in 15 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
        save();
    }, 10000);

    setTimeout(function()
    {
        img_id="selfie3";
        take_snapshot();
    },15000);

}
Webcam.set({
width:360,
height:250,
image_format : 'png',
png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
    }
function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
