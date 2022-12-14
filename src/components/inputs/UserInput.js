import React, { useState } from "react";

import { Input, FormControl, FormLabel, Button } from "@chakra-ui/react";
import Display from "../display/Display";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  //   const [userInput, setUserInput] = useState("");
  const { input, setInput } = props;

  const [userInput, setUserInput] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(userInput);
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={onSubmitHandler}>
        <FormControl>
          <Input
            type="text"
            width="auto"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Sub-reddits"
            className={styles.inputWrapper}
          />
          
          <Button className={styles.buttonWrapper} type="submit">
            Search
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default UserInput;
