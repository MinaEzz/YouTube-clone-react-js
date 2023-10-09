import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
// components
import Navbar from "./components/navbar/Navbar.jsx";
import Feed from "./components/feed/Feed.jsx";
import VideoDetails from "./components/video details/VideoDetails.jsx";
import Channel from "./components/channel/Channel.jsx";
import SearchFeed from "./components/search feed/SearchFeed.jsx";

const App = () => {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
