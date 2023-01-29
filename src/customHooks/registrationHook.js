import React,{useState} from 'react';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';



const useRegistration = (validation)=>{

    const {addToast} = useToasts() 
    
    
    let[userDetails,setDetails] = useState({
        "first_name":"",
        "last_name":"",
        "username":"",
        "email":"",
        "password":"",
       
    });

    let [error,setError] = useState({});

    const formData = (e)=>{
        
        var {name,value} = e.target;
        setDetails({
            ...userDetails,
            [name]:value
        });
    }

    const submitForm = (e)=>{
     
        e.preventDefault();
        const submittedData = {
        "first_name":userDetails.first_name,
        "last_name":userDetails.last_name,
        "username":userDetails.username,
        "email":userDetails.email,
       "password":userDetails.password,
        
        };

            setError(
                error = validation(submittedData,{},"")
            )
            
            if(Object.values(error).length == 0)
            {
                axios.post(process.env.REACT_APP_URL+"user/insert",submittedData).then((response)=>{
                    let data = response['data'];
                    if(data.success == false)
                    {
                    
                        setError(
                            error = validation(submittedData,data.message,data.type)
                        )
                        addToast("Error in registrations",{
                            appearance:'error',
                            autoDismiss:true
                        })
                    }
                    else if(data.success == true)
                    {
                        addToast(`${submittedData['first_name']}, Registered in ProHire`,{
                            appearance:'success',
                            autoDismiss:true
                        })
                       window.location.href = "/login"
                        
                    }
                    
                    
                }
                    
                ).catch((err)=>{
                    addToast("Sorry! We are facing some problem!!",{
                        appearance:'danger',
                        autoDismiss:true
                    })
                });
            }
            else {
                addToast("Error in registrations",{
                    appearance:'error',
                    autoDismiss:true
                })
            }

           
        }
       
       
    


    return {formData,userDetails,submitForm,error};
}

export {useRegistration};