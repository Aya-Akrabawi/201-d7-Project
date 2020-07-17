'use strict';

var score = 0
var username = prompt ('welcome to the game! what is your name?');
alert ('Welcome ' + username + '! hope you\'ll answer them all correct!');

var answer1 = prompt('Is My Name Aya?');
if (answer1.toLowerCase() == 'yes' ) {
  alert ('Bravoo! you know my name');
  score +=1

} else {
  alert ('Oops! you don\'t know my name');

var attempt;
var score = 0;
var username = prompt('welcome to the game! what is your name?');
function Q1(){
  console.log('User answer was ' + username);
  alert('Welcome ' + username + '! hope you\'ll answer them all correct!');
}
function Q2(){
  var answer1 = prompt('Is My Name Aya?');
  console.log('User answer was ' + answer1.toLowerCase());
  if (answer1.toLowerCase() === 'yes') {
    alert('Bravoo! you know my name');
    console.log('Correct Answer');
    score += 1;



var answer2 = prompt('Do I love my old job (Project Engineer) ?');

if (answer2.toLowerCase() == 'yes') {
  alert ('Bravoo! I really love Projects!');
  score +=1

} else {
  alert ('Oops! I do love project engineering');

  } else {
    alert('Oops! you don\'t know my name');
    console.log('Wrong answer');
  }
}
function Q3(){
  var answer2 = prompt('Do I love my old job (Project Engineer) ?');
  console.log('User answer was ' + answer2.toLowerCase());

  if (answer2.toLowerCase() === 'yes') {
    alert('Bravoo! I really love Projects!');
    console.log('Correct Answer');
    score += 1;

var answer3 = prompt ('Do I manage the content of my repositories or someone else do it for me?');

if (answer3.toLowerCase() === 'yes') {
  alert ('yeah I manage them by myself!');
  score +=1

} else {
  alert ('that\'s impossible to let someone manage my repo ;)');

  } else {
    alert('Oops! I do love project engineering');
    console.log('Wrong answer');
  }
}
function Q4(){

var answer4 = prompt ('will I leave project engineering and stack with only programming??');

if (answer4.toLowerCase() === 'yes') {
  alert ('No! I want to combine between them both');

} else {
  alert ('Sure i will not, I love them both');
  score +=1
  var answer3 = prompt('Do I manage the content of my repositories or someone else do it for me?');
  console.log('User answer was ' + answer3.toLowerCase());

  if (answer3.toLowerCase() === 'yes') {
    alert('yeah I manage them by myself!');
    console.log('Correct Answer');
    score += 1;

  } else {
    alert('that\'s impossible to let someone manage my repo ;)');
    console.log('Wrong answer');
  }
}
function Q5(){
  var answer4 = prompt('will I leave project engineering and stack with only programming??');
  console.log('User answer was ' + answer4.toLowerCase());

  if (answer4.toLowerCase() === 'yes') {
    alert('No! I want to combine between them both');
    console.log('wrong Answer');

  } else {
    alert('Sure i will not, I love them both');
    console.log('Correct answer');
    score += 1;
  }
}
function Q6() {
  var answer5 = prompt('Did I studied in stanford university?');
  console.log('User answer was ' + answer5.toLowerCase());

var answer5 = prompt ('Did I studied in stanford university?');

if (answer5.toLowerCase() === 'yes') {
  alert ('No, it is University Of Jordan');

} else {
  alert ('exactly! it was University Of Jordan ');
  score +=1

  if (answer5.toLowerCase() === 'yes') {
    alert('No, it is University Of Jordan');
    console.log('Wrong Answer');

  } else {
    alert('exactly! it was University Of Jordan ');
    console.log('Correct answer');
    score += 1;

  }
}
alert('Good Job ' + username + '!');

function Q7() {
  var guess = prompt('Can You Guess this is the question number what? you have only four attempts');
  var guessint = parseInt(guess);

var questionNumber = 6;
for (var attempt = 1; attempt <= 4; attempt++) {
  var still = 4 - attempt
  
  if (guessint > questionNumber) {

    alert ('Noo try to pick smaller number');
         guess = prompt ('Can You Guess this is the question number what? you still have ' + still + 'attempts');
     guessint = parseInt(guess);

  console.log('the user input Number is ' + guess);
  var questionNumber = 6;
  console.log(typeof (guess));
  for (var attempt = 1; attempt <= 4; attempt++) {
    var still = 4 - attempt;
    console.log('user still have ' + still + ' attempts');

    if (guessint > questionNumber) {

      alert('Noo try to pick smaller number');
      console.log('user\'s Answer smaller than the correct answer');
      guess = prompt('Can You Guess this is the question number what? you still have ' + still + 'attempts');
      guessint = parseInt(guess);

    } else if (guessint < questionNumber) {

    alert ('Noo try to pick bigger number');
         guess = prompt ('Can You Guess this is the question number what? you still have ' + still + 'attempts');
     guessint = parseInt(guess);
   }

    else if (guessint === questionNumber) {

    alert ('Exactly! you\'r answering the sixth question now!');
        score +=1

      alert('Noo try to pick bigger number');
      console.log('user\'s Answer smaller than the correct answer');
      guess = prompt('Can You Guess this is the question number what? you still have ' + still + 'attempts');
      guessint = parseInt(guess);
    }

    else if (guessint === questionNumber) {

      alert('Exactly! you\'r answering the sixth question now!');
      console.log('Correct Answer');
      score += 1;

      break;
    } else {
      alert('you still have ' + still + ' attemptes');

    }
    console.log('this is attempt number ' + attempt);
  }
  }


var usercarmodel = prompt ('I love many models of cars, can you guess one of them?').toLowerCase();
var MyCarModel = ['audi', 'bmw', 'toyota', 'hyundai' ] ;

for ( var attempt = 0; attempt < 5; attempt++)
{
  if (usercarmodel === MyCarModel[0] || usercarmodel === MyCarModel[1] || usercarmodel === MyCarModel[2]
     || usercarmodel === MyCarModel[3] )
  {
        score +=1

    alert ('Bravooo ' + username + ' !! Yeah! I love it' );
    break;
  } else
  {
        usercarmodel = prompt ('noo I don\'t like it .. try another model of cars').toLowerCase();


}
function Q8(){
  var usercarmodel = prompt('I love many models of cars, can you guess one of them?').toLowerCase();
  var MyCarModel = ['audi', 'bmw', 'toyota', 'hyundai'];

  for (attempt = 0; attempt < 5; attempt++) {
    if (usercarmodel === MyCarModel[0] || usercarmodel === MyCarModel[1] || usercarmodel === MyCarModel[2]
    || usercarmodel === MyCarModel[3]) {
      console.log('correct answer');
      score += 1;

      alert('Bravooo ' + username + ' !! Yeah! I love it');
      break;
    } else {
      console.log('your answer is incorrect');
      usercarmodel = prompt('noo I don\'t like it .. try another model of cars').toLowerCase();

    }
  }
  alert('The car which I love are ' + MyCarModel[0] + ' & ' + MyCarModel[1] + ' & ' + MyCarModel[2] + ' & ' + MyCarModel[3]);
}
alert ('The car which I love are ' + MyCarModel[0] + ' & ' + MyCarModel[1] + ' & ' + MyCarModel[2] + ' & ' + MyCarModel[3]);

alert ('your score is '+ score + ' out of 7');
if (score >= 5){
  alert ('Congrats ' + username + '!');
} else {
  alert ('you can play it many times if you want')
}

function userscore(){
  alert('your score is ' + score + ' out of 7');
  if (score >= 5) {
    alert('Congrats' + username);
  } else {
    alert('you can play it many times if you want');
  }
}
Q1();
Q2();
Q3();
Q4();
Q5();
Q6();
Q7();
Q8();
userscore();
/*switch (usercarmodel) {
  case MyCarModel[0]:
    console.log('Yeah! I love ' + MyCarModel[0]);
    alert ('Bravooo ' + username + ' !! Yeah! I love ' + MyCarModel[0]);
    break;
  case MyCarModel[1]:
    console.log('Yeah! I love ' + MyCarModel[1]);
    alert ('Bravooo ' + username + ' !! Yeah! I love ' + MyCarModel[1]);
    break;
  case MyCarModel[2]:
    console.log('Yeah! I love ' + MyCarModel[2]);
    alert ('Bravooo ' + username + ' !! Yeah! I love ' + MyCarModel[2]);
    break;
  case MyCarModel[3]:
    console.log('Yeah! I love ' + MyCarModel[3]);
    alert ('Bravooo ' + username + ' !! Yeah! I love ' + MyCarModel[3]);
    break;
  default:
    console.log('your answer is incorrect');
    usercarmodel = prompt ('noo I don\'t like it .. try another model of cars').toLowerCase();

  }


alert ('The car which I love are ' + MyCarModel[0] + ' & ' + MyCarModel[1] + ' & ' + MyCarModel[2] + ' & ' + MyCarModel[3]);
*/


