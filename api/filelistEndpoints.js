import axios from "axios";

const searchTorrent = async name => {
  if (!name) {
    const results = await axios.get(
      `https://filelist.ro/api.php?username=sebynike&passkey=e0a4e4b339af662ce698e8a481e183e1&action=latest-torrents`
    );

    return results;
  }

  const formattedName = name.split(" ").join(".");
  const results = await axios.get(
    `https://filelist.ro/api.php?username=sebynike&passkey=e0a4e4b339af662ce698e8a481e183e1&action=search-torrents&type=name&query=${formattedName}`
  );

  return results;
};

export default {
  searchTorrent
};
