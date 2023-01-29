import axios from 'axios';
import React,{useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import '../style.css';
import {useToasts} from "react-toast-notifications"


const AddWork = (props) => {
    let {addToast} = useToasts();
    let [workInfo,setworkInfo] = useState({
        "wName":"",
        "desc":"",
        "workImg":"",
        config:{
            headers:{
                authorization:
                    `Bearer ${localStorage.getItem('token')}`
                
            }
        }   
    })

    const changeHandler = (e)=>{
        var {name,value} = e.target;
        setworkInfo(
            {
                ...workInfo,[name]:value
            }
        )
    }

    const imageHandler = (e)=>{
        var {name,files} = e.target;
        setworkInfo(
            {
                ...workInfo,[name]:files[0]
            }
        )
    }

    const submitForm = (e)=>{
        e.preventDefault();
        let workInfos = new FormData();
        workInfos.append('wName',workInfo.wName);
        workInfos.append('desc',workInfo.desc);
        workInfos.append('workImg',workInfo.workImg);
        
      
        axios.post("http://localhost:90/insert/work",workInfos,workInfo.config).then((response)=>{
            
            if(response.data.success == true)
            {
                addToast(response.data.message,{
                    appearance:'success',
                    autoDismiss:true
                })
                window.location.href = "/admin"
            }
            else
            {
                addToast(response.data.message,{
                    appearance:'error',
                    autoDismiss:true
                })
            }
        }).catch((err)=>{
            console.log(err);
        })

    }


    return (
        <React.Fragment>
        <Container fluid>
            <Row>
              <Col lg={2} className="d-none d-md-none d-lg-block"></Col>
                <Col lg={8}>
                <form method="post" className="common__form" onSubmit={submitForm}>
                <div className="form-group">
                    <label> Vehicle Type </label>
                    <input type="text" className="form-control" name="wName" value={workInfo.wName} onChange={(event)=>{changeHandler(event)}}/>
                </div>

      

                <div className="form-group">
                    <label> Vehicle Image </label>
                    <input type="file" className="form-control-file" name="workImg" onChange={(event)=>{imageHandler(event)}} />
                </div>

                <div className="form-group">
                    <label>  Description </label>
                    <textarea name="desc" className="form-control" onChange={(event)=>{changeHandler(event)}}>{workInfo.desc}</textarea>
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg" name="futsalAddition"> Add Vehicle Category</button>
                </div>
           </form>
                </Col>
                <Col lg={2} className="d-none d-md-none d-lg-block"></Col>
            </Row>
        </Container>
         
        </React.Fragment>
    )
}

export default AddWork
