const dotenv = require("dotenv");
const express = require("express");
const app = express();
const productRoutes = require('./routes/productRoutes')
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const Product = require("./Model/ProductSchema");
const connectDB = require("./connection/db");

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

// Database Connection with mongodb
connectDB();

//Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//Creating endpoint
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

//API Creation

app.use('/products',productRoutes)

app.get("/", (req, res) => {
  res.send("Express App is running");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server running on port ${PORT}`);
  } else {
    console.log(error);
  }
});
