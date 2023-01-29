
import React,{useState,useEffect} from 'react';
import {Container,Row,Col,Card,Dropdown,Carousel} from 'react-bootstrap';
import './futsal.css';
import FutsalCard from './futsalCard';
import axios from 'axios';
import AddWork from './addWork';




function FutsalPart2(props) {
    
    let [work,setWork] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:90/professional/showall')
        .then((response)=>{
            setWork(
                response.data.data
            )
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    
   

    
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
            
                        {/* <div className="futsalContainer" style={{marginTop:"8px"}}>
                            <h5 className="text-center mt-1 mb-1" style={{fontWeight:"bold",fontSize:"24px",color:"red"}}> Hire Vehicle of your choice!! </h5>
                        </div> */}
                        <Col>
                        <Carousel className="carosel mt-4"  style={{boxShadow:"0px 0px 35px rgba(0,0,0,0.6)",height:"500px", }}>
  <Carousel.Item>
    <img
    
      className="d-block w-100"
      src="car1.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="car3.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="car2.jpg  "
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>

<h5 className="text-center mt-3 mb-2" style={{fontWeight:"bold",fontSize:"15px"}}> Choose a Vehicle type </h5>
                        </Col>
                        <Row className="mt-4">
                            {
                                work.map((w)=>{
                                    return(
                                        <Col lg={4} xs={6}>
                                          <FutsalCard futsal={w} key={w._id}/>
                                        </Col>







                                    )
                                })
                               
                            }
                          
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default FutsalPart2
