const express = require("express");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
import { Request, Response } from "express";

app.use(cors({ origin: "*" }));

// greetings - love letters
var lines = [
  "Wishing you the happiest of birthdays in advance! Get ready for an amazing celebration!",
  "Happy early birthday! May this coming year be filled with joy, love, and success for you!",
  "Sending you warm birthday wishes in advance! May your special day be as wonderful as you are!",
  "In advance, I wanted to let you know how lucky I am to have you in my life. Happy birthday, my love!",
  "Birthdays are meant to be celebrated, so here's an early cheer to your upcoming special day! Have a fantastic birthday!",
  "As your birthday approaches, I want to remind you how special and cherished you are. Happy early birthday, sweetheart!",
  "Sending you early birthday wishes filled with love and happiness. Enjoy your day to the fullest!",
  "It may be early, but I couldn't resist sending you birthday wishes in advance. You deserve all the best!",
  "In advance of your birthday, I wanted to express my gratitude for having you in my life. You bring so much joy and happiness. Happy early birthday!",
  "Here's to an early celebration of the incredible person you are. Wishing you a birthday filled with love, laughter, and beautiful moments!",
  "Before the clock strikes midnight, I wanted to be the first to wish you a very happy birthday! Enjoy your special day in advance!",
  "In advance of your birthday, I wanted to let you know how much you mean to me. You bring so much happiness into my life. Happy early birthday!",
  "I couldn't wait to send you birthday wishes, so here they are in advance! May your day be filled with love, laughter, and unforgettable moments!",
  "Happy early birthday to the most amazing person I know! Get ready for a birthday celebration like no other!",
  "Before the official countdown begins, I wanted to send you early birthday greetings. May this year be your best one yet!",
  "As your birthday approaches, know that you are in my thoughts and my heart. Wishing you a fantastic birthday in advance!",
  "In advance of your special day, I wanted to send you early birthday wishes filled with love and happiness!",
  "Happy early birthday to the one who makes every day brighter! May your birthday be as wonderful as you are!",
  "As your birthday draws near, I can't help but feel excited to celebrate with you. Get ready for an incredible day in advance!",
  "Wishing you a fantastic birthday in advance! May this year bring you endless blessings and happiness.",
  "Sending you early birthday greetings to let you know how much you mean to me. You deserve the best celebration!",
  "In advance of your birthday, I wanted to remind you of all the joy and love you bring into the world. Happy early birthday!",
  "Before the calendar flips, I wanted to send you early birthday wishes filled with warmth and affection. Enjoy your special day!",
  "Happy early birthday to the one who lights up my life! May your birthday be the start of a remarkable year ahead.",
  "In anticipation of your birthday, I wanted to express my gratitude for having you in my life. You are a true blessing!",
  "Wishing you a memorable and joyful birthday in advance! May all your dreams and wishes come true.",
  "Sending you early birthday hugs and kisses! Get ready for an incredible celebration of you!",
  "Before the birthday madness begins, I wanted to send you early wishes for a day filled with love, laughter, and happiness!",
  "Happy early birthday to the most amazing person I know! May this upcoming year be your best one yet.",
  "In advance of your special day, I wanted to remind you of how much you are loved and appreciated. Happy early birthday!",
  "Before the birthday candles are lit, here's an early wish for a year filled with blessings and beautiful moments. Happy early birthday!",
  "Wishing you a fantastic birthday in advance! May every moment of your special day be filled with joy and laughter.",
];

const total = 30;

const newLiner =
  "Thanks so much for today! I'll be there no matter what, I'll be the PRIEST!";

app.get("/message/:kly", (req: any, res: Response) => {
  const index = req.params.kly;
  console.log(index);
  console.log(lines[index] || lines[0]);
  res.status(200).send(lines[index] || lines[0]);
});
console.log(process.env.SOS);
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
  console.log(newLiner);
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
