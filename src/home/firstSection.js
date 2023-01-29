import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';

const FirstSection = (props)=>{
    return (
        <React.Fragment>

<div className="main__imgs w-100">
                           <Row>
                               <Col lg={12} md={12} xs={12}>
                               <div className="left__detail">
                            <div className="top__bar">
                                <p style={{color:"#ff8c20"}}> Hire all kinds of vehicle for  </p>
                                <p style={{color:"white"}}> Yourself </p>
                            </div>
                            <Row>
                                <Col lg={3} md={6} xs={1}></Col>
                                <Col lg={6} md={9} xs={10}>
                                <div className="top__bar2" >
                                <p> <b>"One and only Vechicle hiring application in Nepal."</b> 
                                <br/>
                                
                                
                                 </p>

                                <Link className="btn btn-primary btn-lg w-75" style={{marginTop:"4%",marginLeft:"100px"}} to="/category"> Hire Now </Link> 
                            </div>
                                </Col>
                            </Row>
                           
                            
                        </div>
                               </Col>
                           </Row>
                        </div>
{/* 
<Container>
    <Row>
        <Col lg={12} className="mt-4">
        <Carousel style={{boxShadow:"0px 0px 35px rgba(0,0,0,0.6)"}}>
  <Carousel.Item>
    <img
    
      className="d-block w-100"
      src="wor.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="foreign-worker-rights.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="work.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Col>
    </Row>
</Container>
 */}


        </React.Fragment>
    )
}

export default FirstSection;