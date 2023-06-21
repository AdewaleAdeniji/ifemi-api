const express = require("express");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
import { Request, Response } from "express";

app.use(cors({ origin: "*" }));

// greetings - love letters
var lines = [
  "You have such a beautiful soul. Never let anyone dim your light.",
  "Your hard work and dedication will pay off. Keep pushing forward.",
  "I am grateful to have you in my life. You make everything better.",
  "Believe in yourself, because I believe in you with all my heart.",
  "You are capable of achieving extraordinary things. Don't be afraid to dream big.",
  "Remember that setbacks are just opportunities for comebacks. You've got this.",
  "I am here to listen, support, and love you through every triumph and challenge.",
  "Your kindness and compassion make the world a better place. Never lose that.",
  "You have the strength within you to rise above any adversity. Keep going.",
  "In my eyes, you are perfect just the way you are. Embrace your uniqueness.",
  "Your smile has the power to brighten even the darkest days. Keep smiling, my love.",
  "I admire your resilience and how you never give up. You are an inspiration.",
  "You are worthy of all the love, success, and happiness that life has to offer.",
  "Your courage to pursue your dreams is truly remarkable. Don't stop believing in yourself.",
  "No matter what challenges come your way, remember that I will always be here for you.",
  "You have a heart of gold. Your love and kindness touch the lives of those around you.",
  "You are incredibly strong and capable. I believe in you.",
  "No matter what challenges you face, remember that I'm here to support you every step of the way.",
  "You have such a beautiful heart and a brilliant mind. Keep shining, my love.",
  "I'm so proud of you and all that you've accomplished. You inspire me every day.",
  "You are more than enough just the way you are. Don't let anyone make you doubt yourself.",
  "I admire your determination and perseverance. You have the power to overcome anything.",
  "When you feel like giving up, remember why you started. You're capable of achieving greatness.",
  "You bring so much joy and positivity into my life. Keep spreading your light to the world.",
  "You are an amazing person, both inside and out. Never forget your worth.",
  "I believe in your dreams and aspirations. You have the talent and passion to make them a reality.",
  "Take a deep breath, have faith in yourself, and remember that you are loved unconditionally.",
  "You have a special way of touching the lives of those around you. Keep being the wonderful person you are.",
  "You are braver than you think, stronger than you feel, and more loved than you can imagine.",
  "No matter what obstacles come your way, always remember that I'm right here by your side.",
  "Your smile is contagious, and your presence brightens up any room. Keep being your amazing self.",
  "I have complete confidence in your abilities. You can conquer anything you set your mind to.",
];

const total = 30;
console.log(lines.length);
const newLiner = "Hey Babe!, thanks for today";

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
  const t = new Date();
  const minute = t.getMinutes();
  console.log("liner");
  console.log(lines[minute]);
  res.status(200).send(lines[minute]);
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
app.listen(process.env.PORT || 3004, (p: any) => {
  console.log("Server is running on port 3001");
});
