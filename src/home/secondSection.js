import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {FaHandsHelping} from 'react-icons/fa'


const SecondSection = (props)=>{
    return (
        <React.Fragment>
            
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        
                        <div className="wrapper2">
                            <h2>Why Choose us?</h2>
                            <div className="line" style={{width:"600px",border:"4px solid orange",marginBottom:"8px"}}></div>
                            

                            
                            <div className="single-service">
                                <div className="social"><p><FaHandsHelping /></p></div>
                                <span></span>
                                <h3>Reliability</h3>
                                <p>As all the Vehicle are reviewed multiple times to insure our customers the customer can be 
                                    depeneded on security.
                                    
                                </p>
                            </div>
                            <div className="single-service">
                                <div className="social"><FaHandsHelping/></div>
                                <span></span>
                                <h3>Verified Vehicles</h3>
                                <p>The document of vehicle has to be submitted, and to be verified by
                                    admin
                                </p>
                            </div>
                            <div className="single-service">
                                <div className="social"><FaHandsHelping/></div>
                                <span></span>
                                <h3>Multiple chice </h3>
                                <p>Customers can choose vehicles by looking at the details of the Vehicel.</p>
                            </div>

                            

                            <div className="single-service">
                                <div className="social"><p><FaHandsHelping /></p></div>
                                <span></span>
                                <h3>Low Price Gurantee</h3>
                                <p>We charge less and have more option for you to hire a vehicle.
                                    
                                </p>
                            </div>
                            <div className="single-service">
                                <div className="social"><FaHandsHelping/></div>
                                <span></span>
                                <h3>Services on multiple places</h3>
                                <p>We have our service extended to kathmandu valley and we are planning to extend to other parts aswell. </p>
                            </div>
                            <div className="single-service">
                                <div className="social"><FaHandsHelping/></div>
                                <span></span>
                                <h3>Offers</h3>
                                <p>We offer our loyal customers discounts and gift vouchers. And on specia occassions we do offer heavy discount on our service.</p>
                            </div>

                        </div>
                    </Col>
                   
                </Row>
            
        </React.Fragment>
    )
}

export default SecondSection;