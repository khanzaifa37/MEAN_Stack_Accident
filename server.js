var bodyParser      =require("body-parser"),
    mongoose        =require("mongoose"),
    express         =require("express"),
    methodOverride = require('method-override'),
    request         =require("request"),
    cors            =require("cors"),
    path            =require("path"),
    route           =require("./routes/route.js"),
    bluebird        =require('bluebird'),
    app             =express(),
    vcapServices    = require('vcap_services'),
    cfenv           =require("cfenv");

var appEnv = cfenv.getAppEnv()
var mongoLabUrl = appEnv.getServiceURL('mongo');
if(mongoLabUrl!=null)
mongoose.connect(mongoLabUrl);
mongoose.connection.on("error",(err)=>{
    if(err)
    console.log("Error from here in connecting to mongo @27017");
});
const corsOptions = {
        origin: "*",
        optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
//APP Config
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use('/api',route);

var port = ( process.env.VCAP_APP_PORT || '3000');
var host=(process.env.VCAP_APP_HOST || 'localhost')
app.listen(port,host, function(){
    console.log("Listening at http://localhost:3000");
} );
