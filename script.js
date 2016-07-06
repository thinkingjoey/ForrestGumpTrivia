$("#a,#b,#c,#d").hover(function(){
  $(this).css("background-color", "yellow");
}, function(){
  $(this).css("background-color", "white");
});

// DATA

var everything =[
  {//$100
    question:"What song does Jenny sing in the nightclub?",
    A:"Someone like you",
    B:"Moon River",
    C:"Blowin in the wind",
    D:"Tears in heaven",
    correct:"C"
  },

  {//$200
    question:"What does Jenny pray that God will turn her into?",
    A:"a butterfly",
    B:"a bird",
    C:"a big girl",
    D:"a horse",
    correct:"B"
  }
  //$300


];


var currentQuestion = 0

function draw () {

}
draw()


  var i = 0;
  $('#next').click(function change(){
  if (i< everything.length) {
    $('#questionBox').text( "Question: "+ everything[i].question);
    $('#a').text("A: "+ everything[i].A);
    $('#b').text("B: "+ everything[i].B);
    $('#c').text("C: "+ everything[i].C);
    $('#d').text("D: "+ everything[i].D);
    i=i+1;
  }
  });

  change()


$('#a, #b, #c, #d').click(function(e){
  var correct = everything[i].correct
  var clickedAnswer = $(this).text()[0]
  if (correct == clickedAnswer) {
    $('#level' + i).css("background-color","green")
  }
  else {
    console.log("wrong answer")
  }
//
//   if ($(this) == everything[i].correct) {
//     $('#level1').css("background-color","green");
// }
  });
