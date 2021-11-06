const quotes = [
  {
    quote : 'It is never too late to give up our prejudices.',
    author : 'Henry David Thoreau'
  },
  {
    quote : 'Animals are such agreeable friends - they ask no questions, they pass no criticisms.',
    author : 'George Eliot'
  },
  {
    quote : "Honesty pays, but it doesn't seem to pay enough to suit some people.",
    author : 'Kin Hubbard'
  },
  {
    quote : 'Art, like morality, consists of drawing the line somewhere.',
    author : 'G. K. Chesterton'
  },
  {
    quote : 'Write injuries in dust, benefits in marble.',
    author : 'Benjamin Franklin'
  },
  {
    quote : 'This time, like all times, is a very good one, if we but know what to do with it.',
    author : 'Ralph Waldo Emerson'
  },
  {
    quote : 'To want to be what one can be is purpose in life.',
    author : 'Cynthia Ozick'
  },
  {
    quote : 'We simply attempt to be fearful when others are greedy and to be greedy only when others are fearful.',
    author : 'Warren Buffett'
  },
  {
    quote : 'If this is coffee, please bring me some tea; but if this is tea, please bring me some coffee.',
    author : 'Abraham Lincoln'
  }, 
  {
    quote : "You can't wait for inspiration. You have to go after it with a club",
    author : 'Jack London'
  }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');


//Math.random();
//0-1사이의 숫자를 랜덤으로 출력함;

//Math.round();
//반올림

//Math.ceil();
//숫자를 천장(ceil)까지 높여준다.
//무조건 올려침
//1.1 -> 2, 1.01 -> 2

//Math.floor();
//숫자를 마루까지 내린다. 
//무조건 내려침
//1.1 -> 1, 1.9 -> 1

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.textContent = todaysQuote.quote;
author.textContent = todaysQuote.author;