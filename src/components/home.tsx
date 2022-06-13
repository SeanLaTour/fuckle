import {
  Box,
  Input,
  Modal,
  useDisclosure,
  Text,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import TextLine from "./text_line";
import { CUSS_WORDS } from "./cuss_words";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalText, setModalText] = useState("");
  const [textA, setTextA] = useState([]);
  const [textB, setTextB] = useState([]);
  const [textC, setTextC] = useState([]);
  const [textD, setTextD] = useState([]);
  const [textAColors, setTextAColors] = useState([
    "black",
    "black",
    "black",
    "black",
  ]);
  const [textBColors, setTextBColors] = useState([
    "black",
    "black",
    "black",
    "black",
  ]);
  const [textCColors, setTextCColors] = useState([
    "black",
    "black",
    "black",
    "black",
  ]);
  const [textDColors, setTextDColors] = useState([
    "black",
    "black",
    "black",
    "black",
  ]);
  const [currentLine, setCurrentLine] = useState(1);
  const [cussWord, setCussWord] = useState(
    CUSS_WORDS[Math.floor(Math.random() * CUSS_WORDS.length)]
  );

  const translateNumberToText = (number: number) => {
    switch (number) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 3:
        return "four";
    }
  };

  const checkIfMatch = (
    word: string[],
    cussword: string,
    setColors: Function
  ) => {
    const compareWord = cussword.split("");
    const tempColorsArray = [];
    if (word.length !== 4) return;
    if (word.join("") !== cussword) {
      setCurrentLine(currentLine + 1);
    }

    for (let i = 0; i <= 3; i++) {
      if (word[i] === compareWord[i]) {
        tempColorsArray.push("green");
      } else if (cussword.includes(word[i])) {
        tempColorsArray.push("yellow");
      } else {
        tempColorsArray.push("black");
      }
    }
    setColors(tempColorsArray);
    const input = document.querySelector("input");
    if (!input) return;
    input.value = "";
    if (word.join("") === cussword) {
      input.style.display = "none";
      setModalText(
        `You son of a bitch! You did it in ${translateNumberToText(
          currentLine
        )} ${currentLine === 1 ? "try" : "tries"}! Congratulations!`
      );
      setTimeout(() => {
        onOpen();
      }, 2000);
    }
    if (word.join("") !== cussword && currentLine === 4) {
      input.style.display = "none";
      setModalText(
        `You failed! You piece of shit! How could you fail!? The word was ${cussWord}!`
      );
      setTimeout(() => {
        onOpen();
      }, 2000);
    }
  };

  const enterChecker = (line: number) => {
    const input = document.querySelector("input");
    if (!input) return;
    input.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        switch (line) {
          case 1:
            checkIfMatch(textA, cussWord, setTextAColors);
            break;
          case 2:
            checkIfMatch(textB, cussWord, setTextBColors);
          case 3:
            checkIfMatch(textC, cussWord, setTextCColors);
          case 4:
            checkIfMatch(textD, cussWord, setTextDColors);
        }
      }
    });
  };
  enterChecker(currentLine);

  const textInput = (word: string, setFunction: Function) => {
    const wordArray = word.toUpperCase().split("");
    setFunction(wordArray);
  };

  const addTextToLine = (word: string) => {
    switch (currentLine) {
      case 1:
        textInput(word, setTextA);
        break;
      case 2:
        textInput(word, setTextB);
        break;
      case 3:
        textInput(word, setTextC);
        break;
      case 4:
        textInput(word, setTextD);
        break;
    }
  };

  return (
    <>
      <Input
        zIndex={2}
        onChange={(e) => addTextToLine(e.target.value)}
        position={"fixed"}
        opacity={"0"}
        width={"100vw"}
        height={"100vh"}
        top={"0"}
        left={"0"}
        maxLength={4}
      />
      <Box
        padding="2rem"
        flexDirection={"column"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
        height={"100vh"}
        backgroundColor={"#000"}
      >
        <Text
          fontFamily={"monospace"}
          fontSize={"4rem"}
          marginBottom={"2rem"}
          color={"white"}
        >
          FUCKLE
        </Text>
        <Box
          padding={"0.5rem"}
          paddingBlock={"2rem"}
          width={"80vw"}
          height={"70vh"}
          borderColor={"white"}
          borderStyle={"solid"}
          borderRadius={"5px"}
          borderWidth={"2px"}
        >
          <TextLine
            active={currentLine === 1 ? true : false}
            textColors={textAColors}
            textArray={textA}
          />
          <TextLine
            active={currentLine === 2 ? true : false}
            textColors={textBColors}
            textArray={textB}
          />
          <TextLine
            active={currentLine === 3 ? true : false}
            textColors={textCColors}
            textArray={textC}
          />
          <TextLine
            active={currentLine === 4 ? true : false}
            textColors={textDColors}
            textArray={textD}
          />
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            zIndex={99}
            alignItems={"center"}
            justifyContent={"center"}
            paddingInline={"2rem"}
            display={"flex"}
            textAlign={"center"}
          >
            <Box
              display={"flex"}
              borderRadius={"5px"}
              padding="2rem"
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              width={"85vw"}
              borderWidth={"2px"}
              borderColor={"white"}
              height={"20vh"}
              backgroundColor="#111"
            >
              <Text color="white">{modalText}</Text>
              <Button onClick={onClose} marginTop="1rem" color={"white"}>
                Close
              </Button>
            </Box>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Home;
