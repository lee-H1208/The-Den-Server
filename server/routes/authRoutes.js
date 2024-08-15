const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

// middleware
const allowedOrigins = ["http://localhost:8000"];
const corsOptions = {
  credientials: true,
  origin: "*",
};

router.use(cors(corsOptions));

router.get("/", test);
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

module.exports = router;
