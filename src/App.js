import * as React from "react";
import { useState } from "react";

import UserInput from "./components/inputs/UserInput";

import { ChakraProvider, TabList, Tabs, Tab } from "@chakra-ui/react";
import Display from "./components/display/Display";

function App(props) {
  const [input, setInput] = useState("");
  // console.log("hello from app.js",input)

  return (
    <ChakraProvider>
      <UserInput input={input} setInput={setInput} />
      <Display thread={input} />
    </ChakraProvider>
  );
}

export default App;
