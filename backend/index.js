const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes/index.js');


require('dotenv').config();
const port = 1000;

mongoose.connect(`mongodb+srv://marva123:<marva123>@cluster0.bsrapjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});




const app = express();
app.use(express.json());
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));


app.use(
  session({
    secret: 1234,
    resave: false,
    saveUninitialized: true
  })
)

app.use((req,res,next) => {

  console.log(req.method, req.url);
   console.log(res.statusCode);
   console.log(req.body);
   next();
})


app.use('/',userRoutes);
// app.use('/admin',adminRoutes);

app.listen(port, () => {
   console.log('server is running:',port)
});

console.log("node is working");


