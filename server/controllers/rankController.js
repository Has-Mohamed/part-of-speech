const fs = require("fs");

const FILE_PATH = "./TestData.json";

const createRank = (req, res, next) => {

  const newScore = Number(req.body.final_score);

  if (!newScore) {
    return res.status(400).json({ message: "Name and score are required" });
  }

    // read test data json file 

  fs.readFile(FILE_PATH, (err, data) => {
    if (err) {
      return res.status(500).json({ err });
    }

    // calculate studant Rank
    const parsedData = JSON.parse(data);
    const scoresList = parsedData["scoresList"];
    const result = calculateRank(scoresList, newScore);

    // add new score to scores list
    // scoresList.push(newScore);
    // parsedData["scoresList"] = scoresList;
    // const stringifyList = JSON.stringify(parsedData);

    // fs.writeFile(FILE_PATH, stringifyList, (err, ress) => {
    //   res.json({ rank: result });
    // });


    res.json({ rank: result });
  });
  

};

module.exports = {
  createRank,
};

function calculateRank(list, studentScore) {
  let belowScore = 0;
  const listLength = list.length;
  for (let index = 0; index < listLength; index++) {
    const score = list[index];
    if (score < studentScore) belowScore++;
  }
  const roundedScore = (belowScore / listLength) * 100;
  return Math.round(roundedScore);
}
