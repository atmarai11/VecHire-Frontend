import React,{useState,useEffect} from 'react';
import '../style.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Container,Row,Col} from 'react-bootstrap';
import {AiFillPlusCircle} from 'react-icons/ai'
import {HiUserAdd} from 'react-icons/hi'
import {GrOverview} from 'react-icons/gr'


import TabPanel  from './tabPanel';
import AddWork from '../categories/addWork';

import ViewRequests from './viewRequests'

const Admin = () => {
    let [value,setValue] = useState(0);
    const handleChange = (e,val)=>{
        setValue(
            val
        )
    }
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col lg={2} className="d-none d-md-block"></Col>
                    <Col lg={12}>
                    <div className="tab__toggle mt-2">
                        <AppBar position="static" style={{background:"#71a823"}}>
                            <Tabs
                               value={value}
                               onChange={handleChange}
                               
                            >
                                
                                <Tab icon={<HiUserAdd style={{fontSize:"21px"}}/>} label="Add Vehicle Type"/>
                                <Tab icon={<GrOverview style={{fontSize:"21px"}}/>} label="View Requests"/>
                                {/* <Tab icon={<AiFillPlusCircle style={{fontSize:"21px"}}/>} label="Top Bookings"/>
                                <Tab icon={<AiFillPlusCircle style={{fontSize:"21px"}}/>} label="Extra"/> */}
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0} >
                            <AddWork/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                         <ViewRequests/>
                        </TabPanel>
                        {/* <TabPanel value={value} index={2}>
                        <p>This world is bad</p>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                        <p>This world is nice</p>
                        </TabPanel> */}
                    </div>
                    </Col>   
                    <Col lg={2} className="d-none d-md-block"></Col>
                </Row>
            </Container>
          
        </React.Fragment>
    )
}

export default Admin
