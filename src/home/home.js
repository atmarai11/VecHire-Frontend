import { Button } from 'bootstrap';
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import FirstSection from '../home/firstSection';
import SecondSection from '../home/secondSection';
import ThirdSection from '../home/thirdSection';


const Home = (props)=>{
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col>
                        <FirstSection/>
                        <ThirdSection/>
                        <SecondSection/>
                        
                     
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Home;