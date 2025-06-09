// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import { application } from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    application.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed!!!!", err);
  });
/*
import express from "express";
const app = express();
const port = process.env.PORT || 3000;


/*
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login.</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai baklol</h2>");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      joke: " Because they make up everything!",
    },
    {
      id: 2,
      title: "Why did the scarecrow win an award?",
      joke: " Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "Why don't skeletons fight each other?",
      joke: " They don't have the guts!",
    },
    {
      id: 4,
      title: "What do you call fake spaghetti?",
      joke: " An impasta!",
    },
    {
      id: 5,
      title: "Why did the bicycle fall over?",
      joke: " Because it was two-tired!",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
*/
