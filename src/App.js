import React, { useState } from "react";
import Box from "./components/Box";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import History from "./components/History";

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
};

function App() {
  let [item, setItem] = useState("");
  let [computerItem, setComputerItem] = useState("");
  let [uRes, setUserRes] = useState("");
  let [compRes, setComputerRes] = useState("");
  let [uUrl, setUserUrl] = useState(
    "https://media.istockphoto.com/vectors/start-icon-vector-id516367852?k=6&m=516367852&s=170667a&w=0&h=tl2yxcny2saPXChPSygJAos6b0Y7JSkIdp8DvNZ-_Gc="
  );
  let [compUrl, setComputerUrl] = useState(
    "https://media.istockphoto.com/vectors/start-icon-vector-id516367852?k=6&m=516367852&s=170667a&w=0&h=tl2yxcny2saPXChPSygJAos6b0Y7JSkIdp8DvNZ-_Gc="
  );
  let [resHistory, setResHistory] = useState([]);

  const updateHistory = (uInRes) => {
    setResHistory([...resHistory, uInRes]);
  };

  const selectItem = (clickedItem) => {
    let randNum = Math.floor(Math.random() * 9 + 1);
    let computerChoice = "";
    let uPic = "";
    let compPic = "";
    let uInRes = "";
    let compInRes = "";

    if (randNum <= 3) {
      computerChoice = "rock";
    } else if (randNum <= 6) {
      computerChoice = "scissors";
    } else {
      computerChoice = "paper";
    }

    if (clickedItem == "rock") {
      setUserUrl((uUrl = choices.rock));
    } else if (clickedItem == "paper") {
      setUserUrl((uUrl = choices.paper));
    } else {
      setUserUrl((uUrl = choices.scissors));
    }

    if (computerChoice == "rock") {
      setComputerUrl((compUrl = choices.rock));
    } else if (computerChoice == "paper") {
      setComputerUrl((compUrl = choices.paper));
    } else {
      setComputerUrl((compUrl = choices.scissors));
    }

    if (computerChoice == clickedItem) {
      uInRes = "tie";
      compInRes = "tie";
    } else if (clickedItem == "paper" && computerChoice == "rock") {
      uInRes = "winner";
      compInRes = "loser";
    } else if (clickedItem == "paper" && computerChoice == "scissors") {
      uInRes = "winner";
      compInRes = "loser";
    } else if (clickedItem == "scissors" && computerChoice == "rock") {
      uInRes = "loser";
      compInRes = "winner";
    } else if (clickedItem == "scissors" && computerChoice == "paper") {
      uInRes = "winner";
      compInRes = "loser";
    } else if (clickedItem == "rock" && computerChoice == "paper") {
      uInRes = "loser";
      compInRes = "winner";
    } else {
      uInRes = "winner";
      compInRes = "loser";
    }

    updateHistory(uInRes);
    setUserRes(uInRes);
    setComputerRes(compInRes);
    setItem(clickedItem);
    setComputerItem(computerChoice);
  };
  return (
    <div className="container">
      <div className="playArea">
        <div className="resArea">
          <Box title="You" imgURL={uUrl} winner={uRes} item={item} />
          <Box
            title="Computer"
            imgURL={compUrl}
            winner={compRes}
            item={computerItem}
          />
        </div>
        <h3 class="text-center">Your choice:</h3>
        <div className="buttonArea">
          <button onClick={() => selectItem("rock")}>Rock</button>
          <button onClick={() => selectItem("scissors")}>Scissors</button>
          <button onClick={() => selectItem("paper")}>Paper</button>
        </div>
      </div>
      <div className="historyArea">
        <h2>History</h2>
        <History data={resHistory}></History>
      </div>
    </div>
  );
}

export default App;
