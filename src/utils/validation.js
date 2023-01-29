const validator = require('validator')
const validation = (data,webData,type)=>{
    var error = {};
   
    if(type == "verification")
    {
        if(webData == "Email Address already exists!!")
        {
        error['email'] = "Email Address already exists!!";
        }
        if(webData == "Username already exists!!")
        {
        error['userName'] = "Username already exists!!";
        }
    }
    else if (type == "array")
    {
        for(var i=0; i<webData.length; i++)
        {
            error[webData[i]['param']] = webData[i].msg;
        }
    }
    if(!validator.isAlpha(data["first_name"].replace(" ","")))
    {
        error['first_name'] = "Firstname shouldnot contain any numeric characters!!";
    }
    if(!validator.isAlpha(data["last_name"].replace(" ","")))
    {
        error['last_name'] = "Lastname shouldnot contain any numeric characters!!";
    }
   
    
    return error;
}





export {validation};