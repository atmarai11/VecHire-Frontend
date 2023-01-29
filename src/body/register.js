import React,{useState} from 'react';
import axios from 'axios';
import {useRegistration} from '../customHooks/registrationHook';
import {validation} from '../utils/validation';
import {Container,Col,Row} from 'react-bootstrap';
import Footer from '../footer/footer';
import {MdPerson,MdEmail,MdLocationOn,MdPhone,MdLock} from 'react-icons/md';
import {FaBirthdayCake} from 'react-icons/fa';

const checkMonAndDate = (val)=>{
    if(val <10)
    {
        val = '0'+val;
    }
    return val;
}


let todayDate = new Date();
let currentYear = todayDate.getFullYear();
let beforeYear = currentYear - 80;
let minDate = `${beforeYear}-${checkMonAndDate(todayDate.getMonth())}-${checkMonAndDate(todayDate.getDate())}`;
let maxDate = `${currentYear}-${checkMonAndDate(todayDate.getMonth())}-${checkMonAndDate(todayDate.getDate())}`;
 
   
const Register = ()=>{
    let {formData,userDetails,submitForm,error} = useRegistration(validation);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  

    return (
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
                                <div className="reg__title">
                                    <p style={{fontWeight:"bolder",padding:"12px"}}>  New account </p>
                                </div>
                                <div className="welcome__message">
                                    <p> Sign Up here </p>
                                </div>
                                <div style={{width:"100%",border:"1px solid grey",background:"grey"}}></div>
                                <p style={{fontWeight:"bolder",color:"#525252",margin:"10px 0px 0px 40px",fontSize:"22px"}}> Please fill the form to register. </p>

                                <Row>

                                    <Col lg={2} className="d-none d-md-none d-lg-block"></Col>
                                    <Col lg={8}>
                                        <form className="reg__form was-validated" method="post" onSubmit={submitForm}>
                                        <div className="form-group">
                                            {/* <label> Firstname <span> *Required </span></label> */}
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <MdPerson style={{color:"black",fontSize:"17px"}}/>
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control" name='first_name' value={userDetails['first_name']} onChange={(event)=>{formData(event)}} required placeholder="Firstname"/>
                                            </div>
                                           {error['first_name'] && (<p className="regVal__error"> {error['first_name']} </p>)}
                                        </div>


                                        <div className="form-group">
                                            {/* <label> Lastname <span> *Required </span> </label> */}
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                    <MdPerson style={{color:"black",fontSize:"17px"}}/>
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control" name='last_name' value={userDetails['last_name']} required placeholder="Lastname"
                                                    onChange = {(event)=>{formData(event)}}
                                                />
                                            </div>
                                            {error['last_name'] && (<p className="regVal__error"> {error['last_name']} </p>)}
                                        </div>

                                        <div className="form-group">
                                            {/* <label> Email <span> *Required </span></label> */}
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                    <MdEmail style={{color:"black",fontSize:"17px"}}/>
                                                    </span>
                                                </div>
                                                <input type="email" className="form-control" name='email' value={userDetails['email']} required placeholder="Email"
                                                     onChange = {(event)=>{formData(event)}}
                                                />
                                            </div>
                                            {error['email'] && (<p className="regVal__error"> {error['email']} </p>)}
                                        </div>

                                        

                                        <div className="form-group">
                                            {/* <label> Username <span> *Required </span></label> */}
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                    <MdPerson style={{color:"black",fontSize:"17px"}}/>
                                                    </span>
                                                </div>
                                                <input type="text" className="form-control" name='username' value={userDetails['username']} required placeholder="Username"
                                                    onChange = {(event)=>{formData(event)}}
                                                />
                                            </div>
                                            {error['username'] && (<p className="regVal__error"> {error['username']} </p>)}
                                        </div>
                                       
                                        

                                        

                                        <div className="form-group">
                                            {/* <label> Password <span> *Required </span></label> */}
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                    <MdLock style={{color:"black",fontSize:"17px"}}/>
                                                    </span>
                                                </div>
                                                <input type="password" className="form-control" name='password' required placeholder="Password"
                                                    onChange = {(event)=>{formData(event)}}
                                                />
                                            </div>
                                            {error['password'] && (<p className="regVal__error"> {error['password']} </p>)}
                                        </div>
                        

                                        <div className="form-group">
                                            <input type="checkbox" id="condition" onChange = {()=>setIsButtonDisabled(!isButtonDisabled)} required />
                                            <label style={{marginLeft:"4px"}} for="condition"> I accept every terms and conditions. </label>
                                            </div>
                                            
                                        <div style={{width:"100%",border:"1px solid grey",background:"grey"}}></div>    
                                            
                                            
                                        <button type="submit"  className="btn my__reg__btn" id="registrationButton"  name="register" disabled={isButtonDisabled}> Sign Up </button>
                          
                                        </form>
                                    </Col>
                                    <Col lg={2} className="d-none d-md-none d-lg-block"></Col>
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

export default Register;