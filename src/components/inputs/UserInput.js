import React, { useState } from "react";

import { Input, FormControl, FormLabel, Button } from "@chakra-ui/react";
import Display from "../display/Display";

const UserInput = (props) => {
  //   const [userInput, setUserInput] = useState("");
  const { input, setInput } = props;

  const [userInput, setUserInput] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(userInput)
  };

  const subRedditHandler = (userEnteredThread) => {};
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <FormControl>
          <FormLabel>Enter your reddit thread</FormLabel>
          <Input
            type="text"
            width="auto"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Sub-reddits"
          />

          <Button type="submit">Click</Button>
        </FormControl>
      </form>
    </div>
  );
};

export default UserInput;
