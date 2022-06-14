import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface KeyProps {
  letter: string;
  thickKey?: boolean;
  setLetter: Function;
  onClick?: Function;
  currentLine?: number;
  allUsedLetters: string;
  cussword: string;
}

const Key: React.FC<KeyProps> = (props) => {
  const [color, setColor] = useState("#aaa");
  const sliceIndex = (currentLine: number) => {
    switch (currentLine) {
      case 2:
        return [0, 4];
      case 3:
        return [4, 8];
      case 4:
        return [8, 12];
      case 5:
        return [12, 16];
    }
  };

  const colorCodeUsedLetters = (
    letters: string,
    letter: string,
    currentLine: number,
    cussword: string
  ) => {
    const sliceNumbers = sliceIndex(currentLine);

    const letterArray = letters.split("");
    if (letterArray.includes(letter)) {
      setColor("#333");
      console.log(sliceNumbers);
      const word = letters.split("").slice(sliceNumbers[0], sliceNumbers[1]);
      const indexCuss = cussword.split("").indexOf(letter);
      const indexWord = word.indexOf(letter);
      console.log(letter);
      console.log("word", word, "cuss", cussword.split(""));
      console.log("word", indexWord, "cuss", indexCuss);
      if (cussword.includes(letter)) {
        setColor("yellow");
      }
      if (indexWord == indexCuss && indexCuss !== -1) {
        setColor("green");
      }
    }
  };

  useEffect(() => {
    colorCodeUsedLetters(
      props.allUsedLetters,
      props.letter,
      props.currentLine,
      props.cussword
    );
  }, [props.allUsedLetters]);

  return (
    <Box
      onClick={() => {
        props.letter === "Enter"
          ? props.onClick(props.currentLine)
          : props.setLetter(props.letter);
      }}
      transition={"border-color ease .05s"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      borderWidth={".3px"}
      borderColor={"#777"}
      _active={{ borderColor: "white" }}
      marginInline={"0.2rem"}
      borderRadius={"5px"}
      backgroundColor={color}
      width={props.thickKey ? "12vw" : "8vw"}
      height={"100%"}
      color={"white"}
    >
      <Text fontWeight={"bold"} color={"white"}>
        {props.letter}
      </Text>
    </Box>
  );
};

export default Key;
