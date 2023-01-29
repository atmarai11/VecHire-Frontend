


import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles.js";
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube} from 'react-icons/ai';

const Footer = () => {
return (
	<Box>

	<h1 style={{ color: "orange",
				textAlign: "center",
				marginTop: "-50px",
        
        }}>
		VecHire: Hire all kind of vehicle of your need. 
	</h1>
	<Container>
		<Row>
		<Column >

    
			<Heading style={{margin:"9px 0px 0px 0px",padding:"3px",border:"1px solid white"}}>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading style={{margin:"10px 0px 0px 0px",padding:"3px",border:"1px solid white"}}>Services</Heading>
			<FooterLink href="#">Training</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Categories</FooterLink>
			<FooterLink href="#">Hiring</FooterLink>
		</Column>
		<Column>
			<Heading style={{margin:"9px 0px 0px 0px",padding:"3px",border:"1px solid white"}}>Contact Us</Heading>
			<FooterLink href="#">Dillibazar</FooterLink>
			<FooterLink href="#">Thulo Bharyang</FooterLink>
			<FooterLink href="#">Bhaktapur</FooterLink>
			<FooterLink href="#">Lalitpur</FooterLink>
		</Column>
		<Column  >
			<Heading style={{margin:"9px 0px 0px 0px",padding:"3px",border:"1px solid white"}}>Social Media</Heading>
			<FooterLink href="#">
			<i >
      <AiOutlineFacebook/>
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>

  
			<FooterLink href="#">
			<i >
      <AiOutlineInstagram/>
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>


			<FooterLink href="#" >
			<i >
      <AiOutlineTwitter/>
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">

			<i>
      <AiOutlineYoutube/>
        
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
