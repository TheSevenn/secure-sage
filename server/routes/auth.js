import express from "express";
import session from "express-session";
const router = express.Router();

import { handleAuth } from "../controllers/handleAuth.js";
import { protectRoutes } from "../middlewares/protectRoutes.js";

router.get("/login",(req,res)=>{
    res.json("loginPage");
    console.log(req.originalUrl);
});

// router.post("/auth",passport.authenticate('local'),(req,res)=>{
//     res.send("good")
// });

router.post("/auth",(req,res)=>{
  try {
    handleAuth(req.body,res);
  } catch (error) {
     res.status(500).json({"authStatus":false,"message":"something went wrong"});
     console.log(err);
  }   
});

router.post("/logout",(req,res)=>{
  res.redirect("login");
  res.json({msg:"logged out successfuly"});
})

export default router;