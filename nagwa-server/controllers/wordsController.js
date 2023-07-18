const fs = require("fs");

const getWords = (req, res, next) => {
  // read test data json file 
  fs.readFile("./TestData.json", (err, data) => {
    if (err) {
      return res.status(500).json({ err });
    }

    const parsedData = JSON.parse(data);
    const wordList = parsedData["wordList"];

    const result = randomWordList(wordList);

    res.json({ word_list: result });
  });
};

module.exports = {
  getWords,
};

let selectedTypes = new Set(["adjective", "noun", "adverb", "verb"]);
// this function for pick a random word from array and make sure that the word is selected one only
function pickRandomWord(array, result) {
  // this line pick a random index
  let index = Math.floor(Math.random() * array.length);

  const word = array[index];
  
  //   this block make sure that the result include at least 1 adjective, 1 adverb, 1 noun, and 1 verb.
  // make sure that the word is selected one only
  const repeatedWord = result.some((i) => i.id === word.id);
  if ((selectedTypes.size > 0 && !selectedTypes.has(word.pos)) || repeatedWord)
    return pickRandomWord(array, result);

  //  this remove the pos from the types until it be empty
  selectedTypes.delete(word.pos);
  result.push(word);
  return;
}

function randomWordList(array, result = []) {
  for (let index = 0; index < 10; index++) {
    pickRandomWord(array, result);
  }
  return result;
}
