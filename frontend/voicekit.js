function startVoice() {
    var r = document.getElementById("serverprompt");
    if ("webkitSpeechRecognition" in window) {
        console.log('inside')
        var speechRecognizer = new webkitSpeechRecognition();
        speechRecognizer.continuous = false;
        speechRecognizer.interimResults = true;
        speechRecognizer.lang = "en-US";
        speechRecognizer.start();
        done = false
        var finalTranscripts = "";
        speechRecognizer.onresult = function (event) {
            var interimTranscripts = "";
            for (var i = event.resultIndex; i < event.results.length; i++) {
                var transcript = event.results[i][0].transcript;
                transcript.replace("\n", "<br>");
                if (event.results[i].isFinal) {
                    finalTranscripts += transcript;
                    done = true
                    console.log("DONE")
                }
                else {
                    interimTranscripts += transcript;
                }
                console.log('does this happen once too?')
                console.log(done)

                r.innerHTML = finalTranscripts + '<span style="color: #999;">' + interimTranscripts + '</span>';
                if (done == true) {
                    console.log('WHY DOES THIS NEVER FUCKING HAPPEN')
                    expressionMatching(finalTranscripts)
                    break
                }

            }
            //console.log(finalTranscripts)
            // console.log('fuck')

            //this is where we need to do the expression matching


        };



        speechRecognizer.onerror = function (event) {
        };
    }
    else {
        r.innerHTML = "Your browser does not support that.";
    }
}

function expressionMatching(finalTranscripts) {
    output.innerHTML = getLoadingAnim()
    if (finalTranscripts.includes("weather")) {
        getCommand("weatherNow")
        output.innerHTML = getLoadingAnim()


    }

}