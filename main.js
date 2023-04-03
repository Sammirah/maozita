prediction1=""
prediction2=""

Webcam.set({
    width:350,
    height:350,
    imageFormat : 'png',
    pngQuality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function tirarfotita() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="POKEMONTEMOSQUEPEGALOSEUSEI" src="'+data_uri+'"/>'
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KyokyjxuC/model.json',modelLoaded)

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speakData1 ="A primeira previsão é " + prediction1;
    speakData2 ="A segunda previsão é " + prediction2;
    var uttherThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(uttherThis);
}

function verify() {
    img = document.getElementById('POKEMONTEMOSQUEPEGALOSEUSEI');
    classifier.classify(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML = results[0].label;
        document.getElementById("resultEmotionName2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;

        speak();
        if(results[0].label == "joinha") 
        {
            document.getElementById("updateEmoji").innerHTML = "&#128077"
        }
        if(results[0].label == "cria") 
        {
            document.getElementById("updateEmoji").innerHTML = "&#129305"
        }
        if(results[0].label == "paz") 
        {
            document.getElementById("updateEmoji").innerHTML = "&9#996"
        }
        if(results[0].label == "Class 4") 
        {
            document.getElementById("updateEmoji").innerHTML = "&#128076"
        }

        if(results[1].label == "joia") 
        {
            document.getElementById("updateEmoji2").innerHTML = "&#128077"
        }
        if(results[1].label == "cria") 
        {
            document.getElementById("updateEmoji2").innerHTML = "&#129305"
        }
        if(results[1].label == "paz") 
        {
            document.getElementById("updateEmoji2").innerHTML = "&#9996"
        }
        if(results[1].label == "Class 4") 
        {
            document.getElementById("updateEmoji2").innerHTML = "&#128076"
        }
    }
}