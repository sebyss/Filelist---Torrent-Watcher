import React, { useState } from "react";
import {
  Container,
  Icon,
  Content,
  Form,
  Item,
  Input,
  List,
  ListItem,
  Left,
  Right,
  Body,
  Button,
  Spinner
} from "native-base";

import { Text, Image, View } from "react-native";
import filelistEndpoints from "../api/filelistEndpoints";

const getImage = category => {
  if (category === "Filme SD") {
    return <Image source={require("../images/sd.png")} />;
  }
  if (category === "Filme DVD") {
    return <Image source={require("../images/dvd.png")} />;
  }
  if (category === "Filme DVD-RO") {
    return <Image source={require("../images/dvd-ro.png")} />;
  }
  if (category === "Filme HD") {
    return <Image source={require("../images/hd.png")} />;
  }
  if (category === "FLAC") {
    return <Image source={require("../images/flac.png")} />;
  }
  if (category === "Filme 4K") {
    return <Image source={require("../images/4k.png")} />;
  }
  if (category === "XXX") {
    return <Image source={require("../images/xxx.png")} />;
  }
  if (category === "Programe") {
    return <Image source={require("../images/apps.png")} />;
  }
  if (category === "Jocuri PC") {
    return <Image source={require("../images/games.png")} />;
  }
  if (category === "Jocuri Console") {
    return <Image source={require("../images/console.png")} />;
  }
  if (category === "Audio") {
    return <Image source={require("../images/music.png")} />;
  }
  if (category === "Videoclip") {
    return <Image source={require("../images/vids.png")} />;
  }
  if (category === "Sport") {
    return <Image source={require("../images/sport.png")} />;
  }
  if (category === "TV") {
    return <Icon name="ios-bell" />;
  }
  if (category === "Desene") {
    return <Image source={require("../images/cartoons.png")} />;
  }
  if (category === "Docs") {
    return <Image source={require("../images/docs.png")} />;
  }
  if (category === "Linux") {
    return <Image source={require("../images/linux.png")} />;
  }
  if (category === "Diverse") {
    return <Image source={require("../images/misc.png")} />;
  }
  if (category === "Filme HD-RO") {
    return <Image source={require("../images/hd-ro.png")} />;
  }
  if (category === "Filme Blu-Ray") {
    return <Image source={require("../images/bluray.png")} />;
  }
  if (category === "Seriale HD") {
    return <Image source={require("../images/hdtv.png")} />;
  }
  if (category === "Mobile") {
    return <Image source={require("../images/mobile.png")} />;
  }
  if (category === "Seriale SD") {
    return <Image source={require("../images/sdtv.png")} />;
  }
  if (category === "Anime") {
    return <Image source={require("../images/anime.png")} />;
  }
  if (category === "Filme 3D") {
    return <Image source={require("../images/3d.png")} />;
  }
  if (category === "Filme 4K Blu-Ray") {
    return <Image source={require("../images/4kBD.png")} />;
  }
  if (category === "Seriale 4K") {
    return <Image source={require("../images/4ks.png")} />;
  }

  return <Icon name="ios-bell" />;
};

const TorrentsSection = () => {
  const [searchString, setSearchString] = useState("");
  const [torrentList, setTorrentList] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchTorrent = async () => {
    setLoading(true);
    const results = await filelistEndpoints.searchTorrent(searchString);
    setTorrentList(results.data);
    setLoading(false);
  };

  if (loading) {
    return (
      <View style={{ height: "100%", paddingTop: "50%" }}>
        <Spinner color="#1598f4" />
      </View>
    );
  }

  return (
    <React.Fragment>
      <Container>
        <Content>
          <Form style={{ paddingBottom: 10 }}>
            <Item>
              <Input
                placeholder="Search torrent"
                value={searchString}
                onChange={e => setSearchString(e.nativeEvent.text)}
              />

              <Icon
                name="ios-search"
                onPress={() => searchTorrent()}
                style={{ marginRight: 20 }}
              />
            </Item>
          </Form>

          {torrentList && (
            <React.Fragment>
              <Text
                style={{ paddingLeft: 15, fontSize: 20, fontWeight: "bold" }}
              >
                Results:
              </Text>

              <List>
                {torrentList.map(e => (
                  <ListItem thumbnail>
                    <Left>{getImage(e.category)}</Left>
                    <Body>
                      <Text>{e.name}</Text>
                      <Text></Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text>{e.leechers}</Text>
                      </Button>
                    </Right>
                  </ListItem>
                ))}
              </List>
            </React.Fragment>
          )}
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default TorrentsSection;
