import * as React from "react";

import UserInput from "./components/inputs/UserInput";

import { ChakraProvider } from "@chakra-ui/react";
import Display from "./components/display/Display";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <UserInput />
      <Display />
    </ChakraProvider>
  );
}

export default App;
