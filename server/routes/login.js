import express from "express";
const router = express.Router();

router.get("/login",(req,res)=>{
    res.json("loginPage");
    console.log(req.originalUrl);
});

router.post("/authenticate",(req,res)=>{
      if(req.body.details.userName === "sevenn" && req.body.details.password === "password"){
        res.json({"authentication":true});
      }
     else res.json({"authentication":false});
      
});

export default router;