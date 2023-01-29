import React,{ Component } from "react";
import {Link,NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {GiEntryDoor,GiExitDoor} from 'react-icons/gi';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import {MdArrowDropDown} from 'react-icons/md'
import { BiLogOut } from "react-icons/bi";


const Header = ()=>
{

  const loggout = (e)=>{
     localStorage.clear();
     window.location.href = "/login";
  }
 
      var token = localStorage.getItem('token');
      var user = JSON.parse(localStorage.getItem('loggedInUser'));
        return(
            <React.Fragment>
                <div id="mainHeader">
                <Navbar  expand="lg"  id="myMenu">  
  <Navbar.Brand href="/" style={{fontWeight:"bolder"}}>
    <span style={{color:"black"}}>Vec</span><span style={{color:"white"}}>Hire</span>
    {/* <img src ="logo_futsal.png" className="d-block" style={{width:"110px",height:"90px"}}></img> */}
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  
    
 
    

    <Nav className="ml-auto mr-2">
    
      
        
      <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
        {
          !user?
          (
            <></>
          ):
          user.userType == "Admin"?
          (
            <NavLink className="nav-link" activeClassName="active" exact to="/admin">Admin</NavLink>
          ):
          (
            <></>
          )
        }
           {
             !user?
             (
               <></>
             ):
          user.userType == "Customer"?
          (
            <NavLink className="nav-link" activeClassName="active" exact to="/requestForProfessional">List your Vehicle</NavLink>
          ):
          (
            <></>
          )
        }

        {
             !user?
             (
               <></>
             ):
        
          (
            <NavLink className="nav-link" activeClassName="active" exact to="/myHireRequest">My Hire Request</NavLink>
          )
        }

        {
             !user?
             (
               <></>
             ):

             user.userType == "Professionals"?
        
          (
            <NavLink className="nav-link" activeClassName="active" exact to="/showMyRequest">Requests for Rent</NavLink>
          ):
          (
            <></>
          )
        }
    <NavLink className="nav-link" activeClassName="active"  to="/category">Categories</NavLink>
        {
          !token?
          (
            <NavLink  className="nav-link" to="/login"><GiEntryDoor/> Account</NavLink>
          ):
          (
            <div class="dropdown">
            <button style={{background:"none",border:"none",marginTop:"11px",fontWeight:"bolder",fontSize:"11px", color:"white"}}  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {user.first_name} <MdArrowDropDown/>
            </button>
            <div class="dropdown-menu" style={{cursor:"pointer"}} aria-labelledby="dropdownMenuButton">
              <p className="dropdown-item" onClick = {(event)=>{loggout(event)}}>Logout</p>
            </div>
          </div>
          )
        }
         
       
     
      
    </Nav>
  
   
  </Navbar.Collapse>
</Navbar>

                </div>
            </React.Fragment>
        )
    }    

export default Header;