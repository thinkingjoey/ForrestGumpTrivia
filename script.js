//reference:http://www.zimbio.com/trivia/guLLQgcX3Eb/How+Well+Remember+Forrest+Gump

//http://www.imdb.com/title/tt0109830/trivia

//http://www.biography.com/news/forrest-gump-quotes
var allQuestions = [
    //question1
    "what song does Jenny sing in the nightclub?",
    //question2
    "what does Jenny pray that God will turn her into?",
    //question3
    "when Forrest gets up to talk at the Vietnam rally in Washington, the microphone plug is pulled and you cannot hear him. Acoording to Tom Hanks, what did Forrest say on the stage?",
    //question4
    "with every transition of Forrest's age, one thing remains the same-in the first scene of each transition he wears a_.",
    //question5
    "Jenny asks Forrest: have you ever been with a girl? Forrest replies_",
    //question6
    "complete this sentence:I am not a smart man. But_",
    //question7
    "what did Forrest say when Lieutenant Dan asks him if he found jesus yet?",
    //question8
    "complete this sentence: I don't know if we each have a destiny, or if we're just floating around accidental-like on a breeze. But_."
  ];


  var i = 0;
  $('button').click(function(){
	if (i< allQuestions.length) {
		$('#questionBox').text( "Question: "+ allQuestions[i]);
		i=i+1;
	}
 });
  // var i=0;
  // $('button').click(function(){
  //   for(i=0;i<allQuestions.length;i++)
  //   $('#questionBox').text(allQuestions[i])
  // });




$("#a,#b,#c,#d").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "white");
});
