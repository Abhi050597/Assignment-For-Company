
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function reverseWordsInSentence(sentence) {
    
    let words = sentence.split(" ");
  
  
    let reversedWords = words.map((word)=> {
      return word.split("").reverse().join("");
    });
  

    let reversedSentence = reversedWords.join(" ");
  
    return reversedSentence;
  }
  
  
  rl.question("Enter a sentence: ", function(sentence) {
    let reversedSentence = reverseWordsInSentence(sentence);
    console.log("Reversed sentence: " + reversedSentence);
    
   
    rl.close();
  });