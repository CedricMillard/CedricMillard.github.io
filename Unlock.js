function addCard(numCard)
{
    var cln = document.getElementById("TemplateCard").cloneNode(false);
    cln.id = numCard;
    cln.name = numCard;
    cln.src = "./"+gameName+"/"+gameName+"V_" + numCard + ".png";
    cln.style.display = "inline-block";
    document.getElementById("CardDeck").insertBefore(cln, document.getElementById("end"));
}

function returnCard(numCard)
{
    var cln = document.getElementById("TemplateCardV").cloneNode(false);
    cln.id = numCard+"V";
    cln.name = numCard;
    cln.src = "./"+gameName+"/"+gameName+"_" + numCard + ".png";
    cln.style.display = "inline-block";
    document.getElementById(numCard).style.display = "none";
    document.getElementById("VisibleCard").insertBefore(cln, document.getElementById("endV"));
}

function discardCard(numCard)
{
    if(confirm("Would you like to discard card "+numCard+" ?"))
    {
        document.getElementById(numCard+"V").style.display = "none";
        var cln = document.getElementById("TemplateCardD").cloneNode(false);
        cln.id = numCard+"D";
        cln.name = numCard;
        cln.src = "./"+gameName+"/"+gameName+"_" + numCard + ".png";
        cln.style.display = "inline-block";
        document.getElementById("DismissedCard").insertBefore(cln, document.getElementById("endD"));
        cln.width=cln.width/4;

    }
}

var start = 0
var end = 0
var diff = 0

function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	document.getElementById("chrono").innerHTML = min + ":" + sec
	setTimeout("chrono()", 1000)
}
function chronoStart(){
    start = new Date();
    document.getElementById("chrono").style.display = "inline-block";
	chrono();
}