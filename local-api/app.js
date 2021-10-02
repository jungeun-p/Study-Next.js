// npm install express cors

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;
const { posts } = require("./data.js");
app.use(cors());
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => console.timeLog(`server running on ${PORT}`));
