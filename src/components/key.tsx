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
      case 1:
        return [0, 3];
      case 2:
        return [4, 7];
      case 3:
        return [8, 11];
      case 4:
        return [12, 15];
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
      console.log(letterArray);
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
