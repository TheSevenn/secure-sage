
import Strategy  from "passport-local";
// const LocalStrategy = Strategy.Strategy;

import { handleAuth } from "../controllers/handleAuth.js";

export default function passportInitialize(passport){
passport.use(new Strategy((req,res)=>{
handleAuth(req.body,done);
}))

}