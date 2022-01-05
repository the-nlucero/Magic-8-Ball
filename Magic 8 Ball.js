let userName = 'Nate';
let userQuestion = 'Magic 8 Ball...Will I become Rich One Day?';


//Hello To User (if name exsists) or a General Hello!
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//Prints out the question being asked
console.log(`\nThe question ${userName} asked was: ${userQuestion}`);

//Magic 8 Ball Intro
console.log(`\nTHE ALMIGHTY 8 BALL SAYS... `);

//Magic 8 Ball Number Random Number Generator
const randomNumber = Math.floor(Math.random() * 8);

//Once a number is generated output corresponding fortune
switch(randomNumber)
{
  case 1:
  console.log('Signs point to yes');
  break;

  case 2:
  console.log('It is decidedly so');
  break;

  case 3:
  console.log('Do not count on it');
  break;
  
  case 4:
  console.log('It is certain');
  break; 

  case 5:
  console.log('Reply hazy try again');
  break;

  case 6:
  console.log('Cannot predict now');
  break;

  case 7:
  console.log('My sources say no');
  break;

  case 8:
  console.log('Outlook not so good');
  break;
}