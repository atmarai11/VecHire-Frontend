import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import '../style.css';
import {Link} from 'react-router-dom'
import {MdLocationOn,MdPhone,MdEmail} from 'react-icons/md';





//component starts here
const Professionals = (props) => {
 
    let [professional,setProfessional] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:90/retrieveProfessionals/"+props.match.params.pid)
        .then((response)=>{
            let responseHolder = response.data;
            if(responseHolder.success == true)
            {
                setProfessional(
                    responseHolder.data
                )
            }
         
        }).catch((err)=>{
            console.log(err.response());
        })
    },[])
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                <Col lg={12}>
                        <p className="mt-2 mb-2 mr-2" style={{float:"right"}}>{professional.length} {props.match.params.pid}(s) Found!!</p>
                    </Col>
                <Container>
                <Row>
                    
                {
                    professional.map((pro)=>{
                        return(
                           
                            <Col lg={4}>
                            <Card className="userRequests mt-2 mb-2">
                            <Card.Img variant="top" src={`http://localhost:90/${pro.profileImg}`} className="cardImg" />
  <Card.Body>
    
    <Card.Title className="text-center">{pro.experience}</Card.Title>
 
   
    <div>
        
         <p><strong>Email: </strong>{pro.email}</p>
      </div>

      <div>
      <p><strong>Contact: </strong>{pro.contact}</p>
          </div>

      <div>
         {/* <p style={{float:"right"}}><strong>Vehicle Model </strong>{pro.experience}</p> */}
         <p><strong>Charge: </strong>Rs {pro.wage}/day</p>
      </div>
   

    
   
    
   <div className="text-center">
       <Link className="btn btn-outline-primary btn-md w-50 mt-3" name="viewProfessional" to={`/showPro/`+pro._id}> View</Link>
   </div>
    


    
  </Card.Body>
</Card>
                            </Col>

                            
                     
                        )
                       
                    })
                }
                    
                </Row>    
                </Container>    
                


                </Row>
            </Container>
         
        </React.Fragment>
    )
}

export default Professionals;
