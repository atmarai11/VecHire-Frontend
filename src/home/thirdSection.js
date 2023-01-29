import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const ThirdSection = (props)=>{
    return(
        <React.Fragment>
            <div className="desc__img mt-5">
                <Row>
                    <Col lg={6} className="d-none d-md-block d-lg-block">

                    </Col>
                    <Col lg={6} md={12} xs={12}>
                        <div className="ambition__home mt-5 mr-5 ml-3" style={{float:"right",color:"white",marginRight:"10%"}}>
                            <h5 style={{fontSize:"42px",fontWeight:"bolder"}}> VecHire </h5>
                            <div style={{width:"370px",border:"4px solid orange",marginBottom:"8px"}}></div>
                            <p style={{textAlign:"justify"}}>
                                VecHire is a site where anyone can hire a vehicle from anywhere.
                                All kind of four whellers are available here at low charge. Multiple choices of same Catogory are available.
                                The P2P service can help users to rent out their vehicle by listing the vehicle in the application.
                                All the documents provided by vehicle owner are reviewed before accepting as host which gives more reliability to customers.
                            </p>
                            <p style={{textAlign:"justify"}}>
                            
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default ThirdSection