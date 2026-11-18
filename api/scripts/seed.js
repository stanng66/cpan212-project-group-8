import mongoose from 'mongoose';
import { connectDb } from '../src/db.js';
// Uncomment when clues and notebooks are ready
// import Clue from "../";
// import Notebook from "../";

// TODO: add sample data for clues and notebooks (atleast 25 documents)

await connectDb();
console.log("Seed script started.");  // temporary place holders
console.log("Seed script complete.");   // temporary place holders
// Close the connection, or the script never ends.
await mongoose.disconnect();