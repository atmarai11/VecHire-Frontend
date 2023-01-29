import axios from 'axios';
import React, { useState } from 'react';
import { Container,Col,Row} from 'react-bootstrap';
import {FaUser} from 'react-icons/fa';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useToasts} from 'react-toast-notifications'
import Footer from '../footer/footer';
import {MdEmail, MdLock} from 'react-icons/md';
import swal from 'sweetalert';


const Login = (props)=>{ 
    let [loginCredentials,setCredentials] = useState({
        "username":"",
        "password":""
    });
    let {addToast} = useToasts();
    let [error,setError] = useState({});
    const loginUser = (e)=>
    {
        e.preventDefault();
        const credentials = {
            "un":loginCredentials.username,
            "pw":loginCredentials.password
        };
    
        axios.post(process.env.REACT_APP_URL+"login/user",credentials).then(
            (response)=>{
                const data = response['data'];
               
                if(data.success === true)
                {
                    
                    
                    localStorage.setItem('token',data.token);
                    
                    localStorage.setItem('loggedInUser',JSON.stringify(data.data));
                   
                    window.location.href = "/"
                  
                }
                else {
                    
                    addToast(`${data.message}`,{
                        appearance:"warning",
                        autoDismiss:true
                    });
                
                    setError(
                        {
                            "error":data.message
                        }
                    )
                }
            }
        ).catch((err)=>{
           console.log(err.response);
        });
    }
    return(
        <React.Fragment>
            <div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-12 col-12 col-md-12">
                                    <div className = "main__layer">
                                        <h5> VecHire Account </h5>
                                    </div>
                    </div>

                    <Container>

                        <Row>
                            <Col className="reg__form">
                            <Row>
                                <Col lg={12}>
                                <div className="reg__title">
                                    <p style={{padding:"12px",fontWeight:"bolder"}}> Login </p>

                                </div>
                                <div className="welcome__message">
                                    <p> Please enter your credenials here </p>
                                </div>
                                

                                
                                <Row>

                                    <Col lg={1} className="d-none d-md-none d-lg-block"></Col>
                                    <Col lg={10}>
                                       <form method="post" className="reg__form2" onSubmit={loginUser}>
                                       <div className="form-group">
                                            
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                    <FaUser  style={{color:"blue",fontSize:"13px"}}/>
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control"  name='un' required placeholder="Username" onChange={(event)=>{setCredentials({...loginCredentials,username:event.target.value})}}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                                
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                       <MdLock style={{color:"red",fontSize:"13px"}}/>
                                                    </span>
                                                </div>
                                                <input type="password" className="form-control" name='pw' required placeholder="Password" onChange = {(event)=>{setCredentials({...loginCredentials,password:event.target.value})}}/>
                                            </div>
                                            {error["error"] && (<p className="regVal__error"> {error["error"]} </p>)}
                                        </div>
                                        <Row>
                                            <Col lg={6} md={6} xs={6}>
                                                <a href = "#"> Forgot login details? </a>
                                            </Col>
                                            <Col lg={6} md={6} xs={6}>
                                                <button className="btn my__login__btn" type="submit" name="register"> Sign in </button>
                                            </Col>
                                        </Row>
                                       </form>
                                    </Col>
                                    <Col lg={1} className="d-none d-md-none d-lg-block"></Col>
                                </Row>

                                </Col>

                                
                                <Col md={12}>
                                {/* <div className="reg__title">
                                    <p style={{padding:"12px",fontWeight:"bolder"}}> Sign up </p>
                                </div>  */}

                                <div className = "registration__suggestion">
                                    <h5> Please register yourself on VecHire as Customer </h5>
                                    
                                    <div className="missed__lists">
                                        <ul>
                                            
                                        </ul>
                                    </div>
                                    <Link to="/register" className="btn btn-block" style={{background:"#fa9522",color:"white"}}>Sign Up here</Link>
                                </div>
                                </Col>
                            </Row>
                               
                                
    



                            </Col>

                        </Row>

                    </Container>
                   
                </div>
            </div>
        </div>
         
        </React.Fragment>
    )
}

export default Login;