const express = require("express");
const app = express();
const cors = require("cors");
import { Request, Response } from "express";

app.use(cors({ origin: "*" }));

// greetings - love letters
const lines = [
  "Do you have a sunburn or are you always this hot?",
  "Is your dad a baker? Because you're a cutie pie.",
  "You must be a thief because you stole my heart.",
  "Do you have a twin sister? Because you look like the only one I've been searching for.",
  "Are you a camera? Because every time I look at you, I smile.",
  "I'm not saying you're the best catch out there, but you're definitely a catch worth keeping.",
  "I must be a shooting star, because I've fallen for you fast and hard.",
  "Can I borrow a kiss? I promise I'll give it back.",
  "Do you have a library card? Because I am checking you out.",
  "You must be a magician because every time I look at you, everyone else disappears.",
  "I must be lost because heaven is a long way from here.",
  "If I were a cat I'd spend all 9 lives with you.",
  "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
  "If you were a vegetable, you'd be a cutecumber.",
  "Is your name Google? Because you have everything I've been searching for.",
  "Do you have a map? Because I keep getting lost in your eyes.",
  "If I could rearrange the alphabet, I'd put U and I together.",
  "Are you a magician? Every time I look at you, everyone else disappears.",
  "Do you believe in love at first sight, or should I walk by again?",
  "Excuse me, but I think you dropped something: my jaw.",
  "Can I follow you where you go? Because my parents always told me to follow my dreams.",
  "I must be a snowflake, because I've fallen for you.",
  "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
  "You are strong enough to face any challenge that comes your way.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Don't let anyone dim your light. Shine on and show the world what you're made of.",
  "You are capable of amazing things. Keep pushing forward and don't give up.",
  "Remember that success is not final, failure is not fatal. It's the courage to continue that counts.",
  "No matter how difficult the road may seem, always remember that you are stronger than you think.",
  "You are an inspiration to those around you. Keep doing what you're doing and never give up on your dreams.",
  "Your hard work and determination will pay off in the end. Keep going!",
  "It's okay to fail sometimes. Just pick yourself up, learn from your mistakes, and keep moving forward.",
  "Believe in your abilities and trust the process. Great things are coming your way!",
];

const total = 30;

const newLiner =  "I'm home, I want to rest a bit before reading. Might be asleep when you call back"

app.get("/message/:kly", (req: any, res: Response)=> {
  const index = req.params.kly;
  console.log(index);
  res.status(200).send(lines[index]||lines[0])
});
app.get("/liner", (_: any, res: Response)=> {
  res.status(200).send(newLiner)
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
