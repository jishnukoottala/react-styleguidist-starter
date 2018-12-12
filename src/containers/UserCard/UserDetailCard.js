import React from 'react'
import './userdetailcard.css'
import PropTypes from 'prop-types';
import Button from 'components/Button/CustomButton'
import {Link } from "react-router-dom"
import UserDetailCardContainer from 'components/UserDetailCard/UserDetailCard'
/**
 * The User Detail card is rendered in the home page to display very less detail about the user
 */
export default function UserDetailCard(props) {
  return (
    <UserDetailCardContainer>
    <div className="data-section"> <h1>{props.name}</h1>
      <h2>{props.email}</h2></div>
    <div className="button-section"> 
    
    <Link to={`profile/${props.id}`}>
    <Button id={props.id}>Know more</Button>
    </Link>
    </div>
     
     
    </UserDetailCardContainer>
  )
}


UserDetailCard.propTypes = {
	/**
	 * User Name , can be full name
	 */
    name: PropTypes.string,
    

    /**
	 * User Email
	 */
    email: PropTypes.string,

    /**
	 * title - Name , the main content to be displayed
	 */
    title: PropTypes.string,


   	
};