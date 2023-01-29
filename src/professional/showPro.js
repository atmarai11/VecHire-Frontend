import React,{useState,useEffect} from "react";
import { Component } from "react";
import { Form,Button,Container,Row,Col } from "react-bootstrap";
import axios from 'axios'
import { MdEventBusy } from "react-icons/md";
import swal from 'sweetalert'



const ShowPro = (props)=>{
  let [professional,setProfessional] = useState({});
  let [bookingDetails,setBooking] = useState({
    "request_date":"",
    "reqValidation":"",
    "address":"",
    "contact":"",
    "config":{
      "headers":{
        "authorization": `Bearer ${localStorage.getItem("token")}`
      }
    },
    "professional_id":props.match.params.pid
  })
  useEffect(()=>{
     axios.get("http://localhost:90/professionals/"+props.match.params.pid)
     .then((response)=>{
        setProfessional(
          response.data.data
        )
     })
     .catch((err)=>{
       console.log(err);
     })
  },[professional])


  const changeHandler = (e)=>{
    var {name,value} = e.target;
    setBooking(
      {
        ...bookingDetails,
        [name]:value
      }
    )
  }

  const hireProfessional = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:90/hireProfessional",bookingDetails,bookingDetails.config)
    .then((response)=>{
      if(response.data.success == true)
      {
        swal({
          "title":"Hiring Success",
          "text":response.data.message,
          "icon":"success"
        })

        window.location.href ="/myHireRequest"
        
      }
      else
      {
        swal({
          "title":"Hiring Failed",
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
            <Col lg={12} className="professional__wrapper my-2">
                 <Row>
                     <Col lg={6}>
                      
                          <div className="img__container">
                              <img src = {`http://localhost:90/${professional.profileImg}`} alt="myImage" className="d-block" />
                          </div>  
                          <div className="user__details m-3" style={{background:"skyblue",borderRadius:"6px",padding:"5px",color:"white"}}>
                            <p> <strong>Vehicle Model: </strong> {professional.experience} </p>
                            <p> <strong>Type: </strong> {professional.profession} </p>
                            <p> <strong>Owner: </strong> {professional.first_name} {professional.last_name} </p>
                            <p> <strong>Contact: </strong> {professional.contact} </p>
                            <p> <strong>Email: </strong> {professional.email} </p>
                            
                            
                            <p> <strong>Charge: </strong> Rs {professional.wage}/day</p>
                          </div>

                     </Col>

                     <Col lg={6}>
                          <div className="hiring__detail">
                              <h5 className="text-center mt-4"> Rent the vehicle </h5>
                              <form method = "post" onSubmit={hireProfessional}>
                                 <div className="form-group">
                                    <label> Book For </label>
                                    <input type="date" className="form-control" name="request_date" value={bookingDetails['request_date']} onChange={(event)=>{changeHandler(event)}} required/>
                                 </div>

                                 <div className="form-group">
                                    <label> Required for Day/s </label>
                                    <input type="number" min="1" className="form-control" name="reqValidation" value={bookingDetails['reqValidation']} onChange={(event)=>{changeHandler(event)}} required/>
                                 </div>

                                 <div className="form-group">
                                    <label> Address </label>
                                    <input type="text" className="form-control" name="address" value={bookingDetails['address']} onChange={(event)=>{changeHandler(event)}} required/>
                                 </div>

                                 <div className="form-group">
                                    <label> Contact </label>
                                    <input type="text"  className="form-control" name="contact" value={bookingDetails['contact']} onChange={(event)=>{changeHandler(event)}} required/>
                                 </div>

                                 <div className="text-center">
                                   <button type="submit" className="btn btn-primary btn-md w-50" name="hire__user"> Request To Hire </button>
                                 </div>
                              </form>
                          </div>
                     </Col>
                 </Row>
            </Col>
          </Row>
         </Container>

    </React.Fragment>
)
}

export default ShowPro;