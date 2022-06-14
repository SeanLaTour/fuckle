import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Key from "./key";

interface KeyboardProps {
  addText: Function;
  textObj: TextObj;
  onClick: Function;
  currentLine: number;
}

interface TextObj {
  text: string;
  setText: Function;
}

const Keyboard: React.FC<KeyboardProps> = (props) => {
  const addLetterToArray = (letter: string) => {
    if (props.textObj.text.length >= 4) return;
    console.log(props.textObj.text);
    let tempArray = [...props.textObj.text, letter];
    const string = tempArray.join("");
    console.log(string);
    props.addText(string);
  };

  const removeLetterFromArray = () => {
    if (props.textObj.text.length < 1) return;
    console.log(props.textObj.text);
    const tempText = props.textObj.text.slice(0, props.textObj.text.length - 1);
    console.log(tempText);
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
        <Key setLetter={addLetterToArray} letter={"Q"} />
        <Key setLetter={addLetterToArray} letter={"W"} />
        <Key setLetter={addLetterToArray} letter={"E"} />
        <Key setLetter={addLetterToArray} letter={"R"} />
        <Key setLetter={addLetterToArray} letter={"T"} />
        <Key setLetter={addLetterToArray} letter={"Y"} />
        <Key setLetter={addLetterToArray} letter={"U"} />
        <Key setLetter={addLetterToArray} letter={"I"} />
        <Key setLetter={addLetterToArray} letter={"O"} />
        <Key setLetter={addLetterToArray} letter={"P"} />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"33%"}
        paddingInline={"4vw"}
        paddingBlock=".6rem"
      >
        <Key setLetter={addLetterToArray} letter={"A"} />
        <Key setLetter={addLetterToArray} letter={"S"} />
        <Key setLetter={addLetterToArray} letter={"D"} />
        <Key setLetter={addLetterToArray} letter={"F"} />
        <Key setLetter={addLetterToArray} letter={"G"} />
        <Key setLetter={addLetterToArray} letter={"H"} />
        <Key setLetter={addLetterToArray} letter={"J"} />
        <Key setLetter={addLetterToArray} letter={"K"} />
        <Key setLetter={addLetterToArray} letter={"L"} />
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
          onClick={props.onClick}
          setLetter={addLetterToArray}
          letter={"Enter"}
          thickKey={true}
        />
        <Key setLetter={addLetterToArray} letter={"Z"} />
        <Key setLetter={addLetterToArray} letter={"X"} />
        <Key setLetter={addLetterToArray} letter={"C"} />
        <Key setLetter={addLetterToArray} letter={"V"} />
        <Key setLetter={addLetterToArray} letter={"B"} />
        <Key setLetter={addLetterToArray} letter={"N"} />
        <Key setLetter={addLetterToArray} letter={"M"} />
        <Key setLetter={removeLetterFromArray} letter={"<-"} thickKey={true} />
      </Box>
    </Box>
  );
};

export default Keyboard;
