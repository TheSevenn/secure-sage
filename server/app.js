
// default imports
import express, {urlencoded} from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
const app = express();
dotenv.config({path:"./config/config.env"});

// file imports
import loginRouter from "./routes/auth.js";
import connectDB from "./config/connectDB.js";
import entryRouter from "./routes/entry.js";




// middlewares
app.use(cors({origin:"http://localhost:3000"}));
app.use(urlencoded({extended:false}));
app.use(session({
  secret:'SECRET',
  resave:false,
  saveUninitialized:false,
  // store:MongoStore.create({mongoUrl:process.env.CONNECTION_URL})
}));
app.use(express.json());
app.use(logger);

// connect to database
connectDB();

app.get("/",(req,res)=>{
  res.json({"fristName":"world"});
});

app.listen(process.env.PORT||5000,()=>{
  console.log("running at: "+process.env.PORT);
});

// createOwner();

// routing
app.use('/private',loginRouter);
app.use('/account',entryRouter);

// url logger
function logger(req,res,next){
  console.log(req.originalUrl);
  next();
}
