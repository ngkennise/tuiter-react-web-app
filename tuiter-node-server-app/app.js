import mongoose from "mongoose"

import express from 'express';
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}

const DB_CONNECTION_STRING = 'mongodb+srv://ngkennise:PassWord@cluster0.bzu7fle.mongodb.net/?retryWrites=true&w=majority';
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);


const app = express()
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);