import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "../videos/Videos";
import ChannelCard from "../channel card/ChannelCard";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const Channel = () => {
  const [channelDeatails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    /* fetching the channel details */
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );

    /* fetching the videos */
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channel={channelDeatails} marginTop="-110px" />
      </Box>

      <Box display="flex" p={2} margin="0 40px">
        <Videos videos={videos} justifyCenter="center" />
      </Box>
    </Box>
  );
};

export default Channel;
