// json array movement variable
var i = 0;
var correctCount = 0;
// initialize the first question
generate(0);
// generate from json array data with index
function generate(index){
    document.getElementById("question").innerHTML = jsonData[index].q ;
    document.getElementById("optt1").innerHTML = jsonData[index].opt1 ;
    document.getElementById("optt2").innerHTML = jsonData[index].opt2 ;
    document.getElementById("optt3").innerHTML = jsonData[index].opt3 ;
    document.getElementById("optt4").innerHTML = jsonData[index].opt4 ;
}

function checkAnswer(){
    if (document.getElementById("opt1").cheked && json[i].opt1 == jsonData[i].answer){
    correctCount++;
    }
    if (document.getElementById("opt2").cheked && json[i].opt2 == jsonData[i].answer){
    correctCount++;
    }

    if (document.getElementById("opt3").cheked && json[i].opt3 == jsonData[i].answer){
    correctCount++;
    }

    if (document.getElementById("opt4").cheked && json[i].opt4 == jsonData[i].answer){
    correctCount++;
    }
    // increment i for next question
    i++;
    if(jsonData.length-1<i){
        document.write("<body style='background-color:darkgreen';>");
        document.write("<p style='color:white;font-size : 18pt;'>*****Your score is : " +correctCount+"*****</p>");
        document.write("</body>");
    }
    // callback to generate
    generate(i);
}
