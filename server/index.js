require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParsar = require("cookie-parser");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;
const morgan = require("morgan");

const secrete = process.env.JWT_SECRETE;

// Declare the app
const app = express();

//Cors options
const corsOption = {
  origin: ["http://localhost:5173", "http://localhost:5174"],

  credentials: true,
  optionSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParsar());
app.use(morgan("dev"));

const dbUser = process.env.MDB_USER;
const dbPass = process.env.MDB_PASS;

// MongoDB Operation start here

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.w9uu7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// MongoDB Operation end here

app.get("/", (req, res) => {
  res.send(`<h1>Wahed Nur server is running on port ${port}</h1>`);
});

app.listen(port, () => {
  console.log(`Wahed Nur server is running on port ${port}`);
});
