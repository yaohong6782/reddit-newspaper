import { getDefaultNormalizer } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import {
  SimpleGrid,
  Box,
  Image,
  AspectRatio,
  Container,
  Tab, Tabs, TabList, TabPanels, TabPanel
} from "@chakra-ui/react";
import styles from "./Display.module.css";

const Display = (props) => {
  //   console.log(props.thread);
  const [listOfArticles, setListOfArticles] = useState([]);

  //   const url = "https://fakestoreapi.com/products";

  let userThread = props.thread;
  if (props.thread !== "") {
    userThread = props.thread;
  } else {
    userThread = "dota2";
  }

  const url = `https://www.reddit.com/r/${userThread}/hot.json?&limit=10`;

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url, {
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setListOfArticles(data["data"]["children"]));
    };

    fetchData().catch(console.error);
  }, [url]);

  console.log(listOfArticles);
  const concatReddit = "https://www.reddit.com";

  return (
    <div>
      <SimpleGrid columns={1} spacing={2}>
      <Tabs>
        <TabList>
          <Tab>Dota 2</Tab>
          <Tab>Global Offensive</Tab>
          <Tab>Livestream Fails</Tab>
          <Tab>GTA RP Clips</Tab>
          <Tab></Tab>
        </TabList>

        <TabPanels>
            <TabPanel>
                {userThread = "dota2"}
            </TabPanel>
            <TabPanel>
                {userThread = "globaloffensive"}
            </TabPanel>
        </TabPanels>
      </Tabs>
        {listOfArticles.length > 0 &&
          listOfArticles.map((articles, idx) => {
            return (
              <Container padding="2" key={idx}>
                <Box
                  padding="4"
                  maxW={"lg"}
                  borderWidth="4px"
                  borderRadius="lg"
                  key={idx}
                >
                  <div className={styles.reddtLinkWrapper}>
                    <a
                      className={styles.redditLink}
                      href={concatReddit + articles.data.permalink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {articles.data.title}
                    </a>
                  </div>
                  {/* /r/DotA2/comments/wweqxn/atm_in_malaysia/ */}
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
                </Box>
              </Container>
            );
          })}
      </SimpleGrid>
    </div>
  );
};

export default Display;
