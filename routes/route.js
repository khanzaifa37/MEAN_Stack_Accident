var express     =require("express"),
    router      =express.Router();
const Accident = require("../models/accidents");

//Show All
router.get("/accidents",(req,res,next)=>{
    Accident.find(function(err,accidents){
        res.json(accidents);
    })
});
//Show Single 
router.get("/accidents/:id",(req,res,next)=>{
    Accident.find({_id:req.params.id},function(err,data){
        if(err)
        console.log(err);
        else
        res.json(data)
    })
})

//Add
router.post("/accidents/create",(req,res,next)=>{
    console.log(req.body.category);
    console.log(req.body.date); 
    console.log(req.body.time);
    console.log(req.body);
    //console.log(req);
    let newAccident=new Accident({
        category:   req.body.category,
        date:   req.body.date,
        time:   req.body.time,
        description: req.body.description,
        image: req.body.image,
        location:req.body.location,
        resp:req.body.resp,
        aids:req.body.aids
    })
    
    // Accident.create(req.body.accident,(err,accident)=>{
        newAccident.save((err,accident)=>{
        if(err)
        {
            res.json({msg:"Failed"});
        }
        else
        {
            res.json({msg:"Success"});
        }
    });


});

//Update
router.put("/accidents/update/:id",function(req,res){
    
    Accident.updateOne(
        { _id: req.params.id },  // <-- find stage
        { $set: {                // <-- set stage
           category: req.body.category,     // <-- id not _id
           date: req.body.date,
           time: req.body.time,
           description: req.body.description,
           image: req.body.image,
           location:req.body.location,
            resp:req.body.resp,
            aids:req.body.aids

          } 
        } ,function(err)
        {
            if(err)
            console.log(err);
            else
            res.json("Update Done");
        }  
      )
});



//Delete
router.delete("/accidents/delete/:id",(req,res,next)=>{
    Accident.remove({_id:req.params.id},function(err,result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

module.exports=router;
