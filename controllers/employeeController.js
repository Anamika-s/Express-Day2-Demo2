const employeeController = (req,res)=>
{
    console.log("inside emp controller")
    res.send(`<form method="post" action="/saveemp">
       <div>
            <label> Name </label>
            <input type="text" name="name"/>
        </div>
        <div>
            <label> Email </label>
            <input type="email" name="email"/>
        </div>
        <button type="submit"> Add Record </button>
        
    </form>`)
}

export default  employeeController;