const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
} = require("../controllers/authController");

// middleware

const corsOptions = {
  credientials: true,
  origin: "http://localhost:5173",
};

router.use(cors(corsOptions));

router.get("/", test);
router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
