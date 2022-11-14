import express from 'express';
import mongoose from 'mongoose'
import pageRouter from './routes/pageRouter.js'
import courseRouter from './routes/courseRouter.js'

const app = express();

mongoose.connect('mongodb://localhost/smartedu-db')
    .then(() => console.log("db conn success"))
    .catch((err) => console.log(err));

// Template Engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));

// Routes
app.use("/", pageRouter)
app.use("/courses", courseRouter)


const port = 3000;
app.listen(port, () => {
    console.log(`App started on ${port}`);
});



