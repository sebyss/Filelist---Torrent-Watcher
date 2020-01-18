import React from "react";
import { Container, Tab, Tabs } from "native-base";
import { StyleSheet } from "react-native";
import TorrentsSection from "./TorrentsSection";

const ContentSection = () => {
  return (
    <Container>
      <Tabs>
        <Tab
          heading="Torrents"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.tabStyle}
        >
          <TorrentsSection />
        </Tab>
        <Tab
          heading="Watch"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.tabStyle}
        ></Tab>
      </Tabs>
    </Container>
  );
};

export default ContentSection;

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "#1598f4"
  }
});
