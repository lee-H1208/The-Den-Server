const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  resetPassword,
} = require("../controllers/authController");

// middleware
const corsOptions = {
  credientials: true,
  origin: "http://localhost:5173",
};

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.use(cors(corsOptions));

router.get("/", test);
router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/forgot", resetPassword);
router.get("/profile", getProfile);

module.exports = router;
