const saveEmployeeController = (req,res)=>
    {
      console.log("inside add")
      console.log(req.body)
      
    // res.send(req.body)
    res.send("Name : " + req.body.name + "Email :" + req.body.email)
    
    }
    
    export {saveEmployeeController}