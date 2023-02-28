import fs from "fs";

const filePath = "./data-0.json";
const dataStr = fs.readFileSync(filePath, { encoding: "utf8" });
const datas = JSON.parse(dataStr).winner;

const winCount = {
  rock: 0,
  paper: 0,
  scissor: 0,
};

datas.forEach((d) => {
  const winner = d.rps;
  winCount[winner]++;
});

const winPercentage = {
  rock: 0,
  paper: 0,
  scissor: 0,
};
const totalSample = winCount.rock + winCount.paper + winCount.scissor;

Object.keys(winPercentage).forEach((k) => {
  winPercentage[k] = ((winCount[k] / totalSample) * 100).toFixed(2);
});

console.log(winPercentage);
