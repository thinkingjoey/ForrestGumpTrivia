// reference:http://www.zimbio.com/trivia/guLLQgcX3Eb/How+Well+Remember+Forrest+Gump
//
// http://www.imdb.com/title/tt0109830/trivia
//
// http://www.biography.com/news/forrest-gump-quotes
//
// http://www.playbuzz.com/thelaststraw10/can-you-remember-the-movie-forrest-gump
//
// http://www.imsdb.com/scripts/Forrest-Gump.html
//
// var allQuestions = [
//     //question0
//     //"Stupid is_",
//     //question1
//     "What song does Jenny sing in the nightclub?",
//     //question2
//     "What does Jenny pray that God will turn her into?",
//     //question3
//     "What is the name of Forrest's home town?",
//     **//question4
//     "With every transition of Forrest's age, one thing remains the same-in the first scene of each transition he wears a_.",
//     //question5
//     "Jenny asks Forrest, do you ever dream, Forrest, about who you're gonna be? Forrest replies_",

//     //question6
//     "Forrest says to Jenny, I am not a smart man. But_",

//     //question7
//     "What did Forrest say when Lieutenant Dan asks him if he found Jesus yet?",
//     //question8
//     "Forrest says, I don't know if we each have a destiny, or if we're just floating around accidental-like on a breeze. But_.",
//     //question9
//     "What is your sole purpose in this army? Forrest replies _.",
//     //question10
//     "What is the first line Forrest says on screen? "
//   ];
//
// var allChoiceAs =[
//   //question1
//   "Someone like you",
//   //question2
//   "a butterfly",
//   //question3(correct)
//   "Greenbow, Alabama",
//   //question4
//   "a white shirt",
//   //question5 (correct)
//   "Aren't I going to be me?",
//   //question6
//   "I know how to play ping pong",
//   //question7
//   "Jesus is always in my heart",
//   //question8
//   "life is like a box of chocolate?",
//   //question9
//   "to do my best!",
//   //question10
//   "You want a chocolate?"
// ];
// var allChoiceBs =[
//   //question1
//   "Moon River",
//   //question2(correct)
//   "a bird",
//   //question3
//   "Birmingham, Alabama",
//   //question4(correct)
//   "a blue shirt",
//   //question5
//   "I'd never thought about it",
//   //question6
//   "I know how to play football",
//   //question7
//   "I don't know where Jesus is",
//   //question8
//   "maybe it doesn't matter?",
//   //question9
//   "to go home in one piece!",
//   //question10
//   "Those must be comfortable shoes"
// ];
//
// var allChoiceCs=[
// //question1(correct)
// "Blowin in the wind",
// //question2
// "a big girl",
// //question3
// "Los Angeles,California",
// //question4
// "a polo shirt",
// //question5(correct)
// "I want to be a football player",
// //question6
// "I know JavaScript!",
// //question7
// "Jesus is in heaven",
// //question8 (correct)
// "maybe it's both?",
// //question9
// "to kick ass!",
// //question10
// "Hello. What's your name?"
// ];
//
// var allChoiceDs=[
// //question1
// "Tears in heaven",
// //question2
// "a big horse",
// //question3
// "Berkeley,California",
// //question4
// "a green shirt",
// //question5
// "I want to be a good man",
// //question6(correct)
// "What love is",
// //question7(correct)
// "I didn't know I was supposed to be looking for him",
// //question8
// "maybe the answer is blowing in the wind",
// //question9(correct)
// "To do whatever you tell me, drill sergeant!",
// //question10(correct)
// "Hello. My name's Forrest Gump."
// ];
//
//
//
// var i = 0;
// $('#next').click(function(){
// if (i< allQuestions.length) {
//   $('#questionBox').text( "Question: "+ allQuestions[i]);
//   i=i+1;
// }
// });
//
// var j = 0;
// $('#next').click(function(){
// if (j< allChoiceAs.length) {
//   $('#a').text( "A: " +allChoiceAs[j]);
//   j=j+1;
// }
// });
//
// var k = 0;
// $('#next').click(function(){
// if (k< allChoiceBs.length) {
//   $('#b').text( "B: " +allChoiceBs[k]);
//   k=k+1;
// }
// });
//
// var l = 0;
// $('#next').click(function(){
// if (l< allChoiceCs.length) {
//   $('#c').text( "C: " +allChoiceCs[l]);
//   l=l+1;
// }
// });
//
// var m = 0;
// $('#next').click(function(){
// if (m< allChoiceDs.length) {
//   $('#d').text( "D: " +allChoiceDs[m]);
//   m=m+1;
// }
// });
//
//
//
// var allPictures =[
// question0
// images/q1.gif
// question1
// "images/q2.jpg"
// question2
//
// question3
//
// question4
//
// question5
//
// question6
//
// question7
//
// question8
//
// ];
//
// How to add an array of image??
//
// var j = 0;
//  $('button').click(function(){
// if (j< allPictures.length) {
// 	$('#picture').append("<img scr=" + "allPictures[i]>");
// 	i=i+1;
// }
// });
//
//
// This is how I make the question loop originally.Trying to understand why.
// var i=0;
// $('button').click(function(){
//   for(i=0;i<allQuestions.length;i++)
//   $('#questionBox').text(allQuestions[i])
// });


// var i = 0;
// $('#next').click(function change(){
// if (i< everything.length) {
//   $('#questionBox').text( "Question: "+ everything[i].question);
//   $('#a').text("A: "+ everything[i].A);
//   $('#b').text("B: "+ everything[i].B);
//   $('#c').text("C: "+ everything[i].C);
//   $('#d').text("D: "+ everything[i].D);
//   i=i+1;
// }
// });
//
// change()
//
//
// $('#a, #b, #c, #d').click(function(e){
// var correct = everything[i].correct
// var clickedAnswer = $(this).text()[0]
// if (correct == clickedAnswer) {
//   $('#level' + i).css("background-color","green")
// }
// else {
//   console.log("wrong answer")
// }
// //
// //   if ($(this) == everything[i].correct) {
// //     $('#level1').css("background-color","green");
// // }
// });
