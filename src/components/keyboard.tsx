import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Key from "./key";

interface KeyboardProps {
  addText: Function;
  textObj: TextObj;
  onClick: Function;
  currentLine: number;
  allUsedLetters: string;
  cussword: string;
}

interface TextObj {
  text: string;
  setText: Function;
}

const Keyboard: React.FC<KeyboardProps> = (props) => {
  const addLetterToArray = (letter: string) => {
    if (!props.textObj) return;
    if (props.textObj.text.length >= 4) return;
    let tempArray = [...props.textObj.text, letter];
    const string = tempArray.join("");
    props.addText(string);
  };

  const removeLetterFromArray = () => {
    if (!props.textObj) return;
    if (props.textObj.text.length < 1) return;
    const tempText = props.textObj.text.slice(0, props.textObj.text.length - 1);
    props.textObj.setText(tempText);
  };

  return (
    <Box
      position={"fixed"}
      bottom="0"
      backgroundColor={"#222"}
      height="25%"
      width={"100%"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"33%"}
        paddingBlock=".6rem"
      >
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"Q"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"W"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"E"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"R"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"T"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"Y"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"U"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"I"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"O"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"P"}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"33%"}
        paddingInline={"4vw"}
        paddingBlock=".6rem"
      >
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"A"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"S"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"D"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"F"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"G"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"H"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"J"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"K"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"L"}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"33%"}
        paddingBlock=".6rem"
      >
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          onClick={props.onClick}
          setLetter={addLetterToArray}
          letter={"Enter"}
          thickKey={true}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"Z"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"X"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"C"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"V"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"B"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"N"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"M"}
        />
        <Key
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={removeLetterFromArray}
          letter={"<-"}
          thickKey={true}
        />
      </Box>
    </Box>
  );
};

export default Keyboard;
