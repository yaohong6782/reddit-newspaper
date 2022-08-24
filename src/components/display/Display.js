import { getDefaultNormalizer } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import {
  SimpleGrid,
  Box,
  Image,
  AspectRatio,
  Container,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import styles from "./Display.module.css";

const Display = (props) => {
  const [listOfArticles, setListOfArticles] = useState([]);

  const [validReddit, setIsValidReddit] = useState(true);

  let userThread = props.thread;
  if (props.thread !== "") {
    userThread = props.thread;
  } else {
    userThread = "dota2";
  }

  const url = `https://www.reddit.com/r/${userThread}/hot.json?&limit=15`;

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url, {
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setListOfArticles(data["data"]["children"]))
        .catch((err) => console.log(err));
    };

    fetchData().catch(console.error());
  }, [url, validReddit]);

  
  console.log(listOfArticles);
  const concatReddit = "https://www.reddit.com";
  
  return (
    <div>
        {/* {!validReddit && 
        <Alert>
            <AlertIcon/>
            <AlertTitle>Invalid thread</AlertTitle>
        </Alert>} */}
      <SimpleGrid columns={1} spacing={2}>
        <Tabs>
          <TabList>
            <Tab>Dota 2</Tab>
            <Tab>Global Offensive</Tab>
            <Tab>Livestream Fails</Tab>
            <Tab>GTA RP</Tab>
            <Tab></Tab>
          </TabList>

          <TabPanels>
            <TabPanel>{}</TabPanel>
            <TabPanel>{"counter strike"}</TabPanel>
          </TabPanels>
        </Tabs>
        {listOfArticles.length > 0 &&
          listOfArticles.map((articles, idx) => {
            return (
              <Container
                className={styles.containerWrapper}
                padding="2"
                key={idx}
              >
                <Box
                  padding="4"
                  maxW={"lg"}
                  borderWidth="4px"
                  borderRadius="lg"
                  key={idx}
                >
                  <div className={styles.redditLinkWrapper}>
                    <a
                      className={styles.redditLink}
                      href={concatReddit + articles.data.permalink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {articles.data.title}
                    </a>
                  </div>

                  {articles.data.domain === "i.redd.it" ? (
                    <Image src={articles.data.url} maxW={"sm"} />
                  ) : articles.data.domain === "v.redd.it" ? (
                    <AspectRatio>
                      <iframe
                        allowFullScreen
                        title={idx}
                        src={articles.data.media.reddit_video.fallback_url}
                      />
                    </AspectRatio>
                  ) : (
                    ""
                  )}

                  <div>
                    <b>Upvotes : </b> {articles.data.score}
                  </div>
                  <div>
                    <b>Comments : </b>
                    {articles.data.num_comments}
                  </div>
                </Box>
              </Container>
            );
          })}
      </SimpleGrid>
    </div>
  );
};

export default Display;
