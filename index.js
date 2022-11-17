const chalk = require('chalk');
var readlineSync = require("readline-sync");

var score = 0 ;

var userName = readlineSync.question("What's Your Name ? : ");

console.log("\nHello "+chalk.whiteBright.bold(userName)+" ,\n");
console.log(chalk.green.bgMagenta.bold('Welcome to My India Quiz\n'));

function play(question,answer){
  var userAns = readlineSync.question(chalk.blueBright.bold(question,"\n:- "));
  if (userAns.toLowerCase()===answer.toLowerCase()){
    console.log(chalk.red.bold("\nAbsolutely Correct !\n"));
    score = score + 2;
  }else{
    console.log("\nYou're Wrong ! Correct Option was : ",chalk.red.bold(answer));
    score = score - 2;
  }
  console.log("\nYour Score is : ",score,"\n");
  console.log("______________________________________\n");
}

var questions = [{
  question : "1] Who Was First PM Of India ?\n\na] Indira Gandhi\nb] Narendra Modi\nc] Jawaharlal Nehru\nd] Rajiv Gandhi\n",
  answer : "c",
},{
  question : "2] What is the capital city of India ?\n\na] Delhi\nb] Mumbai\nc] Kolkata\nd] Chennai\n",
  answer : "a",
},{
  question : "3] Who founded the Indian National Army ?\n\na] Subhas Chandra Bose\nb] Mohan Singh\nc] Bhagat Singh\nd] Chandra Shekhar Azad\n",
  answer : "a",
},{
  question : "4] Which is the national sport of India ?\n\na] Cricket\nb] Football\nc] Kabaddi\nd] Hockey\n",
  answer : "d",
},{
  question : "5] Name of the first university of India ?\n\na] Taxshila University\nb] Nalanda University\nc] Jawahar University\nd] Dronacharya University\n",
  answer : "b",
},{
  question : "6] Name of First Indian to won Nobel Prize ?\n\na] R.N. Shukla\nb] V.R. Gill\nc] Rabindranath Tagore\nd] D.B. Mahawar\n",
  answer : "c",
},{
  question : "7] Name of first Indian to get Bharat Ratna Award ?\n\na] Dr. S Radhakrishnan\nb] Pranav Mukharji\nc] Gyan Jail Singh\nd] Rajendra Prasad\n",
  answer : "a",
},{
  question : "8] India's first woman president ?\n\na] Sushma Swaraj\nb] Indira Gandhi\nc] Smt. Pratibha Patil\nd] Sarojani Naidu\n",
  answer : "c",
},{
  question : "9] Name of the first woman of India to won Miss Universe title  ?\n\na] Shri Devi\nb] Sushmita Sen\nc] Aishwarya Rai\nd] Kajol\n",
  answer : "b",
},{
  question : "10] Who is the chief architect of the Indian Constitution ?\n\na] Abul Kalam Azad\nb] Jawaharlal Nehru\nc] Sardar Vallabhbhai Patel \nd] Dr.Bhimrao Ambedkar\n",
  answer : "d",
}]

for(var i=0;i<questions.length;i++){
  var currentQues = questions[i];
  play(currentQues.question,currentQues.answer);
}

if (score >= 10){
    console.log("\nHurray ! You Did Fabulous.\nYour Score was : " + chalk.red.bold(score));
  }else{
    console.log("\nYou Might Need to Learn More About India.\nYour Score was : " + chalk.red.bold(score));
  }