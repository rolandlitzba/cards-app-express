const express = require("express");
const filePath = __dirname + "/cards.json";
const fs = require("fs");
const app = express();
const uid = require("uid");
app.use(express.json());
app.use(express.static("./dist"));

fs.readFile(filePath, "utf8", (err, text) => {
  return (cards = JSON.parse(text));
});

let cards = [
  {
    title: "Comment 1",
    description: "Ideas about timetravel",
    category: "Science",
    id: "zwanzig"
  },
  {
    title: "Comment 2",
    description: "Scientific proofs of timetravel",
    category: "Science",
    id: 1
  },
  {
    title: "Comment 3",
    description: "Hobbies and so on",
    category: "Private",
    id: 2
  }
];

app.get("/cards", (req, res) => {
  res.json(cards);
});

app.get("/cards/:id", (req, res) => {
  const { id } = req.params;
  res.json(cards.find(card => card.id === Number(id)));
});

app.post("/cards", (req, res) => {
  const card = { ...req.body, id: uid() };
  cards.push(card);
  res.json(cards);
  writeFile(cards);
});

app.delete("/cards/:id", (req, res) => {
  let { id } = req.params;
  const index = cards.findIndex(card => card.id === id);
  const returnCards = [...cards.slice(0, index), ...cards.slice(index + 1)];
  writeFile(returnCards);
  res.json(returnCards);
});

app.listen(3000, err => {
  err ? console.log(err) : console.log("Server ready");
});

function writeFile(newContent) {
  fs.writeFile(filePath, JSON.stringify(newContent), err => {
    console.log("File created", filePath);
  });
}
