var form,game,player,questions;
var database;
var gameState = 0;
var score = 0;
var timer;  
var timeLeft = 15;
var allQuestions;
var bgImage;

function preload(){
    bgImage = loadImage("quizBG2.jpg");

}
function setup(){
    canvas = createCanvas(windowWidth,windowHeight); 
    database = firebase.database();
    game = new Game();
    game.start();
}
function draw(){
background(bgImage);
}