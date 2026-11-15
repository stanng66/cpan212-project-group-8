import Clue from "../src/models/Clue.js";
import Notebook from "../src/models/Notebook.js";
import mongoose from 'mongoose';
import { connectDb } from '../src/db.js';



await connectDb();
// Close the connection, or the script never ends.
await mongoose.disconnect();