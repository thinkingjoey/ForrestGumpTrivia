// DATA

var everything = [
  //$100
  {
    picture: "http://showbizgeek.com/wp-content/uploads/2013/04/Screen-Shot-2013-04-10-at-23.57.43.png",
    question: "What song does Jenny sing in the nightclub?",
    A: "Someone like you",
    B: "Moon River",
    C: "Blowin in the wind",
    D: "Tears in heaven",
    correct: "C"
  },
  //$200
  {
    picture: "http://graphics8.nytimes.com/images/2006/01/11/arts/james.2.2.650.jpg",
    question: "What does Jenny pray that God will turn her into?",
    A: "a butterfly",
    B: "a bird",
    C: "a big girl",
    D: "a horse",
    correct: "B"
  },
  //$300
  {
    picture: "https://media.giphy.com/media/UtvKdCgWRcKLS/giphy.gif",
    question: "Stupid is_",
    A: "a blessing!",
    B: "what you think it is",
    C: "a bad word!",
    D: "as stupid does",
    correct: "D"
  },
  //$500
  {
    picture: "http://screenprism.com/assets/img/article/_1080x400/Kids.jpg",
    question: "What is the name of Forrest's home town?",
    A: "Greenbow, Alabama",
    B: "Birmingham, Alabama",
    C: "Los Angeles,California",
    D: "Berkeley,California",
    correct: "A"
  },
  //$1000
  {
    picture: "https://i.ytimg.com/vi/7kZryEKGm1o/maxresdefault.jpg",
    question: "Forrest says to Jenny, I am not a smart man. But_",
    A: "I know how to play ping pong",
    B: "I know how to play football",
    C: "I know JavaScript!",
    D: "I know what love is",
    correct: "D"
  },
  //$2000
  {
    picture: "http://1.bp.blogspot.com/-DUwMF1Lnxco/VLwR8bTri7I/AAAAAAAABvY/3XjXl5ST9RM/s1600/jenny-forrest-gump-hairstyle-01.jpg",
    question: "Jenny asks Forrest, do you ever dream, Forrest, about who you're gonna be? Forrest replies_",
    A: "Aren't I going to be me?",
    B: "I'd never thought about it",
    C: "I want to be a football player",
    D: "I want to be a good man",
    correct: "A"
  },
  //$4000
  {
    picture: "https://media.giphy.com/media/SBrnKxT2Dww4o/giphy.gif",
    question: "What is your sole purpose in this army? Forrest replies _.",
    A: "to do my best!",
    B: "to go home in one piece!",
    C: "to protect my country and fight untill the end!",
    D: "To do whatever you tell me, drill sergeant!",
    correct: "D"
  },
  // $8,000
  {
    picture: "https://media4.giphy.com/media/icbTI6oyGEnza/200.gif",
    question: "What does Forrest say when Lieutenant Dan asks him if he found Jesus yet?",
    A: "Jesus is always in my heart",
    B: "I don't know where Jesus is",
    C: "I didn't know I was supposed to be looking for him",
    D: "I don't know if Jesus wants us to find him.",
    correct: "C"
  },
  // $16,000
  {
    picture: "http://www.thefilmagazine.com/wp-content/uploads/2016/03/30.gif",
    question: "What is the first line Forrest says on screen?",
    A: "You want a chocolate?",
    B: "Hello. My name's Forrest Gump.",
    C: "Those must be comfortable shoes",
    D: "Hello. What's your name?",
    correct: "B"
  },
  //$32,000
  {
    picture: "http://thefilmspectrum.com/wp-content/uploads/2011/07/Picture-30.png",
    question: "Forrest says, I don't know if we each have a destiny, or if we're just floating around accidental-like on a breeze. But_.",
    A: "life is like a box of chocolate?",
    B: "maybe it doesn't matter?",
    C: "maybe it's both?",
    D: "maybe the answer is blowing in the wind",
    correct: "C"
  },
  //$64,000
  {
    picture: "https://media0.giphy.com/media/1Etgus1te4Sw8/200.gif",
    question: "What's Jenny's last name?",
    A: "Curran",
    B: "Johnson",
    C: "Moore",
    D: "Chang",
    correct: "A"
  },
  //$125,000
  {
    picture: "http://cdn.playbuzz.com/cdn/e5168485-dfc3-45f6-89ad-47761d121ad6/a3215225-7f2b-4afd-803c-0a3b3276f9a2.jpg",
    question: "The movie was re-released in IMAX in 2014 in honor of its _ anniversary.",
    A: "10th",
    B: "15th",
    C: "20th",
    D: "25th",
    correct: "C"
  },
  //$250,000
  {
    picture: "http://www.joblo.com/newsimages1/unpopular-forrest-running.jpg",
    question: "Forrest goes on a run one day, and keeps running for _",
    A: "3.5 years, 2 months, 14 days, and 16 hours",
    B: "3 years, 2 months, 14 days and 16 hours",
    C: "2 years, 2 months, 10 days and 16 hours",
    D: "2 years, 4 months, 14 days and 16 hours",
    correct: "B"
  },
  //$500,000
  {
    picture: "https://media.giphy.com/media/11NXhmwf6BIgfK/giphy.gif",
    question: "How long did the filming last?",
    A: "4 months",
    B: "10 months",
    C: "a year and half",
    D: "two years and half",
    correct: "A"
  }, {
    //one million
    picture: "http://thefilmspectrum.com/wp-content/uploads/2011/07/Picture-101.png",
    question: "When Forrest gets up to talk at the Vietnam rally, the mic was unplugged. According to Tom Hanks, what did he say?",
    A: "...My best friend died in Vietnam...",
    B: "...Sometimes they don't go home at all. That's a bad thing...",
    C: "...I got shot. I thought I'd never see my mama again...",
    D: "...No more wars. No more violence...",
    correct: "B"
  }
];

//click start game, then hide the welcome page
$('.start').on("click", function(e) {
  $('#welcome').hide();
});

$('#gameOver').click(function(){
  location.reload();
});

//hover color change
$("#a,#b,#c,#d").hover(function() {
  $(this).css("background-color", "skyblue");
}, function() {
  $(this).css("background-color", "white");
});

//chnage question & choices
var i = 0;
function draw() {
  if (i < everything.length) {
    $('#questionBox').text("Question: " + everything[i].question);
    $('#a').text("A: " + everything[i].A);
    $('#b').text("B: " + everything[i].B);
    $('#c').text("C: " + everything[i].C);
    $('#d').text("D: " + everything[i].D);
    $('.picture').css("background-image", "url(" + everything[i].picture + ")");
  }
}
draw();

//correct click, then move to next question
//wrong click, alert game over
$('#a, #b, #c, #d').click(function(e) {
  var correct = everything[i].correct;
  var clickedAnswer = $(this).text()[0];
  if (correct == clickedAnswer) {
    $('#level' + i).css("background-color", "green");
    $('#level' +(i-1)).css("background-color", "skyblue");
    i++;
    draw();
  }
    else {
    $('#gameOver').show();
    $('#prize').text("Game over. " + "You won " + $('#level' + (i - 1)).text());
    // alert("Game over. " + "You won " + $('#level' + (i - 1)).text());
  }
});


//restart button
$('#restart').click(function(e) {
  location.reload();
});

//ask button
$('#ask').click(function(e) {
  var search = $('#questionBox').text();
  window.open("http://google.com/?gws_rd=ssl#q=" + search);
  $('#ask').css("display", "none")
});


//50/50 button
$('#half').click(function(e) {
  var correct = everything[i].correct;
  var a = $('#a').text()[0];
  var b = $('#b').text()[0];
  var c = $('#c').text()[0];
  var d = $('#d').text()[0];
  //one correct, one wrong
  var half = [];
  var choices = [a, b, c, d];
  //get the index of the correct answer
  var index = choices.indexOf(correct);
  //put the correct one into the half array
  half.push(choices[index]);
  //the choices array contains 3 wrong answers
  choices.splice(index, 1);
  //get a random wrong answer from the choices array
  var randWrong = Math.floor(Math.random() * choices.length);
  //push this wrong choice into half array
  half.push(choices[randWrong]);
  //style them
  console.log(half);
  $('#a,#b,#c,#d').hide();
  $(("#" + half[0]).toLowerCase()).show();
  $(("#" + half[1]).toLowerCase()).show();
  $('#half').css("display", "none")
});

// //hint
// $('#hint').click(function(e){
//  $('#hint').css("display", "none")
// })
