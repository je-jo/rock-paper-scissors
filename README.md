# The Odin Project - Rock, Paper, Scissors

A simple implementation of a "rock paper scissors" game, built for for [The Odin Project](https://www.theodinproject.com).

Currently played from console only.


## Table of contents

- [Overview](#overview)
  - [Instructions](#instructions)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Things to remember](#things-to-remember)
  - [Things to work on](#things-to-work-on)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Instructions

- Begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

- Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock".

  - Use prompt() to get input from the user. Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

  - Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results.

- Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. Loops are covered later, so just call your playRound function 5 times in a row. At this point you should be using console.log() to display the results of each round and the winner at the end.

- Feel free to create more “helper” functions if you think it would be useful.



### Screenshot

No GUI yet, to be added.

### Links

- [Solution](https://github.com/je-jo/rock-paper-scissors)
- Live site to be added.

## My process

### Built with

### Things to remember

If variable name occurs as a function parameter it doesn't need to be declared again with the let keyword. 

### Things to work on

[] Pick computer choice from array
[] Add loop instead of calling function 5 times
[] Add GUI...

### Useful resources

- [Minireset](https://awesomeopensource.com/project/jgthms/minireset.css?categoryPage=29) - A tiny modern CSS reset. 

## Author

- [Github](https://github.com/je-jo)
- [Frontend Mentor](https://www.frontendmentor.io/profile/je-jo)
- [Codepen](https://codepen.io/je-jo)