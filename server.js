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
// // Creating a user Schema
// const accidentSchema = new mongoose.Schema({
//     category: String,
//     date: String,
//     time: String,
//     location: String,
//     vehicles: String,
//     person: {
//         name: String,
//         age: Number,
//         gender: String

//     },
//     services_used: String,
//     action: String,
//     image: String,
//     description: String
// });

// // Creating a user Model
// const Accident = mongoose.model('Accident',accidentSchema)

// //ROUTES

// //Index
// app.get("/",function(req,res){
//     res.redirect("/accidents");
// });

// app.get("/accidents",function(req,res){
//     Accident.find({},function(err, accidents){
//         if(err)
//             console.log(err);
//         else
//             res.render("home",{accidents:accidents})
//     });
    
// });

// //Create
// app.get("/accidents/new",function(req,res){
//     res.render("new");
// });

// app.post("/home",function(req,res){
//     var formData= req.body.accident;
//     Accident.create(formData, function(err, newAccident){
//         if(err)
//             res.render("new");
//         else
//             res.redirect("/accidents");
//     })
// });

// //Read
// app.get("/accidents/:id",function(req,res){
//     Accident.findById(req.params.id,function(err,accident   ){
//         if(err)
//             res.redirect("/");
//         else
//             res.render("show",{accident:accident});
//     });

// });

// //Edit
// app.get("/accidents/:id/edit",function(req,res){
//     Accident.findById(req.params.id,function(err,accident){
//         if(err)
//             res.redirect("/");
//         else
//             res.render("edit",{accident:accident});
//     });
// });

// //Update
// app.put("/accidents/:id",function(req,res){
//     Accident.findByIdAndUpdate(req.params.id,req.body.accident,function(err,user){
//         if(err)
//             console.log(err);
//         else
//         {
//             var showUrl= "/accidents/"+accident._id;
//             res.redirect(showUrl);
//         }
           
//     });
// });

// //Destroy 
// app.delete("/accidents/:id",function(req,res){
//     console.log("Hit the delete route");
//     console.log(req.params.id);
//         Accident.findByIdAndDelete( req.params.id ,function(err,acc){
//                 if(err)
//                     console.log("Delete inner error");
//                 else
//                 res.redirect("/accidents");
//             });
          
       
   

// });

app.listen(3000, function(){
    console.log("Listening at http://localhost:3000");
} );