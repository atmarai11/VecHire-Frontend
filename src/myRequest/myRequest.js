import React,{useState,useEffect} from 'react';
import {Container,Col,Row,Card} from 'react-bootstrap';
import axios from 'axios'
import swal from 'sweetalert'
const MyRequest = (props) => {
    let [myRequest,setMyRequest] = useState([]);
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
              "authorization": `Bearer ${localStorage.getItem("token")}`
            }
          }
    })

    useEffect(()=>{
        axios.get("http://localhost:90/professional/myWork",auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                setMyRequest(
                    response.data.data
                )
            }
        })
    },[])

    const respondWork = (e,id,workProgress)=>{
        axios.post("http://localhost:90/respondRequest",{"req_id":id,"answer":workProgress},auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                swal({
                    "title":"Success",
                    "text":response.data.success,
                    "icon":"success"
                })
                window.location.reload();
            }
            else
            {
                swal({
                    "title":"Error",
                    "text":response.data.success,
                    "icon":"error"
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    return (
        <React.Fragment>
            <Container>
                <Row>
                    {
                        myRequest.map((requests)=>{
                            return(
                                <Col lg={6}>

                                <Card className="userRequests">
                                
                                <Card.Body>
                                    <Card.Title>Name: {requests.user_id.first_name} {requests.user_id.last_name}</Card.Title>
                                    <Card.Title>Profession: Customer</Card.Title>
                                    <Card.Title>Contact: {requests.contact}</Card.Title>
                                    <Card.Title>Address: {requests.address}</Card.Title>

                                    <Card.Title>Request Date: {requests.request_date.split("T")[0]} </Card.Title>
                                    <Card.Title>Progress: {requests.progress} </Card.Title>

                                    <Row className="mt-2">
                                        {
                                            requests.progress == "Running"?
                                            (
                                               <>
                                                      <Col lg={6}>
                                          
                                          <button type="submit" className="btn btn-success btn-block btn-md w-40" name="delete" onClick={(event)=>{respondWork(event,requests._id,"Confirm")}}> Accept </button>
                                           
                                      </Col>

                                      <Col lg={6}>
                                        
                                          <button type="submit" className="btn btn-danger btn-block btn-md w-40" name="delete" onClick={(event)=>{respondWork(event,requests._id,"Reject")}}> Decline</button>
                                           
                                      </Col>
                                               </>
                                            ):
                                            (
                                              <></>
                                            )
                                        }
                                        
                                      
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

export default MyRequest
