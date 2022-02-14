import axios from "axios";

const KEY = "AIzaSyBxvbKJ0G8ogoYsWLQB1F1Zv_4cH1np8yA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
