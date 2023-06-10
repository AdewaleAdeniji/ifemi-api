const express = require("express");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
import { Request, Response } from "express";

app.use(cors({ origin: "*" }));

// greetings - love letters
var lines = [
  "I can't contain my excitement! Just a few days until your special day. Happy birthday in advance, my love!",
  "Sending you early birthday wishes because I couldn't wait to start celebrating the amazing person you are!",
  "I'm counting down the days until your birthday! Get ready for a celebration filled with love, surprises, and joy.",
  "Consider this message a sneak peek into the birthday wishes and surprises I have in store for you. Happy early birthday, sweetheart!",
  "Although it's in advance, I couldn't resist wishing the love of my life an incredibly happy birthday!",
  "I wanted to be the first to wish you a happy birthday. Get ready for an unforgettable celebration!",
  "Sending you early birthday hugs and kisses to let you know how excited I am for your special day. Happy birthday in advance!",
  "I'm already in birthday mode, eagerly waiting for the day to celebrate the incredible woman you are. Happy early birthday!",
  "Let the countdown begin! Your birthday is just around the corner, and I can't wait to make it the best one yet.",
  "Birthdays should last a whole week, right? Consider this as the start of the week-long celebration of you. Happy early birthday, my love!",
  "I couldn't wait to wish you a happy birthday, so here's an early celebration filled with love and warm wishes!",
  "Even though your birthday is a few days away, I wanted to remind you that you're always in my thoughts and heart. Happy early birthday!",
  "I'm sending you early birthday wishes because you deserve to feel loved and celebrated not just on your special day but every day!",
  "Birthdays are meant to be celebrated, and I couldn't wait any longer to start the celebration for the most incredible person in my life. Happy early birthday!",
  "Consider this early birthday wish a promise of the amazing surprises and moments we'll share when your special day arrives. Happy birthday in advance, my dear!",
  "I couldn't keep my excitement contained. Here's an early birthday wish for the one who fills my life with love and happiness.",
  "In advance, I want to shower you with love, happiness, and unforgettable memories. Happy early birthday, my gorgeous girlfriend!",
  "I couldn't wait until your birthday to tell you how much you mean to me. You are loved, cherished, and celebrated every single day. Happy early birthday!",
  "I'm sending early birthday wishes to ensure that the celebrations last longer and the happiness keeps growing. Get ready for an incredible birthday, my love!",
  "To the love of my life, an early birthday wish filled with love, kisses, and warm embraces. Can't wait to celebrate with you!",
  "Consider this early birthday message a token of my love and appreciation for the incredible person you are. Happy early birthday!",
  "As your birthday approaches, I wanted to remind you how much you mean to me. Happy early birthday, my love!",
  "I couldn't wait for your birthday to express how grateful I am to have you in my life. Wishing you a fantastic early birthday celebration!",
  "Sending you early birthday wishes filled with love, laughter, and all the things that make you happy. Get ready for an incredible day!",
  "I wanted to be the first one to wish you a happy birthday, even if it's in advance. You deserve all the love and joy coming your way!",
  "Consider this early birthday wish a warm-up for the amazing surprises and moments that await you. Happy birthday in advance, sweetheart!",
  "Although your birthday is still a few days away, I'm already in celebration mode. Get ready for a memorable and fun-filled birthday!",
  "In anticipation of your special day, I'm sending you early birthday wishes wrapped in love, happiness, and excitement. Happy early birthday, my dear!",
  "Your birthday is approaching, and my heart is filled with excitement. Here's an early toast to an incredible year ahead. Cheers and happy birthday in advance!",
  "I couldn't wait to celebrate your birthday, so here's an early gesture of love and appreciation. Wishing you an amazing day filled with joy and laughter!",
  "Happy early birthday to the one who lights up my world and fills my life with happiness. Get ready for a birthday celebration like no other!"
];


const total = 30;

const newLiner = "Happy Birthday in advance babe!";

app.get("/message/:kly", (req: any, res: Response) => {
  const index = req.params.kly;
  console.log(index);
  res.status(200).send(lines[index] || lines[0]);
});
console.log(process.env.SOS)
app.get("/liner", async (_: any, res: Response) => {
  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY,
  // });
  // const openai = new OpenAIApi(configuration);
  // const convo = "generate a short pickup line for my girlfriend";
  // try {
  //   const completion = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: convo,
  //     temperature: 0.8,
  //     max_tokens: 1024,
  //   });
  //   console.log(completion?.data?.choices);
  // } catch (err: any) {
  //   console.log(err?.status);
  // }
  res.status(200).send(newLiner);
});

app.get("*", (_: Request, res: Response) => {
  return res.status(404).send("Not found");
});
app.post("*", (_: Request, res: Response) => {
  return res.status(404).send("Not found");
});
app.use((err: Error, _: Request, res: Response) => {
  console.error(err.stack);
  return res.status(500).send("Something went wrong!");
});
app.listen(process.env.PORT || 3001, (p: any) => {
  console.log("Server is running on port 3001");
});
