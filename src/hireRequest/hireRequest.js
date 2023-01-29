import React,{useState,useEffect} from 'react';
import '../style.css'
import {Container,Col,Row,Card} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import {MdDoneAll} from 'react-icons/md'



const HireRequest = (props)=>{
    const {} = props;
    let [myRequest,setMyRequests] = useState([]);
    let [auth,setAuth] = useState(
        {"config":{
            "headers":{
              "authorization": `Bearer ${localStorage.getItem("token")}`
            }
          }}
    )
    useEffect(()=>{
        axios.get("http://localhost:90/customer/myRequest",auth.config)
        .then((response)=>{
            console.log(response)
            if(response.data.success == true)
            {
                setMyRequests(
                    response.data.data
                )
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const cancelBooking = (e,id)=>{
        axios.post("http://localhost:90/updateHire",{_id:id},auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                swal({
                    "title":"Success",
                    "text":response.data.message,
                    "icon":"success"
                })
                window.location.reload();
            }
            else
            {
                
                swal({
                    "title":"Error",
                    "text":response.data.message,
                    "icon":"error"
                })
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const confirmBooking = (e,id)=>{
        axios.post("http://localhost:90/update/workDone",{_id:id},auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                swal({
                    "title":"Success",
                    "text":response.data.message,
                    "icon":"success"
                })
                window.location.reload();
            }
            else
            {
                swal({
                    "title":"Error",
                    "text":response.data.message,
                    "icon":"error"
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }


 
    return(
        <React.Fragment>
            <Container>
                <Row>
                    {
                        myRequest.map((requests)=>{
                            return(
                                <Col lg={6}>

                                    <Card className="userRequests">
                                    <Card.Img variant="top" src={`http://localhost:90/${requests.professional_id.profileImg}`} className="cardImg" />
                                    <Card.Body>
                                        
                                        <Card.Title>Vehicle: {requests.professional_id.experience} </Card.Title>
                                        <Card.Title>Owner: {requests.professional_id.first_name} {requests.professional_id.last_name}</Card.Title>
                                        <Card.Title>Vehcile Type: {requests.professional_id.profession}</Card.Title>
                                        <Card.Title>Contact: {requests.professional_id.contact}</Card.Title>
                                        <Card.Title>Charge: Rs {requests.professional_id.wage}/day</Card.Title>

                                        <Card.Title>Request Date: {requests.request_date.split("T")[0]} </Card.Title>
                                        <Card.Title>Status: {requests.status} </Card.Title>

                                        <Row>
                                            
                                            <Col lg={12}>
                                                {
                                                    requests.status != "Not responded"?
                                                    (
                                                        requests.status == "Confirmed"?
                                                        (
                                                            <button type="button" className="btn btn-success btn-block btn-md w-40" name="confirm" onClick={(event)=>{confirmBooking(event,requests._id)}}>  Vehicle Returned </button>   
                                                        ):
                                                        (
                                                            <></>
                                                        )
                                                      
                                                    ):
                                                    (
                                                       
                                                        <button type="submit" className="btn btn-danger btn-block btn-md w-40" name="delete" onClick={(event)=>{cancelBooking(event,requests._id)}}> Cancel Request </button>
                                                    )
                                                }
                                          
                                            </Col>

                                            <Col lg={12}>
                                                {
                                                    requests.status == "Finished"?
                                                    (
                                                        <p className="text-center text-white" style={{background:"blue",padding:"10px"}}><MdDoneAll/> Work Completed </p>
                                                      
                                                    ):
                                                    (
                                                       
                                                       <></>
                                                    )
                                                }
                                          
                                            </Col>
                                        </Row>
                                        
                                            
                                            
                                         

                                        
                                        <Card.Text>

                                        </Card.Text>
                                      
                                    </Card.Body>
                                    </Card>
                                                                    
                                   
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default HireRequest
