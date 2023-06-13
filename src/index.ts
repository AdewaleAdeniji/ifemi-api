const express = require("express");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
import { Request, Response } from "express";

app.use(cors({ origin: "*" }));

// greetings - love letters
var lines = [
  "Happy birthday to the one who brings so much joy and love into my life! May your special day be as amazing as you are!",
  "Wishing a very happy birthday to the most wonderful person in the world! May this day be filled with laughter, love, and unforgettable moments.",
  "As you celebrate your birthday, I declare that you are like a tree planted by the waters, drawing strength and nourishment from the depths of God's love. Your life will be fruitful and prosperous in every season.",
  "Just as a tree spreads its roots and bears fruit, I prophesy that you will grow deep in your relationship with God. Your faith will flourish, and your life will be a testimony of His grace and goodness.",
  "On your birthday, I declare that you are like a tree firmly planted by the streams of living water. Your heart will be refreshed, and your spirit will be renewed day by day.",
  "I prophesy that you will be a source of inspiration and blessing to those around you. Your life will bear the fruit of love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.",
  "As you walk in the counsel of the Lord, I declare that you will experience divine favor and guidance. Your steps will be directed towards His perfect plans and purposes for your life.",
  "On this special day, I prophesy that you will be like a tree planted in the right soil, flourishing in your career and endeavors. Your talents and abilities will shine, opening doors of opportunities.",
  "I declare that your life will be a living testimony of God's faithfulness and provision. He will establish you in your endeavors, and you will prosper in all that you set your hands to do.",
  "As you delight in the Word of God, I prophesy that you will be like a tree planted by the rivers of water, evergreen and flourishing. His Word will guide and sustain you throughout your journey.",
  "On your birthday, I declare that your relationship with God will deepen. You will be like a tree rooted in His love, experiencing His presence, and being transformed by His grace.",
  "I prophesy that your birthday marks the beginning of a new season of blessings, breakthroughs, and divine favor. May God's abundant goodness overflow in your life.",
  "Happy birthday to my partner in crime, my best friend, and the love of my life! You deserve all the happiness and success in the world.",
  "On this special day, I want you to know how grateful I am to have you in my life. Happy birthday, my dear!",
  "Sending you the warmest birthday wishes, filled with love, hugs, and kisses. May this day bring you endless joy and happiness.",
  "Happy birthday to the one who makes every day brighter with their smile and laughter. May your birthday be as magical as you are!",
  "Today, we celebrate the amazing person you are and the incredible impact you have on everyone around you. Happy birthday!",
  "Wishing you a day filled with laughter, love, and all the things that make you happy. Happy birthday to the one who means the world to me!",
  "May this birthday be the start of a new chapter filled with exciting adventures, cherished memories, and endless love. Happy birthday!",
  "To the most beautiful soul, happy birthday! Your presence in my life has made it more meaningful and extraordinary.",
  "On this special day, I want you to know that you are loved, appreciated, and cherished. Happy birthday, my sweetheart!",
  "Happy birthday to the one who makes my heart skip a beat and my life so much brighter. I'm grateful for every moment with you.",
  "Sending you the biggest birthday hugs and kisses! May this day be filled with surprises, laughter, and precious moments.",
  "Today, we celebrate the incredible person you are and all the wonderful things you bring into this world. Happy birthday!",
  "On your special day, I want to thank you for being the reason behind my smiles and the source of my happiness. Happy birthday, my love!",
  "Wishing a fabulous birthday to the one who deserves nothing but the best in life. May this year be your most extraordinary one yet!",
  "Happy birthday to the one who lights up my life with their presence. Thank you for being the amazing person you are.",
  "On this day, I celebrate the day you were born and the beautiful soul you have become. Happy birthday, my dearest!",
  "Sending you heartfelt wishes for an unforgettable birthday filled with love, laughter, and happiness. Enjoy your special day!",
  "Happy birthday to the one who makes my heart overflow with love and happiness. You are truly one of a kind!",
  "Today, we raise a toast to celebrate your birthday and all the wonderful moments we've shared together. Cheers to many more incredible years ahead!",
  "Happy birthday to the one who knows how to make my heart skip a beat and my face light up with a smile. You are my everything!",
  "May this birthday bring you countless blessings, infinite joy, and all the love your heart can hold. Happy birthday, my love!",
  "Sending you the warmest birthday wishes and a shower of love on your special day. May you always be surrounded by happiness and success.",
  "Happy birthday to the one who brings so much laughter and happiness into my life. Today and always, you deserve the best!",
  "On your birthday, I want you to know how much you mean to me and how grateful I am to have you by my side. Happy birthday, my dear!",
  "Wishing you a birthday filled with sunshine, rainbows, and all the beautiful things life has to offer. Happy birthday, sweetheart!",
  "Today, I celebrate the incredible person you are and the immense love we share. Happy birthday, my one and only!",
  "Sending you endless love and best wishes on your birthday. May this day mark the beginning of an extraordinary year ahead!",
  "Happy birthday to the one who brings so much joy and happiness into my life. You are my greatest gift and blessing!",
  "On this special day, I want you to know that you are loved beyond words and cherished beyond measure. Happy birthday, my love!",
];

const total = 30;

const newLiner = "Happy Birthday Babe!";

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
