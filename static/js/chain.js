function newCard() {
	hideElements(['field', 'button_next', 'button_save', 'scroll', 'buttons', 'field'+IDtoField]);
    showElements(['modalCard']);
}

function setCardSettings() {
    var newdiv = document.createElement('div');
    document.getElementById('field'+IDtoField).appendChild(newdiv);
    newdiv.classList.add("cardclass");
    newdiv.classList.add("ui-widget");
    newdiv.classList.add("ui-corner-all");
    newdiv.classList.add("ui-draggable");
    newdiv.id = "card" + IQ;
    IDDIV = "#card" + IQ;
    document.getElementById("card"+IQ).style.left = "0px";
    document.getElementById("card"+IQ).style.top = "0px";
    newdiv.innerText = document.getElementById('CardText').value;
    $(IDDIV).css("font", document.getElementById('CardFontSize').value + "pt " + document.getElementById('CardFontType').value);
    $(IDDIV).css("color", document.getElementById('CardFontColor').value);
    //$(IDDIV).css("z-index", document.getElementById('QuestionZIndex').value);
    $(IDDIV).css("background-color", document.getElementById('CardColor').value);
    $(".cardclass").resizable({containment: "parent"});
    $(".cardclass").draggable({containment: "parent"});
    IQ++;
    reModalBlock();
    button_push_question(slideNum);
    deleteEl();
}
