const express = require("express");
const cors = require("cors");
const { JSONRESPONSE } = require("../data");

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "healthy server",
  });
});

app.post("/", (req, res) => {
  // body can be extracted here for future checks
  return res.status(200).json({
    JSONRESPONSE,
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
