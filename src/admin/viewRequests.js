import React,{useState,useEffect} from 'react'
import '../style.css';
import {Container,Col,Row,Card} from 'react-bootstrap'
import axios from 'axios';
import {FaDotCircle} from 'react-icons/fa'
import {GiSandsOfTime} from 'react-icons/gi'
import ViewDocuments from './viewDocuments'
import swal from 'sweetalert'

const ViewRequests = (props) => {
    let [requests,setRequests] = useState([]);
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
                "authorization":`Bearer ${localStorage.getItem("token")}`
            }
        }
    })
    useEffect(()=>{
        axios.get("http://localhost:90/show/request",auth.config)
        .then((response)=>{
            setRequests(
                response.data.data
            )
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    const requestReview = (command,id)=>{
        var dataHolder = {"req_id":id,"answer":command};
        axios.post('http://localhost:90/update/request',dataHolder,auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                window.location.reload()
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
    return (
        <React.Fragment>
            <Container fluid>
                <Row>   
                    <Col lg={12}>
                    <p style={{float:"right",fontWeight:"bolder"}} className="mt-2 mr-1"> {requests.length} request(s) on pending. </p>
                    </Col>
                    <Col lg={12}>
                      
                        {
                            requests.map((userr)=>{
                                return (
                                    <Card className="userRequests">
                                    <div className="reqImg">
                                <Card.Img variant="top" src={`http://localhost:90/${userr.userPhoto}`} />
                                </div>
                                <Card.Body>
                                    <Card.Title className="text-center"> Owner Name: {userr.user_id.first_name} {userr.user_id.last_name} </Card.Title>
                                    <div>
                                        <p style={{float:"right"}}><strong>Address: </strong>{userr.currentAddress}</p>
                                        <p><strong>Vechile Type: </strong>{userr.profession}</p>
                                    </div>

                                    <div>
                                        <p style={{float:"right"}}><strong>Contact: </strong>{userr.contact}</p>
                                        <p><strong>Vehicle model: </strong>{userr.experience} year(s)</p>
                                    </div>

                                    <div>
                                        <p style={{float:"right"}}><strong>Selected:</strong> <GiSandsOfTime style={{color:"black",fontSize:"12px"}}/> </p>
                                        <p><strong>Request At: </strong>{userr.requestDate}</p>
                                    </div>

                                    <div className="text-center">
                                        <button style={{background:"none",border:"none",color:"blue",textDecoration:"underline"}} data-toggle="modal" data-target={`#document${userr._id}`}> View Documents </button>
                                        <ViewDocuments requestt={userr}/> 
                                    </div>
                                    <div className="acceptance">
                                        
                                    <Row>
                                        <Col lg={6}>
                                            <button className="btn btn-outline-success btn-block" type="button" name="accept__data" onClick={()=>{requestReview("Accept",userr._id)}}> Accept </button>
                                        </Col>
                                        <Col lg={6}>
                                        <button className="btn btn-outline-danger btn-block" type="button" name="decline__data" onClick={()=>{requestReview("Decline",userr._id)}}> Decline </button>
                                        </Col>
                                    </Row>
                                    
                                    </div>
                                   
                                </Card.Body>
                                </Card>
                                
                                )
                            })
                        }
                   
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ViewRequests
