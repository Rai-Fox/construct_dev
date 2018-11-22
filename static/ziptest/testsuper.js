var test = [];
var number_question=0; var number_slide=0; var ball =0;//заполняется из данных пользователя скриптом, только текст и правильность
var maxball=0;
function constructor_slide() //слайд теста
{
	this.question = "";
	this.answers = [];
	this.backcolor = "";
	this.push_question_and_backcolor = function(textquestion,colormainfield)
	{
		this.question = textquestion;
		this.backcolor = colormainfield;
	}
	this.push_answer = function(textanswer,truelianswer)
	{
		let answer = {
			Text: textanswer, TrueLi:truelianswer
		}
		this.answers.push(answer);
	}
}

function next()
{ 	
	if (number_slide==number_question) {chek();}
	number_slide++;
	setquestion();
}
function back()
{
	number_slide--;
	setquestion();
}
function chek()
{
	let right=2;
	let type = 0;
	for (let i=0;i<test[number_question].answers.length; i++)
	{
		pupilanswer =  $('#answer'+number_question+'_' + i).attr("trueli"); //значение select по id ответа
		if (test[number_question].answers[i].TrueLi==1) {type++;}
		if (pupilanswer != test[number_question].answers[i].TrueLi && right!=0) {right--;}
	}
	if (type == 1) {ball+= Number(right>1); right = 2* Number(right>1);}
	else {ball+=right;}
	maxball+= 1 + Number(type>1);
	if(right==2){$("#TD"+number_question).css("background-color", "green"); alert("Абсолютно верно!");}
	else if(right==1){$("#TD"+number_question).css("background-color", "yellow");alert("Частично верно");}
	else{$("#TD"+number_question).css("background-color", "red"); alert("Вы совершили ошибку!");}
	number_question++;
}
function setquestion(){
	if (number_slide == test.length) {finish();}
	else {
	$("#mainfield").css("background-color", test[number_question].backcolor);
	//работа c div "question"
	var newdivquestion = '<div id="question'+ number_question + '">'+ test[number_question].question +'</div>'
	document.getElementById('question').innerHTML = newdivquestion;
	//работа с div "answers"
	document.getElementById('answers').innerHTML = " ";
	var divanswers = document.getElementById("answers"); 
	for (let i=0;i<test[number_question].answers.length ;i++)
	{ 
		new_answer = '<div class="answerClass" id = "answer'+ number_question + '_' + i + '">'+ test[number_question].answers[i].Text + '</div>'; //создания div конкретного вопроса. НАДО ДОБАВИТЬ ЧЕКЕР с id-номером
		divanswers.innerHTML += new_answer; //добавление этого div
		if (number_slide==number_question)
		{
		$("#answer"+ number_question + "_" + i).attr("trueli","0");
		//document.getElementById("answer"+ number_question + "_" + i).setAttribute("trueli","0");
		$(".answerClass").click(function(){
        if(document.getElementById(this.id).getAttribute("trueli")=="0"){
        			$("#"+this.id).attr("trueli","1");
        			$("#"+this.id).css("box-shadow","0 0 25px #172caf");
        			//box-shadow: 0 0 10px #172caf;
        		}
        else
        	{
        			$("#"+this.id).attr("trueli","0");
        			$("#"+this.id).css("box-shadow","0 0 0px #172caf");
        	}}
		}
		else
		{
			if(test[number_question].answers[i].TrueLi == 1)
			{
				$("#answer"+ number_question + "_" + i).css("box-shadow","0 0 25px #00ff00");
			}
			else
			{
				$("#answer"+ number_question + "_" + i).css("box-shadow","0 0 25px #ff0000");
			}
		}
	}}
}
function finish()
{
	document.getElementById("question").innerHTML = " ";
	document.getElementById("answers").innerHTML = " ";
	total = '<br><br><br><br><div><h1><b>Ваш результат: ' +  ball + ' из ' + maxball + '</b></h1></div>';
	document.getElementById("base").innerHTML = total;
}

function makePB() {
	document.getElementById('progress').innerHTML="<table height='5%'class='PBmain'><tr id='mainTr'></tr></table>";
	$("#mainTr").css("width", "50%");
	for(let i=0;i<test.length;i++){
		document.getElementById("mainTr").innerHTML+="<td id='TD"+i+"'class='PBpassive TDmain'></td>";
	}

}