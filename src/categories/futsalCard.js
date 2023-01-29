import React,{useEffect,useState} from 'react';
import './futsal.css';
import {FaPhoneAlt,FaStar,FaInfoCircle,FaHeart} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import {Card,Dropdown,Container,Row,Col} from 'react-bootstrap';




const FutsalCard = (props,key)=>{
    
    return (
        <React.Fragment>
            <Card className="futsalCard">
            
  <Card.Img variant="top" src={`${process.env.REACT_APP_URL}${props.futsal.WorkImg}`} className="cardImg" />

   <Card.Body>
    <Card.Title className="text-center">{props.futsal.WorkName}</Card.Title>
    

   <div className="ratings ml-auto mr-auto">
       <p className="text-center" style={{fontSize:"21px"}}>
       
       <StarRatings
          rating={props.futsal.AvgRating}
          starRatedColor="gold"
          starDimension="30px"
          starSpacing="3px"
          numberOfStars={5}
          name={props.futsal._id}
         
        />
       </p>
   </div>
    
    <div className="text-center">
        <Link className="btn btn-primary my__login__btns mt-2" to={"/professional/"+props.futsal.WorkName}> View </Link>
    
        </div>                               
                                           
        
     
  </Card.Body>

 

{/* make a component for modal */}
  


                                  


 

    
</Card>
        </React.Fragment>
    )
}

export default FutsalCard;