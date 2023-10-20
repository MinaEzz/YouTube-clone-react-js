import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "../video card/VideoCard";
import ChannelCard from "../channel card/ChannelCard";

const Videos = ({ videos, justifyCenter }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="center"
      gap={2}
      sx={{ justifyContent: justifyCenter }}
    >
      {videos.map((item, index) => {
        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
