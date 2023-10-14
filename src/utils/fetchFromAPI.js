import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const API_KEY = "88bb2d4d8bmsh8292f3afd68361cp1d8408jsna4faade44f83";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
