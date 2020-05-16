var bodyParser      =require("body-parser"),
    mongoose        =require("mongoose"),
    express         =require("express"),
    methodOverride = require('method-override'),
    request         =require("request"),
    cors            =require("cors"),
    path            =require("path"),
    route           =require("./routes/route.js"),
    app             =express();

const corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
//APP Config
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use('/api',route);

mongoose.connect("mongodb://localhost:27017/accident_db",{useNewUrlParser: true})
mongoose.connection.on("connected",()=>{
    console.log("Connected to mongo @27017");
});


mongoose.connection.on("error",(err)=>{
    if(err)
    console.log("Error Connecting to mongo @27017");
});


app.listen(3000, function(){
    console.log("Listening at http://localhost:3000");
} );