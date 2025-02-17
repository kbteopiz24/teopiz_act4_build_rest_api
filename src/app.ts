import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : null;

if (PORT === null) {
  console.error("No port value specified. Exiting.");
  process.exit(1); // Exit the process with an error code
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors()); // Configure CORS for specific origins in production
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});