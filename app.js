import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
const app=express();

import userRouter from './routes/user.router.js'
import categoryRouter from "./routes/categoryrouter.js";

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
//Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use("/user",userRouter);
app.use("/category",categoryRouter);


app.listen(5000);
console.log("server invoked at link http://localhost:5000");