$("#a,#b,#c,#d").hover(function(){
  $(this).css("background-color", "yellow");
}, function(){
  $(this).css("background-color", "white");
});

// DATA

var everything =[
  //$100
  {
    question:"What song does Jenny sing in the nightclub?",
    A:"Someone like you",
    B:"Moon River",
    C:"Blowin in the wind",
    D:"Tears in heaven",
    correct:"C"
  },
  //$200
  {
    question:"What does Jenny pray that God will turn her into?",
    A:"a butterfly",
    B:"a bird",
    C:"a big girl",
    D:"a horse",
    correct:"B"
  },
  //$300
  {
  question:"Stupid is_",
  A:"a blessing!",
  B:"what you think it is",
  C:"a bad word!",
  D:"as stupid does",
  correct:"D"
},
  //$500
  {
  question:"What is the name of Forrest's home town?",
  A:"Greenbow, Alabama",
  B:"Birmingham, Alabama",
  C:"Los Angeles,California",
  D:"Berkeley,California",
  correct:"A"
  },
  //$1000
  {
  question:"Forrest says to Jenny, I am not a smart man. But_",
  A:"I know how to play ping pong",
  B:"I know how to play football",
  C:"I know JavaScript!",
  D:"What love is",
  correct:"D"
  },
  //$2000
  {
  question:"Jenny asks Forrest, do you ever dream, Forrest, about who you're gonna be? Forrest replies_",
  A:"Aren't I going to be me?",
  B:"I'd never thought about it",
  C:"I want to be a football player",
  D:"I want to be a good man",
  correct:"A"
  },
  //$4000
  {
  question:"What is your sole purpose in this army? Forrest replies _.",
  A:"to do my best!",
  B:"to go home in one piece!",
  C:"to kick ass!",
  D:"To do whatever you tell me, drill sergeant!",
  correct:"D"
  },
  // $8,000
  {
  question:"What did Forrest say when Lieutenant Dan asks him if he found Jesus yet?",
  A:"Jesus is always in my heart",
  B:"I don't know where Jesus is",
  C:"I didn't know I was supposed to be looking for him",
  D:"Jesus is in heaven",
  correct:"C"
  },
  // $16,000
  {
  question:"What is the first line Forrest says on screen?"
  A:"You want a chocolate?",
  B:"Hello. My name's Forrest Gump.",
  C:"Those must be comfortable shoes",
  D:"Hello. What's your name?",
  correct:"B"
  },
  //$32,000
  {
  question:"Forrest says, I don't know if we each have a destiny, or if we're just floating around accidental-like on a breeze. But_."
  A:"life is like a box of chocolate?",
  B:"maybe it doesn't matter?",
  C:"maybe it's both?",
  D:"maybe the answer is blowing in the wind",
  correct:"C"
  },
  //$64,000
  {
  question:"With every transition of Forrest's age, one thing remains the same-in the first scene of each transition -",
  A:"Forrest wears a blue shirt",
  B:"the scene starts with a U.S. President story",
  C:"Forrest Gump introduced himself as Forrest Gump",
  D:"Forrest is running",
  correct:"A"
  },
  //$125,000
  {
  question:"The movie was re-released in IMAX in 2014 in honor of its _ anniversary.",
  A:"10th",
  B:"15th",
  C:"20th",
  D:"25th",
  correct:"C"
  },
  //$250,000
  {
  question:"Forrest goes on a run one day, and keeps running for _",
  A:"3.5 years, 2 months, 14 days, and 16 hours",
  B:"3 years, 2 months, 14 days and 16 hours",
  C:"2 years, 2 months, 10 days and 16 hours",
  D:"2 years, 4 months, 14 days and 16 hours",
  correct:"B"
  },
  //$500,000
  {
  question:"How long did the filming last?"
  A:"4 months",
  B:"10 months",
  C:"a year and half",
  D:"two years and half"
  correct:"A"
  },
  {
  //one million
  question: "When Forrest gets up to talk at the Vietnam rally, the mic was unplugged. According to Tom Hanks, what did he say?",
  A:"...My best friend died in Vietnam.",
  B:"...Sometimes they don't go home at all. That's a bad thing.",
  C:"...I got shot. I thought I'd never seem my mama again.",
  D:"...No more wars. No more violence.",
  correct:"B"
  },
];



var i = 0;
function draw () {
  if (i< everything.length) {
    $('#questionBox').text( "Question: "+ everything[i].question);
    $('#a').text("A: "+ everything[i].A);
    $('#b').text("B: "+ everything[i].B);
    $('#c').text("C: "+ everything[i].C);
    $('#d').text("D: "+ everything[i].D);
    i=i+1;
}}
draw();

  $('#next').click(function (){
  draw();
  });

//
//
// $('#a, #b, #c, #d').click(function(e){
//   var correct = everything[i].correct
//   var clickedAnswer = $(this).text()[0]
//   if (correct == clickedAnswer) {
//     $('#level' + i).css("background-color","green")
//   }
//   else {
//     console.log("wrong answer")
//   }
// //
// //   if ($(this) == everything[i].correct) {
// //     $('#level1').css("background-color","green");
// // }
//   });
