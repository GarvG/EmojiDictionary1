import React, { useState } from "react";
import "./styles.css";

var Q1 = "Enter Your Name?";
var heading = "Welcome to The App";
var color = "blue";
// var LikeCounter = 0;

const emojiDic = {
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face"
};
var emoji = Object.keys(emojiDic);
export default function App() {
  // const [LikeCounter, SetLikeCounter] = useState(0);

  // function ClickEventListener() {
  //   var newLike = LikeCounter + 1;
  //   // console.log("Liked " + LikeCounter + " Times");
  //   SetLikeCounter(newLike);
  // }
  // const [userInput, SetuserInput] = useState("");
  // function InputEventListener(event) {
  //   // console.log(event.target.value);
  //   SetuserInput(event.target.value);
  // }
  const [meaning, setmeaning] = useState("");
  function EmojiInput(event) {
    var userInput = event.target.value;
    var meaning = emojiDic[userInput];
    if (meaning === undefined) {
      meaning = "Not Currently in Our DataBase";
    }

    setmeaning(meaning);
  }
  function EmojiCiick(item) {
    var meaning = emojiDic[item];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Emoji Dictinonary</h1>
      <input onChange={EmojiInput}></input>
      <div> {meaning}</div>
      <h3> Emoji we Know </h3>
      {emoji.map(function (item) {
        return (
          <span
            onClick={() => EmojiCiick(item)}
            key={item}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
      {/* <h1 style={{ backgroundColor: color }}>Welcome {heading}</h1>
      <button onClick={ClickEventListener}> LIKE ME!</button>
      {LikeCounter}
      <input onChange={InputEventListener}></input>
      <div>welcome{userInput}</div> */}
    </div>
  );
}
