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
  color: string;
}

const Key: React.FC<KeyProps> = (props) => {
  const [color, setColor] = useState();

  // const colorCodeUsedLetters = (
  //   letters: string,
  //   letter: string,
  //   currentLine: number,
  //   cussword: string
  // ) => {
  //   const sliceNumbers = sliceIndex(currentLine);
  //   console.log(letter)

  //   if (letters.includes(letter)) {
  //     const word = letters.split("").slice(sliceNumbers[0], sliceNumbers[1]);
  //     const indexCuss = cussword.split("").indexOf(letter);
  //     const indexWord = word.indexOf(letter);
  //     // if (letters.slice(0, sliceNumbers[0]).includes(letter)) return;
  //     setColor("#333");
  //     if (props.letter === "U") {
  //       console.log("letters",letters.slice(0, sliceNumbers[0]).includes(letter))
  //       console.log("here")}
  //     if (indexWord === indexCuss && indexCuss !== -1) {
  //       setColor("green");
  //     } else if (
  //       cussword.includes(letter) &&
  //       !letters.slice(0, sliceNumbers[0]).includes(letter)
  //     ) {
  //       setColor("yellow");
  //     }
  //   }
  // };

  useEffect(() => {
    setColor(props.color);
  }, [props.currentLine]);

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
