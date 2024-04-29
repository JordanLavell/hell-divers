import { BingoValue } from "../types";

// A sample list of possible bingo square contents
const bingoContents = [
  "Sink grade 5 reaper",
  "Steal chest of fortune",
  "Steal chest of legends",
  "Sink a galleon",
  "Explode an enemy with a keg",
  "Flying sniper kill",
  "Sell OOS flag",
  "Steal fort of fortune",
  "Sink a brig",
  "Sink a sloop",
  "Sink and steal from allianced crew",
  "Steal reaper chest",
  "Steal all 3 types of gems",
  "Sink a ship without boarding",
  "Sell gold hoarders flag",
  "Sell guilded flag",
  "Sell merchant flag",
  "Steal fort of the damned",
  "Board with the map glitch",
  "Sell athena flag",
  "Land a deck shot",
  "Tuck on ship",
  "The Passivist",
  "Steal 500,000",
  "Steal factions special item",
  // ... add more content options relevant to Sea of Thieves
];

// Function to shuffle an array
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to generate an array of BingoValue objects with random content
export const generateBingoValues = (): BingoValue[] => {
  // Shuffle the bingoContents array
  const shuffledContents = shuffleArray(bingoContents);

  // Slice the first 25 elements after shuffling to get random content
  const selectedContents = shuffledContents.slice(0, 25);

  // Map over the selectedContents to create BingoValue objects
  const bingoValues: BingoValue[] = selectedContents.map((content) => ({
    content: content,
    marked: false, // Initially, none of the squares are marked
  }));

  return bingoValues;
};
